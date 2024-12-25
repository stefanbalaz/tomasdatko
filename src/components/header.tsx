import Logo from "./logo";
import TopNavList from "./topNavList";
import { pageData } from "@/data/pageData";
import { twMerge } from "tailwind-merge";
import { selectedDesignStyle } from "../lib/utilities/designStyle/designStyle";

export default function Header() {
  const logoType = pageData.general.logo.headerLogoType;
  const { elementAdditionalClassName } = pageData.general.logo;
  const { logo, header, topNav } = selectedDesignStyle || {};

  const stickyHeader = header?.sticky ? "sticky top-0 z-50" : "";

  // Correctly define the function with a parameter
  const getLogoSize = (size: string | undefined): string => {
    switch (size) {
      case "small":
        return "(max-width: 768px) 5vw, (max-width: 1200px) 5vw, 5vw";

      case "medium":
        return "(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 10vw";

      case "large":
        return "(max-width: 768px) 13vw, (max-width: 1200px) 13vw, 13vw";

      default:
        return ""; // or provide a default value
    }
  };

  // Call the function with the correct argument
  const logoSize = getLogoSize(logo?.size);

  return (
    <div
      className={twMerge(
        "flex justify-between px-6 py-3",
        header?.backgroundColor,
        header?.textColor,
        stickyHeader,
        header?.designAdditionalClassName
      )}
    >
      <Logo
        imageSizes={logoSize}
        textSizes={twMerge(
          "",
          `font-${logo?.font}`,
          logo?.fontSize,
          logo?.designAdditionalClassName,
          elementAdditionalClassName
        )}
        logoType={logoType}
      />
      {topNav?.visible && <TopNavList />}
    </div>
  );
}
