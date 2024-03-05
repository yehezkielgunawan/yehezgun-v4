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

export const collections = {
  projects: ProjectsCollection,
};
