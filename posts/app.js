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
const generatePostHtml = (post, template) => {
  const { slug, title, author, description, coverUrl, content } = post;
  const { name, avatarUrl, username, bio } = author || {};
  if (!slug) return;
  return replaceAllInMap(template, {
    "{{title}}": title,
    "{{coverUrl}}": coverUrl,
    "{{description}}": description,
    "{{author.username}}": username,
    "{{author.bio}}": bio,
    "{{content}}": marked.parse(content),
    "{{author.name}}": name,
    "{{author.avatarUrl}}": avatarUrl,
  });
};

const replaceAllInMap = (template, map) => {
  let html = template;
  for (const [key, value] of Object.entries(map)) {
    html = html.replaceAll(key, value);
  }
  return html;
};

const main = async () => {
  const postTemplate = await readFile(
    path.join(__dirname, "post.template.html")
  );
  const tagTemplate = await readFile(path.join(__dirname, "tag.template.html"));

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
