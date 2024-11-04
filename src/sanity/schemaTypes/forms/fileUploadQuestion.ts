// @ts-nocheck

// src/sanity/schemaTypes/fileUploadQuestion.ts
import { defineField, defineType } from "sanity";
import { DocumentsIcon } from "@sanity/icons";

export const fileUploadQuestionType = defineType({
  name: "fileUploadQuestion",
  type: "object",
  title: "File Upload Question",
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: "question",
      type: "string",
      title: "Question",
    }),
    defineField({
      name: "maxFilesCount",
      type: "number",
      title: "Max Files Count",
      description: "Maximum files count allowed for upload",
      validation: (Rule) => Rule.positive().integer().max(50),
    }),
    defineField({
      name: "maxFileSize",
      type: "number",
      title: "Max File Size (MB)",
      description: "Maximum file size allowed for upload",
      validation: (Rule) => Rule.positive().integer().max(50),
    }),
  ],
});
