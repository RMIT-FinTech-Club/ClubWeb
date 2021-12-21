const { marked } = require("marked");
const axios = require("axios").default;
const fs = require("fs");
const path = require("path");

const api = axios.create({
  baseURL: "https://fintech-blog-cms.herokuapp.com",
});
const POSTS_ROUTE = "/posts";
const _sort = "created_at:DESC";

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
const generateDynamicHtml = (template, post) => {
  const { slug, title, author, description, coverUrl, content } = post;
  const { name, avatarUrl, username, bio } = author || {};
  if (!slug) return;
  const html = template
    .replaceAll("{{title}}", title)
    .replaceAll("{{coverUrl}}", coverUrl)
    .replaceAll("{{description}}", description)
    .replaceAll("{{content}}", marked.parse(content))
    .replaceAll("{{author.name}}", name)
    .replaceAll("{{author.avatarUrl}}", avatarUrl)
    .replaceAll("{{author.username}}", username)
    .replaceAll("{{author.bio}}", bio);
  return html;
};

const main = async () => {
  const template = await readFile(path.join(__dirname, "template.html"));
  try {
    const res = await api.get(POSTS_ROUTE, { params: { _sort } });
    const posts = res.data || [];
    const slugs = posts.map((post) => post.slug);
    for (const slug of slugs) {
      if (!slug) continue;
      try {
        const postRes = await api.get(`${POSTS_ROUTE}/${slug}`);
        const post = postRes.data;
        const html = generateDynamicHtml(template, post);
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
