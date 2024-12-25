"use client";

import { pageData } from "@/data/pageData";
import { twMerge } from "tailwind-merge";
import { selectedDesignStyle } from "@/lib/utilities/designStyle/designStyle";
import { ScrollSpy, initTWE } from "tw-elements";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "@/store/breadcrumbsSlice";
import { useEffect, useMemo } from "react";
import Hero from "@/components/hero";
import contentRenderer from "@/lib/utilities/contentRendering/contentRenderer";
import { ContentRendererParams } from "@/app/types";

// initTWE({ ScrollSpy });

export default function Home({ params }: { params: ContentRendererParams }) {
  if (!params) {
    throw new Error("Params is undefined");
  }

  /*   useEffect(() => {
    const init = async () => {
      const { ScrollSpy } = await import("tw-elements");
      initTWE({ ScrollSpy });
    };
    init();
  }, []);
 */

  const { main, hero: heroDesignConfig } = selectedDesignStyle || {};
  const { breadcrumbs: breadcrumbsConfig } = pageData.general;
  const dispatch = useDispatch();

  // Define breadcrumbs using the extracted navLabel
  const breadcrumbs = useMemo(
    () => [{ label: breadcrumbsConfig.initialLabel }],
    []
  );

  // Update breadcrumbs in Redux on component mount
  useEffect(() => {
    dispatch(setBreadcrumbs(breadcrumbs));
  }, [dispatch, breadcrumbs]);

  const generatedContent = contentRenderer(params);

  return (
    <>
      <div
        className={twMerge(
          "block w-full dark:bg-surface-dark dark:text-white",
          main?.designAdditionalClassName
        )}
      >
        <div className="p-6">
          {/*         {!heroDesignConfig?.fullWidth && <Hero />} */}

          {generatedContent}
        </div>
      </div>
    </>
  );
}
