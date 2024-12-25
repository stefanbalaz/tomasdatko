import React from "react";
import Headline1 from "@/components/headline1";
import Headline2 from "@/components/headline2";
import Headline3 from "@/components/headline3";
import Paragraph from "@/components/paragraph";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import TextRenderer from "@/lib/utilities/contentRendering/textRenderer";
import { selectedDesignStyle } from "@/lib/utilities/designStyle/designStyle";
import classNames from "classnames";
import { Block } from "@/app/types";

const ContentBlock = ({ content }: { content: Block }) => {
  const { main: mainDesignStyle, image: imageDesignStyle } =
    selectedDesignStyle || {};

  switch (content.type) {
    case "section":
      return (
        <section
          id={content.id}
          className={twMerge(
            classNames(
              "", // Always applies text-center
              { "text-center": mainDesignStyle?.centerText },
              content.className // Includes any classes specified in content.className
            )
          )}
        >
          {content.children?.map((child, index) => (
            <ContentBlock key={index} content={child} />
          ))}
        </section>
      );

    case "headline1":
      return (
        <Headline1 headline1ClassName={twMerge("mb-3 mt-5", content.className)}>
          {content?.text}
        </Headline1>
      );

    case "headline2":
      return (
        <Headline2 headline2ClassName={twMerge("mb-3 mt-5", content.className)}>
          {content?.text}
        </Headline2>
      );

    case "headline3":
      return (
        <Headline3
          headline3ClassName={twMerge("mb-3 mt-5 ", content.className)}
        >
          {content?.text}
        </Headline3>
      );

    /*     case "paragraph":
      return (
        <Paragraph
          paragraphClassName={twMerge(`mb-3`, content.className || "")}
        >
          {content.children?.map((child, index) => (
            // Render each child as a separate paragraph
            <p key={index} className="mb-2">
         
              {child.children?.map((subChild, subIndex) => (
                <TextRenderer key={subIndex} content={subChild} />
              )) || child.text}{" "}
         
            </p>
          ))}
        </Paragraph>
      ); */

    /*     case "paragraph":
      return (
        <div className={twMerge("mb-3", content.className || "")}>
          {content.children?.map((child, index) => (
            <TextRenderer key={index} content={child} />
          ))}
        </div>
      ); */

    case "paragraph":
      return (
        <div className={twMerge(`mb-2`, content.className || "")}>
          {content.children?.map((child, index) => (
            <TextRenderer key={index} content={child} />
          ))}
        </div>
      );
    case "paragraphGroup":
      return (
        <div className={twMerge(`mb-3`, content.className || "")}>
          {content.children?.map((child, index) => (
            <ContentBlock key={index} content={child} />
          ))}
        </div>
      );

    /*  case "paragraph":
      return (
        <Paragraph
          paragraphClassName={twMerge("mb-3", content.className || "")}
        >
          {content.children?.map((child, index) => {
            // Check if child has children or if it's just text
            if (!child.children) {
              return (
                <p key={index} className="mb-2">
                  <TextRenderer content={child} />
                </p>
              );
            }
            return (
              <p key={index} className="mb-2">
                {child.children.map((subChild, subIndex) => {
                  return <TextRenderer key={subIndex} content={subChild} />;
                })}
              </p>
            );
          })}
        </Paragraph>
      );
 */
    /*   case "image":
      return (
        <div className="mb-3 relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] 2xl:h-[450px]">
          <Image
            className={content.className}
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
            src={content.src}
            alt={content.alt}
            quality={100}
          />
        </div>
      ); */
    case "image":
      return (
        <div className="mb-3">
          <Image
            className={twMerge(
              "",
              content.className,
              imageDesignStyle?.designAdditionalClassName
            )}
            width={500 ?? 500}
            height={300 ?? 300}
            // Importing an image will
            // automatically set the width and height
            sizes="100vw"
            // Make the image display full width
            style={{
              width: "100%",
              height: "auto",
            }}
            src={content.src}
            alt={content.alt}
            quality={100}
          />
        </div>
      );

    case "paragraphImage":
      // Extract image and paragraphs
      const imageElement = content.children?.find(
        (child) => child.type === "image"
      );
      const paragraphGroups = content.children?.filter(
        (child) => child.type === "paragraphGroup"
      );

      return (
        <div className="relative w-full mb-3">
          {/* Render the image if it exists */}
          {imageElement && (
            <Image
              className={twMerge(
                "w-1/2 float-right ml-6 mb-2",
                imageDesignStyle?.designAdditionalClassName
              )}
              width={290}
              height={150}
              src={imageElement.src}
              alt={imageElement.alt}
              quality={100}
            />
          )}
          {/* Render paragraph groups */}
          {paragraphGroups?.map((group, index) => (
            <div key={index} className="mb-2">
              {/* Render each paragraph within the group */}
              {group.children?.map((paragraph, paraIndex) => (
                <div key={paraIndex} className="mb-2">
                  {/* Use TextRenderer to handle text formatting */}
                  {paragraph.children?.map((subChild, subIndex) => (
                    <TextRenderer key={subIndex} content={subChild} />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      );

    case "bulletList":
      return (
        <ul className={twMerge("list-disc list-inside ", content.className)}>
          {content.children?.map((item, index) => (
            <li key={index} className="mb-2 ">
              {item.children ? (
                item.children.map((subChild, subIndex) => (
                  <TextRenderer key={subIndex} content={subChild} />
                ))
              ) : (
                <TextRenderer content={item} />
              )}
            </li>
          ))}
        </ul>
      );

    case "video":
      return (
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            src="https://drive.google.com/file/d/13gnUKjSHDGQnB2szAoteWDzqoxi43Bfy/preview"
            width="100%"
            height="100%"
            style={{ border: "none", position: "absolute", top: 0, left: 0 }}
            allow="autoplay"
          ></iframe>
        </div>
      );

    default:
      return null;
  }
};

export default ContentBlock;
