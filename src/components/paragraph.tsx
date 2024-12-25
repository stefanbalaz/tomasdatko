import { twMerge } from "tailwind-merge";
import { ParagraphProps } from "@/app/types";
import { selectedDesignStyle } from "../lib/utilities/designStyle/designStyle";

export default function Paragraph({
  children,
  paragraphClassName,
}: ParagraphProps) {
  const { paragraph } = selectedDesignStyle || {};

  return (
    <div
      className={twMerge(
        "",
        `font-${paragraph?.font}`,
        paragraph?.fontSize,
        paragraph?.designAdditionalClassName,
        paragraphClassName
      )}
    >
      {children}
    </div>
  );
}
