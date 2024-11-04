// @ts-nocheck

// src/sanity/schemaTypes/textQuestion.ts
import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const textQuestionType = defineType({
  name: "textQuestion",
  type: "object",
  title: "Text Question",
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: "question",
      type: "string",
      title: "Question",
    }),
    defineField({
      name: "wordLimit",
      type: "number",
      title: "Word Limit",
      validation: (Rule) => Rule.positive().integer(),
    }),
  ],
});
