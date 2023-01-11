import fs from "node:fs/promises";
import matter from "gray-matter";
import removeMd from "remove-markdown";

const articles = await fs.readdir("./docs/articles");

const contentAfterTitle = (file) => {
    //o file.excerpt = file.content.split("\r\n").slice(1).join(" "); //.join(' ');
    file.excerpt = file.content.split("\n").filter(Boolean).slice(1).join('')
}

const data = await Promise.all(
  articles.map(async (article) => {
    const file = matter.read(`./docs/articles/${article}`, {
      excerpt: contentAfterTitle,
    });
    const { data, excerpt, path } = file;
   // console.log(file);
    const contents = removeMd(excerpt)
      .trim()
      .split(/\r\n|\n|\r/);

    const ans = {
      ...data,
      path: path.replace("./docs/", "").replace(/\.md$/, ".html"),
      excerpt: contents[0].replaceAll(">", ""),
      /* .slice(1)
                .join('')
                .replace(/\s{2,}/g, '')
                .trim(),*/
    };

    return ans;
  })
);

await fs.writeFile(
  "./data.json",
  JSON.stringify(data.sort((a, b) => (a.Updated > b.Updated ? -1 : 1))),
  "utf-8"
);
