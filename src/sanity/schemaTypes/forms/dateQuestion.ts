// @ts-nocheck

// src/sanity/schemaTypes/dateQuestion.ts
import { defineField, defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export const dateQuestionType = defineType({
  name: "dateQuestion",
  type: "object",
  title: "Date Question",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "question",
      type: "string",
      title: "Question",
    }),
    defineField({
      name: "includeTime",
      type: "boolean",
      title: "Include Time",
    }),
  ],
});
