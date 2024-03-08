import { defineCollection, z } from "astro:content";

const ProjectsCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      projectDesc: z.string(),
      projectIcon: image(),
      projectHeroImage: image().optional(),
      stacks: z.array(z.string()),
      projectUrl: z.string(),
      isFeatured: z.boolean(),
    }),
});

const ArticleCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      heroImage: image(),
      publishDate: z.string(),
      blogType: z.string(),
      shortDesc: z.string(),
    }),
});

export const collections = {
  projects: ProjectsCollection,
  posts: ArticleCollection,
};
