import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { pageData } from "@/data/pageData";
import { selectedDesignStyle } from "@/lib/utilities/designStyle/designStyle";
import ContentBlock from "@/components/contentBlock";
import classNames from "classnames";
import { ContentRendererParams } from "@/app/types";

interface Block {
  type: string;
  parent: string | null;
  children: { type: string }[];
}

export default function contentRenderer(params: ContentRendererParams) {
  const { sidebarNav: sidebarNavDesignConfig } = selectedDesignStyle || {};

  // Check if params is empty, indicating the homepage
  const isHomePage = Object.keys(params).length === 0;

  // Destructure slugs from params
  const {
    firstLevelPage: slugFirstLevelPage,
    secondLevelPage: slugSecondLevelPage,
  } = params;

  // Function to find the current page based on slugs
  function findCurrentPage({ slugFirstLevelPage, slugSecondLevelPage }: any) {
    if (isHomePage) {
      // If params is empty, it indicates the homepage
      return pageData.homePage;
    }

    if (slugSecondLevelPage) {
      // Iterate through each first-level page to find the matching second-level page
      for (const firstLevelPage of pageData.firstLevelPage as any) {
        // Check if the first-level page has second-level pages
        if (
          firstLevelPage.hasOwnProperty("secondLevelPage") &&
          firstLevelPage.secondLevelPage
        ) {
          // Attempt to find the second-level page within the current first-level page
          const foundSecondLevelPage = firstLevelPage.secondLevelPage.find(
            (page: any) => page.url === slugSecondLevelPage
          );
          // If found, return the second-level page
          if (foundSecondLevelPage) {
            return foundSecondLevelPage;
          }
        }
      }
    }

    // If no second-level slug or not found, check first-level pages
    if (slugFirstLevelPage) {
      return pageData.firstLevelPage.find(
        (page) => page.url === slugFirstLevelPage
      );
    }

    // Return null if no pages are found
    return null;
  }

  // Determine the current page
  const currentPage = isHomePage
    ? pageData.homePage // Use the homepage data if it's the homepage
    : findCurrentPage({
        slugFirstLevelPage,
        slugSecondLevelPage,
      });

  if (!currentPage) {
    notFound();
  }

  const { content } = currentPage as { content: any };
  const {
    sidebarNav: { visible: sidebarNavPageConfig },
  } = currentPage;

  // Logic to determine sidebarNav visibility
  const shouldShowSidebar =
    sidebarNavPageConfig !== undefined
      ? sidebarNavPageConfig
      : sidebarNavDesignConfig?.visible;

  return (
    <div className="grid grid-cols-3 gap-x-6 pb-14">
      <div
        className={classNames("col-span-2", {
          "col-span-3": !shouldShowSidebar,
        })}
      >
        <div
          data-twe-spy="scroll"
          data-twe-target="#scrollspy-smooth"
          data-twe-offset="0"
          className="relative"
        >
          {/* Render content blocks */}
          <div>
            {content?.map((block: any, index: number) => (
              <ContentBlock key={index} content={block} />
            ))}
          </div>
        </div>
      </div>

      {/* Render sidebarNav */}
      {shouldShowSidebar && (
        <div className="mt-5 ">
          <div
            id="scrollspy-smooth"
            className={twMerge(
              "sticky top-0 px-3 py-3",
              sidebarNavDesignConfig?.backgroundColor,
              "bg-opacity-20"
            )}
          >
            <ul data-twe-nav-list-ref>
              {content?.map((block: any, index: number) => {
                // Check if the block is a top-level section with headline1
                if (
                  block.type === "section" &&
                  block.parent === null &&
                  block.children?.[0]?.type === "headline1"
                ) {
                  return (
                    <li key={index} className="py-1">
                      <a
                        data-twe-nav-link-ref
                        className="px-[5px] shadow-none transition-all dark:text-neutral-200"
                        href={`#${block?.id}`}
                      >
                        {block.children?.[0]?.text || "Section"}
                      </a>
                      {/* Nested list for subsections (headline2) */}
                      <ul data-twe-nav-list-ref className="ps-3">
                        {content.map((childBlock: any, childIndex: number) => {
                          // Check for subsections (headline2)
                          if (
                            childBlock.type === "section" &&
                            childBlock.parent === block.id &&
                            childBlock.children?.[0]?.type === "headline2"
                          ) {
                            return (
                              <li key={childIndex} className="py-1">
                                <a
                                  data-twe-nav-link-ref
                                  className="px-[5px] shadow-none transition-all dark:text-neutral-200"
                                  href={`#${childBlock.id}`}
                                >
                                  {childBlock.children?.[0]?.text ||
                                    "Subsection"}
                                </a>
                              </li>
                            );
                          }
                          return null; // Skip if not a subsection
                        })}
                      </ul>
                    </li>
                  );
                }
                return null; // Skip if not a top-level section
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
