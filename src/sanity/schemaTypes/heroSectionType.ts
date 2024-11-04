// src/sanity/schemaTypes/siteSettings.ts
import { ComponentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  // @ts-ignore
  icon: ComponentIcon,
  fields: [
    defineField({
      name: "subtitle",
      type: "string",
      title: "Sub Title",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),

    defineField({
      name: "description",
      type: "blockContent",
      title: "Description",
    }),

    defineField({
      name: "image",
      type: "image",
      title: "Hero Image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "cta",
      title: "Call To Action",
      type: "array",
      of: [defineArrayMember({ type: "cta" })],
    }),

    defineField({
      name: "features",
      type: "array",
      title: "Features",
      of: [defineArrayMember({ type: "feature" })],
    }),

    defineField({
      name: "stats",
      type: "array",
      title: "Stats",
      of: [defineArrayMember({ type: "stat" })],
    }),

    // Add more fields as needed
  ],
  // preview: {},
});
