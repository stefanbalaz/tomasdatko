import { twMerge } from "tailwind-merge";
import { Headline2Props } from "@/app/types";
import { selectedDesignStyle } from "../lib/utilities/designStyle/designStyle";

export default function Headline2({
  children,
  headline2ClassName,
  additionalClassName,
}: Headline2Props) {
  const { headline2 } = selectedDesignStyle || {};

  return (
    <div
      className={twMerge(
        `font-${headline2?.font}`,
        headline2?.fontSize,
        headline2?.designAdditionalClassName,
        headline2ClassName,
        additionalClassName
      )}
    >
      {children}
    </div>
  );
}
