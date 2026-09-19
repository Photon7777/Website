import { siteData } from "../data/siteData.js";
export function resolveRoute(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return { type: "home" };
  if (path === "/projects") return { type: "projects" };
  if (path === "/about") return { type: "about" };
  const project = siteData.projects.find(
    (item) => path === `/projects/${item.slug}`,
  );
  return project ? { type: "project", project } : { type: "not-found" };
}
export function legacyDestination(pathname, hash) {
  if (!["/", "/projects", "/projects/"].includes(pathname)) return null;
  const slug = hash.replace(/^#case-study-/, "");
  if (
    hash.startsWith("#case-study-") &&
    siteData.projects.some((project) => project.slug === slug)
  )
    return `/projects/${slug}`;
  if (
    pathname === "/" &&
    [
      "#about",
      "#experience",
      "#education",
      "#distinctions",
      "#roles",
      "#resumes",
    ].includes(hash)
  )
    return `/about${hash}`;
  if (pathname === "/" && hash === "#projects") return "/projects";
  return null;
}
