"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { notFound, useParams } from "next/navigation";
import { SecondLevelPage as SecondLevelPageProps } from "@/app/types";
import { useDispatch } from "react-redux";
import { setBreadcrumbs } from "@/store/breadcrumbsSlice";
import { useEffect, useMemo } from "react";
import { pageData } from "@/data/pageData";
import contentRenderer from "@/lib/utilities/contentRendering/contentRenderer";
import { twMerge } from "tailwind-merge";
import { selectedDesignStyle } from "@/lib/utilities/designStyle/designStyle";

export default function SecondLevelPage({ currentSecondLevelPage }: any) {
  if (!currentSecondLevelPage) {
    notFound();
  }

  const dispatch = useDispatch();
  const { main: mainDesignStyle, sidebarNav: sidebarNavDesignStyle } =
    selectedDesignStyle || {};
  const params = useParams();
  // console.log("PARAMS", params);
  const { breadcrumbs: breadcrumbsConfig } = pageData.general;

  const currentFirstLevelPage = pageData.firstLevelPage.find(
    (firstLevel) => firstLevel.url === params.firstLevelPage
  );

  // Check if currentFirstLevelPage is found
  if (!currentFirstLevelPage) {
    // Handle the case where the first level page is not found
    notFound(); // or redirect, or set some default value
  }

  const { navLabel: firstLevelPageNavLabel } = currentFirstLevelPage;

  // const currentSecondLevelPage = pageData.secondLevelPage.find(
  //   (secondLevel) => secondLevel.url === params.secondLevelPage
  // );

  const { navLabel: secondLevelPageNavLabel } = currentSecondLevelPage;

  // console.log("firstLevelPageNavLabel", firstLevelPageNavLabel);
  // console.log("secondLevelPageNavLabel", secondLevelPageNavLabel);

  // Access Redux state
  const config = useSelector((state: RootState) => state.config);
  // console.log("Initial Redux State:", config);

  console.log("params", params);

  // Use useMemo to memoize the breadcrumbs array
  const breadcrumbs = useMemo(
    () => [
      { label: breadcrumbsConfig.initialLabel, href: "/" },
      { label: firstLevelPageNavLabel, href: `/${params?.firstLevelPage}` },
      { label: secondLevelPageNavLabel },
    ],
    [firstLevelPageNavLabel, secondLevelPageNavLabel, params]
  );

  // Update breadcrumbs in Redux on component mount
  useEffect(() => {
    dispatch(setBreadcrumbs(breadcrumbs));
  }, [dispatch, breadcrumbs]);

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
