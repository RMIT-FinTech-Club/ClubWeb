const { marked } = require("marked");
const path = require("path");
const { readFile, writeFile, templatize } = require("../js/util/ssg");
const { db } = require("../js/firebase-admin");

const templatePath = path.join(__dirname, "templates");

const projectCollection = db.collection("projects");

const getAllProjects = async () => {
  const ss = await projectCollection.get();
  const projects = ss.docs.map((doc) => doc.data());
  return projects;
};

const main = async () => {
  const projectTemplate = await readFile(
    path.join(templatePath, "project.html")
  );

  const generateProjectHtml = (project) => {
    const { name, startDate, endDate, description, slug, coverUrl } = project;
    return templatize(projectTemplate, {
      "{{name}}": name,
      "{{startDate}}": startDate,
      "{{endDate}}": endDate,
      "{{description}}": marked.parse(description),
      "{{slug}}": slug,
      "{{coverUrl}}": coverUrl,
    });
  };

  try {
    const projects = await getAllProjects();
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
