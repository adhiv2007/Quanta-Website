// @ts-nocheck

import { EarthGlobeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
// import IconPicker from "sanity-plugin-icon-picker";

export const SocialMediaType = defineType({
  name: "socialmedia",
  title: "Social Media Account",
  type: "document",
  // @ts-ignore
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),

    defineField({
      name: "icon",
      type: "iconPicker",
      title: "Icon",
      options: {
        providers: ["fa"],
        outputFormat: "react",
      },
    }),

    defineField({
      name: "href",
      type: "string",
      title: "Link",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "icon",
    },
  },
});
