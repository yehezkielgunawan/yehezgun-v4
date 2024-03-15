import type { APIRoute } from "astro";
import { generateOGImageForSite } from "scripts/generateOgImages";

export const GET: APIRoute = async ({ url }) => {
  return new Response(await generateOGImageForSite(url.searchParams), {
    headers: { "Content-Type": "image/png" },
  });
};
