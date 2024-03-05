import { defineCollection, z } from "astro:content";

const ProjectsCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    projectDesc: z.string(),
    projectIcon: z.string(),
    projectHeroImage: z.string().optional(),
    stacks: z.array(z.string()),
    projectUrl: z.string(),
    isFeatured: z.boolean(),
  }),
});

export const collections = {
  projects: ProjectsCollection,
};
