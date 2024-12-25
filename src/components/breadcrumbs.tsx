// components/BreadcrumbsClient.tsx
"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store"; // Adjust path as necessary
import Link from "next/link";
import { pageData } from "@/data/pageData";
import { selectedDesignStyle } from "../lib/utilities/designStyle/designStyle";
import { twMerge } from "tailwind-merge";

const Breadcrumbs = () => {
  const breadcrumbs = useSelector(
    (state: RootState) => state.breadcrumbs.breadcrumbs
  );

  const { breadcrumbs: breadcrumbsConfig } = pageData.general;
  const { breadcrumbs: breadcrumbsStyle } = selectedDesignStyle || {};
  // console.log("breadcrumbsStyle", breadcrumbsStyle);

  return (
    <>
      {breadcrumbsConfig?.visible && (
        <nav
          className={twMerge(
            "w-full px-6 py-3 bg-opacity-50 ",
            breadcrumbsStyle?.backgroundColor,
            breadcrumbsStyle?.designAdditionalClassName
          )}
        >
          <ol className="list-reset flex">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="flex items-center">
                {breadcrumb.href ? (
                  <Link
                    href={breadcrumb.href}
                    className="transition duration-200 hover:text-opacity-80 focus:text-opacity-80 active:text-opacity-80 hover:ease-in-out motion-reduce:transition-none dark:text-primary-400"
                  >
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span className="text-neutral-400">{breadcrumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="mx-2 text-neutral-400">/</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </>
  );
};

export default Breadcrumbs;
