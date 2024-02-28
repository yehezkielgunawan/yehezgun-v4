import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },

  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Title" },
        }),
        heroImage: fields.image({
          label: "Hero Image",
          validation: { isRequired: true },
        }),
        publishDate: fields.date({
          label: "Publish Date",
        }),
        blogType: fields.select({
          label: "Blog Type",
          options: [
            { label: "Random", value: "random" },
            { label: "Technical", value: "technical" },
          ],
          defaultValue: "random",
        }),
        shortDesc: fields.text({ label: "Short Description", multiline: true }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "name",
      path: "src/content/projects/*",
      schema: {
        name: fields.text({ label: "Project Name" }),
        projectDesc: fields.text({
          label: "Project Description",
          multiline: true,
        }),
        projectIcon: fields.image({ label: "Project Icon" }),
        projectHeroImage: fields.image({ label: "Project Hero Image" }),
        stacks: fields.array(fields.text({ label: "Tech Stack Icon Name" }), {
          label: "Tech Stack Icon Name",
          itemLabel: props => props.value,
        }),
        projectUrl: fields.text({ label: "Project Link" }),
      },
    }),
  },
});
