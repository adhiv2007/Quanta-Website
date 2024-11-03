// @ts-nocheck

import {
  BlockContentIcon,
  CalendarIcon,
  CheckmarkIcon,
  CircleIcon,
  DocumentTextIcon,
  DocumentsIcon,
  SparklesIcon,
  TextIcon,
} from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const formType = defineType({
  name: "form",
  title: "Form",
  type: "document",

  // @ts-ignore
  icon: DocumentTextIcon,

  fields: [
    // Form title
    defineField({
      name: "title",
      type: "string",
      title: "Form Title",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),

    defineField({
      name: "description",
      type: "blockContent",
      title: "Description",
    }),

    defineField({
      name: "banner",
      title: "Banner",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),

    // Array of questions in the form
    defineField({
      name: "questions",
      type: "array",
      title: "Questions",
      of: [
        defineArrayMember({
          name: "smallTextQuestion",
          type: "object",
          title: "Small Text Question",
          // @ts-ignore
          icon: TextIcon,
          fields: [
            defineField({
              name: "question",
              type: "string",
              title: "Question",
            }),
          ],
        }),

        defineArrayMember({
          type: "object",
          name: "textQuestion",
          title: "Text Question",
          // @ts-ignore
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
        }),

        // Multiple choice question
        defineArrayMember({
          type: "object",
          name: "multipleChoiceQuestion",
          title: "Multiple Choice Question",
          // @ts-ignore
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
        }),

        // Checkbox question
        defineArrayMember({
          type: "object",
          name: "checkboxQuestion",
          title: "Checkbox Question",
          // @ts-ignore
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
        }),

        // Rating question
        defineArrayMember({
          type: "object",
          name: "ratingQuestion",
          title: "Rating Question",
          // @ts-ignore
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
        }),

        // Date question
        defineArrayMember({
          type: "object",
          name: "dateQuestion",
          title: "Date Question",
          // @ts-ignore
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
        }),

        // File Upload question
        defineArrayMember({
          type: "object",
          name: "fileUploadQuestion",
          title: "File Upload Question",
          // @ts-ignore
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
        }),
      ],
    }),

    defineField({
      name: "allowMultipleSubmissions",
      type: "boolean",
      title: "Allow Multiple Submissions",
    }),

    defineField({
      name: "DeadLine",
      type: "datetime",
      title: "Deadline",
    }),
  ],

  // Preview settings for the form in Sanity Studio
  preview: {
    select: {
      title: "title",
      description: "description",
      media: "icon",
    },
    prepare(selection) {
      return { ...selection, subtitle: selection.description };
    },
  },
});
