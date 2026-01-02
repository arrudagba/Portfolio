import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "app/blog/posts");

export interface Post {
  slug: string;
  title?: string;
  date?: string;
  tag?: string[];
  content: string;
  [key: string]: any;
}

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  time: string;
  tag: string[];
  description: string;
}

export interface PostData extends PostMetadata {
  contentHtml: string;
}

export function getPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    console.error("O diretório de posts não existe.");
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter(filename => filename.endsWith('.md'))
    .map((filename) => {
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

export function getAllPosts(): PostMetadata[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        slug,
        title: matterResult.data.title || "",
        date: matterResult.data.date || "",
        time: matterResult.data.time || "",
        tag: matterResult.data.tag || [],
        description: matterResult.data.description || "",
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostBySlug(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: matterResult.data.title || "",
    date: matterResult.data.date || "",
    time: matterResult.data.time || "",
    tag: matterResult.data.tag || [],
    description: matterResult.data.description || "",
  };
}
