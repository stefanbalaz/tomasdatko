import { twMerge } from "tailwind-merge";
import { Headline3Props } from "@/app/types";
import { selectedDesignStyle } from "../lib/utilities/designStyle/designStyle";

export default function Headline3({
  children,
  headline3ClassName,
  additionalClassName,
}: Headline3Props) {
  const { headline3 } = selectedDesignStyle || {};

  return (
    <div
      className={twMerge(
        `font-${headline3?.font}`,
        headline3?.fontSize,
        headline3?.designAdditionalClassName,
        headline3ClassName,
        additionalClassName
      )}
    >
      {children}
    </div>
  );
}
