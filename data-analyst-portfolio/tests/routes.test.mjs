import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import { siteData } from "../src/data/siteData.js";
import { projectDetails, pipelineStages } from "../src/data/caseStudyData.js";
import { resolveRoute, legacyDestination } from "../src/utils/routes.js";
import { getMetadata, pagePaths } from "../src/utils/metadata.js";
test("routes resolve exactly and preserve all project destinations", () => {
  assert.equal(resolveRoute("/").type, "home");
  assert.equal(resolveRoute("/about/").type, "about");
  assert.equal(resolveRoute("/projects").type, "projects");
  for (const project of siteData.projects) {
    assert.equal(resolveRoute(`/projects/${project.slug}/`).project, project);
    for (const path of ["/", "/projects", "/projects/"])
      assert.equal(
        legacyDestination(path, `#case-study-${project.slug}`),
        `/projects/${project.slug}`,
      );
    assert.ok(projectDetails[project.slug].focus.length);
  }
  for (const path of [
    "/projects-missing",
    "/projects/missing",
    "/about/missing",
  ])
    assert.equal(resolveRoute(path).type, "not-found");
  assert.equal(legacyDestination("/", "#case-study-missing"), null);
});
test("existing section links continue to relocated content", () => {
  for (const section of [
    "about",
    "experience",
    "education",
    "distinctions",
    "roles",
    "resumes",
  ])
    assert.equal(legacyDestination("/", `#${section}`), `/about#${section}`);
  assert.equal(legacyDestination("/", "#projects"), "/projects");
  assert.equal(legacyDestination("/", "#skills"), null);
  assert.equal(legacyDestination("/about", "#experience"), null);
});
test("project share metadata and source links match each record", () => {
  assert.equal(new Set(pagePaths).size, pagePaths.length);
  for (const project of siteData.projects) {
    const meta = getMetadata(`/projects/${project.slug}`);
    assert.ok(meta.title.includes(project.shortTitle));
    assert.ok(meta.image.endsWith(project.image));
    assert.equal(meta.description, project.impact);
    assert.ok(project.links.some((link) => link.label === "GitHub"));
    assert.ok(project.links.some((link) => link.label === "Demo"));
  }
  assert.equal(getMetadata("/missing").noindex, true);
  for (const stage of pipelineStages)
    assert.ok(stage.source.endsWith(stage.file));
});
test("every published image and resume reference exists", async () => {
  const files = [
    siteData.profileImage,
    ...siteData.projects.map((project) => project.image),
    ...siteData.resumeVariants.map((resume) => resume.url),
  ];
  for (const file of files)
    await access(new URL(`../public${file}`, import.meta.url));
});
