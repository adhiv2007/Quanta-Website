// @ts-nocheck

// src/sanity/schemaTypes/checkboxQuestion.ts
import { defineField, defineType, defineArrayMember } from "sanity";
import { CheckmarkIcon } from "@sanity/icons";

export const checkboxQuestionType = defineType({
  name: "checkboxQuestion",
  type: "object",
  title: "Checkbox Question",
  icon: CheckmarkIcon,
  fields: [
    defineField({
      name: "question",
      type: "string",
      title: "Question",
    }),
    defineField({
      name: "options",
      type: "array",
      title: "Options",
      of: [defineArrayMember({ type: "string" })],
      validation: (Rule) => Rule.min(2).required(),
    }),
  ],
});
