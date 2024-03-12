import { getCollection, type CollectionEntry } from "astro:content";
import type { APIRoute } from "astro";
import { generateOGImageForPost } from "scripts/generateOgImages";

export interface Props {
  post: CollectionEntry<"posts">;
}

export async function getStaticPaths() {
  const blogList = await getCollection("posts");
  const postResult = blogList.map(post => ({
    params: { slug: post.slug },
    props: { post },
  }));
  return [...postResult];
}

export const GET: APIRoute = async ({ props }) =>
  new Response(
    await generateOGImageForPost(props as CollectionEntry<"posts">),
    {
      headers: { "Content-Type": "image/png" },
    },
  );
