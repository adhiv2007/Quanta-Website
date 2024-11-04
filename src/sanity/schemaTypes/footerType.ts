// src/sanity/schemaTypes/siteSettings.ts
import { ComponentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  // @ts-ignore
  icon: ComponentIcon,
  fields: [
    defineField({
      name: "description",
      type: "blockContent",
      title: "Description",
    }),

    defineField({
      name: "socialmedia",
      type: "array",
      title: "Social Media",
      of: [defineArrayMember({ type: "socialmedia" })],
    }),

    // Add more fields as needed
  ],
  // preview: {},
});
