// @ts-nocheck

import { ComponentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
// import IconPicker from "sanity-plugin-icon-picker";

export const CTAType = defineType({
  name: "cta",
  title: "Call To Action",
  type: "document",
  // @ts-ignore
  icon: ComponentIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),

    defineField({
      name: "href",
      type: "string",
      title: "Link",
    }),

    defineField({
      name: "is_secondary",
      type: "boolean",
      title: "Is Secondary?",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
