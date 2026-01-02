import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  const postsDirectory = path.join(process.cwd(), "app/blog/posts");
  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      { error: "Post not found" },
      { status: 404 }
    );
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  if (!Array.isArray(data.tag)) {
    data.tag = data.tag ? [data.tag] : [];
  }

  const contentHtml = marked(content);

  return NextResponse.json({
    slug,
    ...data,
    contentHtml,
  });
}
