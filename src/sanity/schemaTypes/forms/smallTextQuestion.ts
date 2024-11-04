// @ts-nocheck

// src/sanity/schemaTypes/smallTextQuestion.ts
import { defineField, defineType } from "sanity";
import { TextIcon } from "@sanity/icons";

export const smallTextQuestionType = defineType({
  name: "smallTextQuestion",
  type: "object",
  title: "Small Text Question",
  icon: TextIcon,
  fields: [
    defineField({
      name: "question",
      type: "string",
      title: "Question",
    }),
  ],
});
