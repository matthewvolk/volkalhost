import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    published: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updated: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    showInBlogIndex: z
      .string()
      .optional()
      .transform((str) => (str ? true : false)),
  }),
});

export const collections = { blog };