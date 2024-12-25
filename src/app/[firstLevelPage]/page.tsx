"use client";

import { notFound } from "next/navigation";
import { pageData } from "@/data/pageData";
import { FirstLevelPage as FirstLevelPageProps } from "@/app/types";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "@/store/breadcrumbsSlice";
import { useEffect, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { selectedDesignStyle } from "@/lib/utilities/designStyle/designStyle";
import contentRenderer from "@/lib/utilities/contentRendering/contentRenderer";

export default function FirstLevelPage({ params }: any) {
  if (!params) {
    throw new Error("Params is undefined");
  }

  const dispatch = useDispatch();
  const { main: mainDesignStyle, sidebarNav: sidebarNavDesignStyle } =
    selectedDesignStyle || {};
  const { breadcrumbs: breadcrumbsConfig } = pageData.general;
  const { firstLevelPage: slug } = params;

  // Find the current page based on the URL slug
  const currentFirstLevelPage = pageData.firstLevelPage.find(
    (page) => page.url === slug
  );

  if (!currentFirstLevelPage) {
    notFound();
  }

  const { navLabel } = currentFirstLevelPage;

  // Define breadcrumbs using the extracted navLabel
  const breadcrumbs = useMemo(
    () => [
      { label: breadcrumbsConfig.initialLabel, href: "/" },
      { label: navLabel },
    ],
    [navLabel, params]
  );

  // Update breadcrumbs in Redux on component mount
  useEffect(() => {
    dispatch(setBreadcrumbs(breadcrumbs));
  }, [dispatch, breadcrumbs]);

  // console.log("breadcrumbs first level page", breadcrumbs);

  const generatedContent = contentRenderer(params);

  return (
    <div
      className={twMerge(
        "block w-full dark:bg-surface-dark dark:text-white",
        mainDesignStyle?.designAdditionalClassName
      )}
    >
      {generatedContent}
    </div>
  );
}
