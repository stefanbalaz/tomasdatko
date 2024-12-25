"use client";

import { pageData } from "@/data/pageData"; // Import homePage
import Header from "@/components/header";
import Breadcrumbs from "@/components/breadcrumbs";
import Hero from "@/components/hero";
import { selectedDesignStyle } from "../lib/utilities/designStyle/designStyle";
import { useRouter, useParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function HeaderHero() {
  const router = useRouter();
  const params = useParams();

  const homePage = pageData.homePage;

  // Get the slug from params
  const { firstLevelPage: slug } = params;

  // Check if the slug is empty or undefined (i.e., the homepage)
  const isHomepage = !slug || slug === "";

  // If it's the homepage, use homePage configuration
  const currentPage = isHomepage
    ? homePage // Use the homepage config
    : pageData.firstLevelPage.find((page) => page.url === slug);

  if (!currentPage && !isHomepage) {
    return <div>Page not found</div>;
  }

  const heroConfig = currentPage?.hero;

  const {
    global: globalDesignConfig,
    main: mainDesignConfig,
    hero: heroDesignConfig,
  } = selectedDesignStyle || {};

  // Check if the hero should be visible based on your config
  const isHeroVisible = heroConfig?.visible !== false;

  return (
    <div className="">
      {heroDesignConfig?.fullWidth ? (
        isHeroVisible ? (
          <div className="relative">
            {/* Hero Section */}
            <Hero />
            {/* Overlay Header and Breadcrumbs */}
            <div className="absolute top-0 left-0 w-full">
              <Header />
              <Breadcrumbs />
            </div>
          </div>
        ) : (
          <>
            {/* Standard Header and Breadcrumbs */}
            <div className="">
              <Header />
              <Breadcrumbs />
            </div>
            {/* Main Content */}
            <div
              className={twMerge(
                "",
                mainDesignConfig?.width,
                mainDesignConfig?.position,
                mainDesignConfig?.backgroundColor,
                mainDesignConfig?.designAdditionalClassName
              )}
            ></div>
          </>
        )
      ) : (
        <>
          {/* Standard Header and Breadcrumbs */}
          <div className="">
            <Header />
            <Breadcrumbs />
          </div>
          {/* Hero Section */}
          <div
            className={twMerge(
              "",
              mainDesignConfig?.width,
              mainDesignConfig?.position,
              mainDesignConfig?.backgroundColor,
              mainDesignConfig?.designAdditionalClassName
            )}
          >
            {isHeroVisible && <Hero />}
          </div>
        </>
      )}
    </div>
  );
}
