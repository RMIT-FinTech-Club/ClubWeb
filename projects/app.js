const { marked } = require("marked");
const path = require("path");
const { readFile, writeFile, templatize } = require("../js/util/ssg");
const { db } = require("../js/firebase-admin");

const templatePath = path.join(__dirname, "templates");
const pagePath = path.join(templatePath, "pages");
const componentPath = path.join(templatePath, "components");

const projectCollection = db.collection("projects");

const getAllProjects = async () => {
  const ss = await projectCollection.get();
  const projects = ss.docs.map((doc) => doc.data());
  return projects;
};

const main = async () => {
  // Pages
  const IndexPage = await readFile(path.join(pagePath, "index.html"));
  const ProjectPage = await readFile(path.join(pagePath, "project.html"));

  // Components
  const ProjectItem = await readFile(
    path.join(componentPath, "ProjectItem.html")
  );

  const generateProjectHtml = (project) => {
    const { name, startDate, endDate, description, slug, coverUrl } = project;
    return templatize(ProjectPage, {
      "{{name}}": name,
      "{{startDate}}": startDate,
      "{{endDate}}": endDate,
      "{{description}}": marked.parse(description),
      "{{slug}}": slug,
      "{{coverUrl}}": coverUrl,
    });
  };

  const generateProjectItemHtml = (project) => {
    const { name, startDate, endDate, slug, coverUrl } = project;
    return templatize(ProjectItem, {
      "{{name}}": name,
      "{{startDate}}": startDate,
      "{{endDate}}": endDate,
      "{{slug}}": slug,
      "{{coverUrl}}": coverUrl,
    });
  };

  const generateIndexPageHtml = (projects) => {
    const projectsHtml = projects
      .map((project) => generateProjectItemHtml(project))
      .join("\n");
    return templatize(IndexPage, {
      "{{projects}}": projectsHtml,
    });
  };

  try {
    const projects = await getAllProjects();

    // Generate home page
    const indexHtml = generateIndexPageHtml(projects);
    await writeFile(path.join(__dirname, "index.html"), indexHtml);

    // Generate individual pages
    for (const project of projects) {
      const { slug } = project;
      if (!slug) continue;
      try {
        const html = generateProjectHtml(project);
        await writeFile(path.join(__dirname, `${slug}.html`), html);
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    console.log(e);
  }
};

main();
