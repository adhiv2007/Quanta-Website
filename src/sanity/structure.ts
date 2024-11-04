// @ts-nocheck

import { ComponentIcon, ColorWheelIcon } from "@sanity/icons";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) => {
  return S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Hero Section")
        .icon(ComponentIcon)
        .child(
          S.editor()
            .id("hero_section")
            .title("Hero Section")
            .schemaType("heroSection")
            .documentId("heroSection")
        ),

      S.listItem()
        .title("Footer")
        .icon(ColorWheelIcon)
        .child(
          S.editor()
            .id("footer_section")
            .title("Footer")
            .schemaType("footer")
            .documentId("footer")
        ),

      S.divider(),
      S.documentTypeListItem("post").title("Blog Posts"),
      S.documentTypeListItem("form").title("Forms"),

      S.divider(),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),

      // ...S.documentTypeListItems().filter(
      //   (item) =>
      //     item.getId() &&
      //     !["post", "category", "author", "form", "feature"].includes(
      //       item.getId()!
      //     )
      // ),
    ]);
};
