import { twMerge } from "tailwind-merge";
import { Headline1Props } from "@/app/types";
import { selectedDesignStyle } from "../lib/utilities/designStyle/designStyle";

export default function Headline1({
  children,
  headline1ClassName,
  additionalClassName,
}: Headline1Props) {
  const { headline1 } = selectedDesignStyle || {};

  return (
    <div
      className={twMerge(
        `font-${headline1?.font}`,
        headline1?.fontSize,
        headline1?.designAdditionalClassName,
        headline1ClassName,
        additionalClassName
      )}
    >
      {children}
    </div>
  );
}
