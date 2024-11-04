// @ts-nocheck

import { ComponentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
// import IconPicker from "sanity-plugin-icon-picker";

export const featureType = defineType({
  name: "feature",
  title: "Feature",
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
      name: "icon",
      type: "iconPicker", // Use 'iconPicker' as the type
      title: "Icon",
      options: {
        providers: ["fa"], // Specify the icon providers you want to use
        outputFormat: "react", // Options: 'react', 'svg', 'component'
      },
    }),

    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "description",
      type: "blockContent",
      title: "Description",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
