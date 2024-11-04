// @ts-nocheck

// src/sanity/schemaTypes/multipleChoiceQuestion.ts
import { defineField, defineType, defineArrayMember } from "sanity";
import { CircleIcon } from "@sanity/icons";

export const multipleChoiceQuestionType = defineType({
  name: "multipleChoiceQuestion",
  type: "object",
  title: "Multiple Choice Question",
  icon: CircleIcon,
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
    defineField({
      name: "allowMultiple",
      type: "boolean",
      title: "Allow Multiple Selections",
    }),
  ],
});
