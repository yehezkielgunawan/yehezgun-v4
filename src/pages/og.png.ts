import type { APIRoute } from "astro";
import { generateOGImageForSite } from "scripts/generateOgImages";

export const GET: APIRoute = async () =>
  new Response(await generateOGImageForSite(), {
    headers: { "Content-Type": "image/png" },
  });
