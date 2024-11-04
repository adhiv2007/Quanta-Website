// @ts-nocheck

import { TrendUpwardIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const StatType = defineType({
  name: "stat",
  title: "Stat",
  type: "document",
  // @ts-ignore
  icon: TrendUpwardIcon,
  fields: [
    defineField({
      name: "label",
      type: "string",
      title: "Label",
    }),

    defineField({
      name: "value",
      type: "string",
      title: "Value",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
