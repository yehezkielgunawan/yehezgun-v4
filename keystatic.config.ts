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
          directory: "src/content/posts/",
          publicPath: "/src/content/posts/",
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
          images: {
            directory: "src/content/posts/_images",
            publicPath: "/src/content/posts/_images/",
          },
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "name",
      path: "src/content/projects/*",
      format: { data: "json" },
      schema: {
        name: fields.slug({ name: { label: "Project Name" } }),
        projectDesc: fields.text({
          label: "Project Description",
          multiline: true,
        }),
        projectIcon: fields.image({
          label: "Project Icon",
          validation: { isRequired: true },
          directory: "src/content/projects/",
          publicPath: "../",
        }),
        projectHeroImage: fields.image({
          label: "Project Hero Image",
          validation: { isRequired: false },
          directory: "src/content/projects/",
          publicPath: "/src/content/projects/",
        }),
        stacks: fields.array(fields.text({ label: "Tech Stack Icon Name" }), {
          label: "Tech Stack Icon Name",
          itemLabel: props => props.value,
        }),
        projectUrl: fields.text({ label: "Project Link" }),
        isFeatured: fields.checkbox({
          label: "Want to featured this project?",
        }),
      },
    }),
  },
});
