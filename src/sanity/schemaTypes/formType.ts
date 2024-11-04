// @ts-nocheck
import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

// Import question types
import { smallTextQuestionType } from "./forms/smallTextQuestion";
import { textQuestionType } from "./forms/textQuestion";
import { multipleChoiceQuestionType } from "./forms/multipleChoiceQuestion";
import { checkboxQuestionType } from "./forms/checkboxQuestion";
import { ratingQuestionType } from "./forms/ratingQuestion";
import { dateQuestionType } from "./forms/dateQuestion";
import { fileUploadQuestionType } from "./forms/fileUploadQuestion";

export const formType = defineType({
  name: "form",
  title: "Form",
  type: "document",
  // @ts-ignore
  icon: DocumentTextIcon,
  fields: [
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
        fields: [
          defineField({
            name: "alt",
            type: "string",
            title: "Alternative text",
          }),
        ],
      },
    }),

    defineField({
      name: "questions",
      type: "array",
      title: "Questions",
      of: [
        defineArrayMember({ type: "smallTextQuestion" }),
        defineArrayMember({ type: "textQuestion" }),
        defineArrayMember({ type: "multipleChoiceQuestion" }),
        defineArrayMember({ type: "checkboxQuestion" }),
        defineArrayMember({ type: "ratingQuestion" }),
        defineArrayMember({ type: "dateQuestion" }),
        defineArrayMember({ type: "fileUploadQuestion" }),
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
