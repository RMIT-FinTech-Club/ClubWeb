const fs = require("fs");

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

module.exports = { readFile, writeFile, templatize };
