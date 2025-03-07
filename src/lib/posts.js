import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPosts() {
  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

  if (!fs.existsSync(postsDirectory)) {
    console.error("O diretório de posts não existe.");
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      ...data, 
      content, 
    };
  });
}