import { pageData } from "@/data/pageData";
import Image from "next/image";
import Link from "next/link";
import { LogoType } from "@/app/types";
import { twMerge } from "tailwind-merge";
import { selectedDesignStyle } from "../lib/utilities/designStyle/designStyle";

export default function Logo({
  imageSizes,
  textSizes,
  logoType,
}: {
  imageSizes: string;
  textSizes: string;
  logoType: LogoType;
}): JSX.Element {
  const { logo: logoElementConfig } = pageData.general;
  const { logo: logoDesignConfig } = selectedDesignStyle || {};

  const fileType = logoElementConfig.fileType;
  const fileName = logoElementConfig.fileName;
  const imagePath = `/${fileName}.${fileType}`;

  // Construct the logo text element
  const logoText = logoElementConfig.text.firstPartWording && (
    <div className={textSizes}>
      <span style={logoElementConfig.text.firstPartStyle}>
        {logoElementConfig.text.firstPartWording}
      </span>
      {logoElementConfig.text.secondPartWording && (
        <span style={logoElementConfig.text.secondPartStyle}>
          {logoElementConfig.text.secondPartWording}
        </span>
      )}
    </div>
  );

  // Construct the logo image element
  const logoImage = logoElementConfig.fileName && (
    <Image
      className="me-2"
      src={imagePath}
      width={logoElementConfig.width ?? 500}
      height={logoElementConfig.height ?? 300}
      layout="responsive"
      /*  sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 10vw" */
      sizes={imageSizes}
      alt={logoElementConfig.alt ?? ""}
    />
  );

  // Decide what to render based on logo type
  const renderLogoContent = () => {
    switch (logoType) {
      case "text":
        return logoText;
      case "svg":
      case "png":
        return logoImage;
      case "svgText":
      case "pngText":
        return (
          <>
            {logoImage}
            {logoText}
          </>
        );
      default:
        return <span>No logo available</span>;
    }
  };

  // console.log("logoClassName", logoElementConfig.logoClassName);

  // Render the logo inside a link
  return (
    <div className="whitespace-nowrap">
      <Link
        className={twMerge(
          "flex items-center lg:mb-0 lg:mt-0",
          `font-${logoDesignConfig}`,
          logoElementConfig.elementAdditionalClassName
        )}
        href="/"
      >
        {renderLogoContent()}
      </Link>
    </div>
  );
}
