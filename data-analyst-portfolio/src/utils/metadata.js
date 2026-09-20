import { siteData } from "../data/siteData.js";
import { resolveRoute } from "./routes.js";
export const siteOrigin = "https://sai-praneeth-portfolio.netlify.app";
export const pagePaths = [
  "/",
  "/projects",
  "/about",
  ...siteData.projects.map((project) => `/projects/${project.slug}`),
];
export function getMetadata(pathname) {
  const route = resolveRoute(pathname);
  const defaults = {
    title: "Sai Praneeth | Data Analytics & Engineering",
    description:
      "Data analysis, analytics engineering, and data engineering by Sai Praneeth. Explore working products, technical case studies, and role-specific resumes.",
    image: siteOrigin + siteData.profileImage,
    url: siteOrigin + (pathname.replace(/\/+$/, "") || "/"),
    type: "website",
  };
  if (route.type === "project")
    return {
      ...defaults,
      title: `${route.project.shortTitle} | Sai Praneeth`,
      description: route.project.impact,
      image: siteOrigin + route.project.image,
      type: "article",
    };
  if (route.type === "projects")
    return {
      ...defaults,
      title: "Projects | Sai Praneeth",
      description:
        "Explore RetailIQ, Forensic Analytics, Mixalyzer, and NexGen: data products with live demos, source code, and technical case studies.",
      image: siteOrigin + siteData.projects[0].image,
    };
  if (route.type === "about")
    return {
      ...defaults,
      title: "About & Experience | Sai Praneeth",
      description:
        "MS Information Systems and AI candidate at UMD Smith with experience in retail analytics, behavioral research, AI instruction, and a Microsoft-sponsored healthcare capstone.",
    };
  if (route.type === "not-found")
    return {
      ...defaults,
      title: "Page not found | Sai Praneeth",
      noindex: true,
    };
  return defaults;
}
