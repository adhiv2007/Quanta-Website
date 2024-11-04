// @ts-nocheck

import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./other/blockContentType";

import { heroSection } from "./heroSectionType";
import { featureType } from "./hero/featureType";
import { CTAType } from "./hero/CTAType";
import { StatType } from "./hero/StatType";

import { postType } from "./postType";
import { categoryType } from "./posts/categoryType";
import { authorType } from "./posts/authorType";

import { footerType } from "./footerType";
import { SocialMediaType } from "./footer/socialMedia";

import { formType } from "./formType";
import { smallTextQuestionType } from "./forms/smallTextQuestion";
import { textQuestionType } from "./forms/textQuestion";
import { multipleChoiceQuestionType } from "./forms/multipleChoiceQuestion";
import { checkboxQuestionType } from "./forms/checkboxQuestion";
import { ratingQuestionType } from "./forms/ratingQuestion";
import { dateQuestionType } from "./forms/dateQuestion";
import { fileUploadQuestionType } from "./forms/fileUploadQuestion";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Hero Section
    heroSection,
    featureType,
    CTAType,
    StatType,

    // Footer
    footerType,
    SocialMediaType,

    // Forms
    formType,
    smallTextQuestionType,
    textQuestionType,
    multipleChoiceQuestionType,
    checkboxQuestionType,
    ratingQuestionType,
    dateQuestionType,
    fileUploadQuestionType,

    // Posts
    postType,
    categoryType,
    authorType,

    // Others
    blockContentType,
  ],
};
