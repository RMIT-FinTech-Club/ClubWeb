const { marked } = require("marked");
const axios = require("axios").default;
const path = require("path");
const { readFile, writeFile, templatize } = require("../js/util/ssg");
const { dateToDMY } = require("../js/util/date");

const api = axios.create({
  baseURL: "https://fintech-blog-cms.herokuapp.com",
});
const POSTS_ROUTE = "/posts";
const _sort = "created_at:DESC";
const templatePath = path.join(__dirname, "templates");
const pagePath = path.join(templatePath, "pages");
const componentPath = path.join(templatePath, "components");

const main = async () => {
  // Pages
  const IndexPage = await readFile(path.join(pagePath, "index.html"));
  const PostPage = await readFile(path.join(pagePath, "post.html"));
  // Components
  const PostItem = await readFile(path.join(componentPath, "PostItem.html"));
  const Tag = await readFile(path.join(componentPath, "Tag.html"));

  const generateTagHtml = (tag) => {
    const { name, slug } = tag;
    return templatize(Tag, {
      "{{name}}": name,
      "{{slug}}": slug,
    });
  };

  const generatePostPageHtml = (post) => {
    const {
      created_at,
      slug,
      title,
      author,
      description,
      coverUrl,
      content,
      tags = [],
    } = post;
    const { name, avatarUrl, username, bio } = author || {};
    const tagsHtml = tags.map((tag) => generateTagHtml(tag)).join("\n");
    return templatize(PostPage, {
      "{{slug}}": slug,
      "{{title}}": title,
      "{{coverUrl}}": coverUrl,
      "{{description}}": description,
      "{{author.username}}": username,
      "{{author.bio}}": bio,
      "{{content}}": marked.parse(content),
      "{{author.name}}": name,
      "{{author.avatarUrl}}": avatarUrl,
      "{{tags}}": tagsHtml,
      "{{createdAt}}": dateToDMY(new Date(created_at)),
    });
  };

  const generatePostItemHtml = (post) => {
    const {
      created_at,
      slug,
      title,
      author,
      description,
      coverUrl,
      tags = [],
    } = post;
    const { name, avatarUrl, username, bio } = author || {};
    const tagsHtml = tags.map((tag) => generateTagHtml(tag)).join("\n");
    return templatize(PostItem, {
      "{{slug}}": slug,
      "{{title}}": title,
      "{{coverUrl}}": coverUrl,
      "{{description}}": description,
      "{{author.username}}": username,
      "{{author.bio}}": bio,
      "{{author.name}}": name,
      "{{author.avatarUrl}}": avatarUrl,
      "{{tags}}": tagsHtml,
      "{{createdAt}}": dateToDMY(new Date(created_at)),
    });
  };

  const generateTopicPostsHtml = (posts, topicSlug) => {
    const topicPosts = posts.filter((p) => p.topic?.slug === topicSlug);
    return topicPosts.map((post) => generatePostItemHtml(post)).join("\n");
  };

  const generateIndexPageHtml = (posts) => {
    return templatize(IndexPage, {
      "{{our-picks}}": generateTopicPostsHtml(posts, "our-picks"),
      "{{collections}}": generateTopicPostsHtml(posts, "collections"),
      "{{feature-print}}": generateTopicPostsHtml(posts, "feature-print"),
    });
  };

  try {
    const res = await api.get(POSTS_ROUTE, { params: { _sort } });
    const posts = res.data || [];
    const slugs = posts.map((post) => post.slug);

    // Generate home page
    const indexHtml = generateIndexPageHtml(posts);
    await writeFile(path.join(__dirname, "index.html"), indexHtml);

    // Generate individual pages
    for (const slug of slugs) {
      if (!slug) continue;
      try {
        const postRes = await api.get(`${POSTS_ROUTE}/${slug}`);
        const post = postRes.data;
        const html = generatePostPageHtml(post);
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
