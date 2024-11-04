// @ts-nocheck

// src/sanity/schemaTypes/ratingQuestion.ts
import { defineField, defineType } from "sanity";
import { SparklesIcon } from "@sanity/icons";

export const ratingQuestionType = defineType({
  name: "ratingQuestion",
  type: "object",
  title: "Rating Question",
  icon: SparklesIcon,
  fields: [
    defineField({
      name: "question",
      type: "string",
      title: "Question",
    }),
    defineField({
      name: "scale",
      type: "number",
      title: "Scale (e.g., 1-5)",
      validation: (Rule) => Rule.required().min(1).max(10),
    }),
  ],
});
