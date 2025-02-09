import { getPosts } from "@/lib/posts";

export async function GET() {
  const posts = getPosts();
  return Response.json(posts);
}
