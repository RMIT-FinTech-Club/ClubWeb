const { marked } = require("marked");
const axios = require("axios").default;
const fs = require("fs");
const path = require("path");

const api = axios.create({
  baseURL: "https://fintech-blog-cms.herokuapp.com",
});
const POSTS_ROUTE = "/posts";
const _sort = "created_at:DESC";
const templatePath = path.join(__dirname, "templates");

const readFile = async (path) => {
  const file = await fs.promises.readFile(path, "utf-8");
  return file.toString();
};

const writeFile = async (path, content) => {
  await fs.promises.writeFile(path, content, "utf-8");
};

String.prototype.replaceAll = function (find, replace) {
  const str = this;
  return str.replace(new RegExp(find, "g"), replace);
};

// NOTE: focus on this function only

const templatize = (template, map) => {
  let content = template;
  for (const [key, value] of Object.entries(map)) {
    content = content.replaceAll(key, value);
  }
  return content;
};

const main = async () => {
  const postTemplate = await readFile(path.join(templatePath, "post.html"));
  const tagTemplate = await readFile(path.join(templatePath, "tag.html"));

  const generateTagHtml = (tag) => {
    const { name, slug } = tag;
    return templatize(tagTemplate, {
      "{{name}}": name,
      "{{slug}}": slug,
    });
  };

  const generatePostHtml = (post) => {
    const {
      slug,
      title,
      author,
      description,
      coverUrl,
      content,
      tags = [],
    } = post;
    const { name, avatarUrl, username, bio } = author || {};
    const tagsHtml = tags.map((tag) => generateTagHtml(tag)).join("");
    if (!slug) return;
    return templatize(postTemplate, {
      "{{title}}": title,
      "{{coverUrl}}": coverUrl,
      "{{description}}": description,
      "{{author.username}}": username,
      "{{author.bio}}": bio,
      "{{content}}": marked.parse(content),
      "{{author.name}}": name,
      "{{author.avatarUrl}}": avatarUrl,
      "{{tags}}": tagsHtml,
    });
  };

  try {
    const res = await api.get(POSTS_ROUTE, { params: { _sort } });
    const posts = res.data || [];
    const slugs = posts.map((post) => post.slug);
    for (const slug of slugs) {
      if (!slug) continue;
      try {
        const postRes = await api.get(`${POSTS_ROUTE}/${slug}`);
        const post = postRes.data;
        const html = generatePostHtml(post, postTemplate);
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
