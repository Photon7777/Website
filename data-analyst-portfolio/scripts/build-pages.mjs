import { mkdir, readFile, writeFile } from "node:fs/promises";
import { getMetadata, pagePaths, siteOrigin } from "../src/utils/metadata.js";
const dist = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", dist), "utf8");
const escape = (value) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ],
  );
function renderPage(path) {
  const meta = getMetadata(path);
  const tags = [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow"}" />`,
    `<link rel="canonical" href="${meta.url}" />`,
    ...Object.entries({
      title: meta.title,
      description: meta.description,
      type: meta.type,
      url: meta.url,
      image: meta.image,
      site_name: "Sai Praneeth",
    }).map(
      ([key, value]) =>
        `<meta property="og:${key}" content="${escape(value)}" />`,
    ),
    ...Object.entries({
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      image: meta.image,
    }).map(
      ([key, value]) =>
        `<meta name="twitter:${key}" content="${escape(value)}" />`,
    ),
  ].join("\n    ");
  return template.replace(
    /<!-- page-meta:start -->[\s\S]*?<!-- page-meta:end -->/,
    tags,
  );
}
// Emit route-specific metadata so link previews work before React loads.
for (const path of pagePaths) {
  const folder = new URL(`.${path === "/" ? "" : path}/`, dist);
  await mkdir(folder, { recursive: true });
  await writeFile(new URL("index.html", folder), renderPage(path));
}
await writeFile(new URL("404.html", dist), renderPage("/not-found"));
await writeFile(
  new URL("sitemap.xml", dist),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pagePaths.map((path) => `<url><loc>${siteOrigin}${path}</loc></url>`).join("")}</urlset>\n`,
);
await writeFile(
  new URL("robots.txt", dist),
  `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}/sitemap.xml\n`,
);
console.log(
  `Generated ${pagePaths.length} route documents, sitemap, and 404 page.`,
);
