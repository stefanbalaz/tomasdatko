import { pageData } from "@/data/pageData";

// Find the design style with the matching ID
export const selectedDesignStyle = pageData.general.design.designStyle.find(
  (style) => style.id === pageData.general.design.designID
);
