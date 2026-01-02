import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { visit } from 'unist-util-visit';
import { marked } from "marked";

function adjustImagePaths() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      if (node.url.startsWith('../')) {
        node.url = path.join('/images', path.basename(node.url));
      }
    });
  };
}

export async function GET(request, { params }) {
  const { slug } = await params;

  const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");
  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ error: "Post not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  if (!Array.isArray(data.tag)) {
    data.tag = data.tag ? [data.tag] : [];
  }

  const contentHtml = marked(content);


  return new Response(
    JSON.stringify({
      slug,
      ...data,
      contentHtml,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}