import {
  BlockContentIcon,
  CalendarIcon,
  CheckmarkIcon,
  CircleIcon,
  DocumentTextIcon,
  DotIcon,
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
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
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
          fields: [{ name: "question", type: "string", title: "Question" }],
        }),

        defineArrayMember({
          type: "object",
          name: "textQuestion",
          title: "Text Question",
          // @ts-ignore
          icon: BlockContentIcon,
          fields: [
            { name: "question", type: "string", title: "Question" },
            {
              name: "wordLimit",
              type: "number",
              title: "Word Limit",
              validation: (Rule) => Rule.positive().integer(),
            },
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
            { name: "question", type: "string", title: "Question" },
            {
              name: "options",
              type: "array",
              title: "Options",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.min(2).required(),
            },
            {
              name: "allowMultiple",
              type: "boolean",
              title: "Allow Multiple Selections",
            },
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
            { name: "question", type: "string", title: "Question" },
            {
              name: "options",
              type: "array",
              title: "Options",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.min(2).required(),
            },
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
            { name: "question", type: "string", title: "Question" },
            {
              name: "scale",
              type: "number",
              title: "Scale (e.g., 1-5)",
              validation: (Rule) => Rule.required().min(1).max(10),
            },
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
            { name: "question", type: "string", title: "Question" },
            { name: "includeTime", type: "boolean", title: "Include Time" },
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
