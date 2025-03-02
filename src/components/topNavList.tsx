"use client";
import { pageData } from "@/data/pageData";
import { useEffect } from "react";
import { constructNavItems } from "@/lib/features/navigation/navigationItems";
import { selectedDesignStyle } from "../lib/utilities/designStyle/designStyle";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { isExternalUrl } from "@/lib/utilities/link/isExternalUrl";
import { FirstLevelPage, SecondLevelPage } from "@/app/types";

export default function TopNavList() {
  const navItems = constructNavItems(pageData);
  const { topNav } = selectedDesignStyle || {};

  // console.log("navItems", navItems);

  useEffect(() => {
    const init = async () => {
      const { Collapse, Dropdown, Ripple, initTWE } = await import(
        "tw-elements"
      );
      initTWE({ Collapse, Dropdown, Ripple });
    };
    init();
  }, []);

  return (
    <>
      {/* INITIAL WORKING VERSION */}

      <nav
        className="relative flex w-full items-center justify-between dark:bg-neutral-700 lg:flex-wrap lg:justify-start "
        data-twe-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-end px-3">
          <button
            className={twMerge(
              "block border-0  bg-transparent px-2 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden",
              topNav?.textColor
            )}
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent7"
            aria-controls="navbarSupportedContent7"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/*    <span className="[&>svg]:w-7 [&>svg]:stroke-primary-dark/50 dark:[&>svg]:stroke-neutral-200"> */}

            <span
              className={twMerge(
                "[&>svg]:w-7  dark:[&>svg]:stroke-neutral-200",
                topNav?.textColor
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent7"
            data-twe-collapse-item
          >
            <ul
              className="list-style-none ms-auto flex flex-col ps-0 lg:mt-1 lg:flex-row "
              data-twe-navbar-nav-ref
            >
              {navItems.map((category) =>
                category.dropdown ? (
                  <li
                    key={category.id}
                    className="static my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                    data-twe-nav-item-ref
                    data-twe-dropdown-ref
                  >
                    <Link
                      className={twMerge(
                        "flex items-center whitespace-nowrap py-2 pe-2 transition duration-200 hover:text-opacity-80 focus:text-opacity-80 active:text-opacity-80 hover:ease-in-out motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2",
                        topNav?.textColor
                      )}
                      href="#"
                      type="button"
                      id={`dropdownMenuButton${category.id}`}
                      data-twe-dropdown-toggle-ref
                      aria-expanded="false"
                      data-twe-nav-link-ref
                    >
                      {category.label}
                      <span className="ms-2 [&>svg]:h-5 [&>svg]:w-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </Link>
                    <div
                      className="absolute left-0 right-0 top-full z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding data-[twe-dropdown-show]:block dark:bg-surface-dark"
                      aria-labelledby={`dropdownMenuButton${category.id}`}
                      data-twe-dropdown-menu-ref
                    >
                      <div
                        className={twMerge(
                          "bg-opacity-70 px-6 py-5 lg:px-8",
                          topNav?.backgroundColor
                        )}
                      >
                        <div className="flex flex-wrap flex-col lg:flex-row gap-6 justify-end">
                          {category.firstLevelPages.map((page: any) => (
                            <div
                              key={page.id}
                              className="w-full max-w-[calc(25%-1.5rem)] "
                            >
                              <Link
                                href={
                                  isExternalUrl(page.url)
                                    ? page.url
                                    : `/${page.url || ""}`
                                }
                                target={
                                  isExternalUrl(page.url) ? "_blank" : "_self"
                                } // Use isExternalUrl directly
                                rel={
                                  isExternalUrl(page.url)
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                aria-current="true"
                                className={twMerge(
                                  "block w-full border-b shadow-border-b-50 px-6 py-2 font-semibold uppercase bg-opacity-0 hover:bg-opacity-10 dark:border-white/10 dark:text-white ",
                                  topNav?.textColor,
                                  topNav?.backgroundColor
                                )}
                              >
                                {page.label}
                              </Link>
                              {page.secondLevelPages.length > 0 && (
                                <div>
                                  {page.secondLevelPages.map(
                                    (subPage: SecondLevelPage) => (
                                      <a
                                        key={subPage.id}
                                        href={
                                          isExternalUrl(subPage.url)
                                            ? subPage.url
                                            : `/${page.url}/${
                                                subPage.url || ""
                                              }`
                                        }
                                        target={
                                          isExternalUrl(subPage.url)
                                            ? "_blank"
                                            : "_self"
                                        } // Use isExternalUrl directly
                                        rel={
                                          isExternalUrl(subPage.url)
                                            ? "noopener noreferrer"
                                            : undefined
                                        }
                                        aria-current="true"
                                        /* className=" bg-primary-light block w-full border-b border-primary-default/20 px-6 py-2 text-primary-dark hover:bg-primary-default/5 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25" */
                                        className={twMerge(
                                          "bg-opacity-50 block w-full px-6 py-2 hover:bg-opacity-10 focus:bg-opacity-50 focus:outline-none active:bg-opacity-50 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25",
                                          topNav?.textColor,
                                          topNav?.backgroundColor
                                        )}
                                      >
                                        {subPage.navLabel}
                                      </a>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li
                    key={category.id}
                    data-twe-nav-item-ref
                    className="static my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                  >
                    {category?.url && (
                      <Link
                        /*  className="block py-2 pe-2 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2" */
                        className={twMerge(
                          "flex items-center whitespace-nowrap py-2 pe-2 transition duration-200 hover:text-opacity-80 focus:text-opacity-80 active:text-opacity-80 hover:ease-in-out motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2 ",
                          topNav?.textColor
                        )}
                        href={
                          isExternalUrl(category.url)
                            ? category.url
                            : category.url !== null &&
                              category.url !== undefined
                            ? String(category.url)
                            : "/"
                        }
                        target={
                          isExternalUrl(category.url) ? "_blank" : "_self"
                        } // Use isExternalUrl directly
                        rel={
                          isExternalUrl(category.url)
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {category.label}
                      </Link>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/*     <nav
        className="relative flex w-full items-center justify-between dark:bg-neutral-700 lg:flex-wrap lg:justify-start"
        data-twe-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-end px-3">
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent7"
            aria-controls="navbarSupportedContent7"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent7"
            data-twe-collapse-item
          >
            <ul
              className="list-style-none ms-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              {navItems.map((category) => (
                <li
                  key={category.id}
                  className="relative my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                  data-twe-nav-item-ref
                >
                  <button
                    className="flex items-center whitespace-nowrap py-2 pe-2 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    type="button"
                    id={`dropdownMenuButton${category.id}`}
                    aria-expanded="false"
                    aria-controls={`dropdownMenu${category.id}`}
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        const menu = document.getElementById(
                          `dropdownMenu${category.id}`
                        );
                        if (menu) {
                          menu.classList.toggle("hidden");
                        }
                      }
                    }}
                  >
                    {category.navCategory}
                    <span className="ms-2 [&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="hidden lg:block w-full mt-2 border-none bg-white bg-clip-padding dark:bg-surface-dark lg:absolute lg:top-full lg:left-0 lg:right-0"
                    id={`dropdownMenu${category.id}`}
                    aria-labelledby={`dropdownMenuButton${category.id}`}
                  >
                    <div className="bg-zinc-50 px-6 py-5 lg:px-8">
                      <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
                        {category.pages.map((page) => (
                          <div key={page.firstLevelPage}>
                            <a
                              href="#"
                              aria-current="true"
                              className="block w-full border-b border-neutral-100 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-white/10 dark:text-white hover:bg-zinc-200/60"
                            >
                              {page.firstLevelPage}
                            </a>
                            {page.secondLevelPage.length > 0 && (
                              <div>
                                {page.secondLevelPage.map((subPage) => (
                                  <a
                                    key={subPage}
                                    href="#"
                                    aria-current="true"
                                    className="bg-zinc-50 block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                  >
                                    {subPage}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav> */}

      {/* WORKING SMALL DEVICES, NOT WORKING ON LARGE DEVICES */}

      {/*    <nav
        className="relative flex w-full items-center justify-between dark:bg-neutral-700 lg:flex-wrap lg:justify-start"
        data-twe-navbar-ref
      >
        <div className="flex w-full flex-wrap items-center justify-end px-3">
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent7"
            aria-controls="navbarSupportedContent7"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          <div
            className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent7"
            data-twe-collapse-item
          >
            <ul
              className="list-style-none ms-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
              data-twe-navbar-nav-ref
            >
              {navItems.map((category) => (
                <li
                  key={category.id}
                  className="relative my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
                  data-twe-nav-item-ref
                >
                  <button
                    className="flex items-center whitespace-nowrap py-2 pe-2 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                    type="button"
                    id={`dropdownMenuButton${category.id}`}
                    aria-expanded="false"
                    aria-controls={`dropdownMenu${category.id}`}
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        const menu = document.getElementById(
                          `dropdownMenu${category.id}`
                        );
                        if (menu) {
                          menu.classList.toggle("hidden");
                        }
                      }
                    }}
                  >
                    {category.navCategory}
                    <span className="ms-2 [&>svg]:h-5 [&>svg]:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="hidden lg:hidden block w-full mt-2 border-none bg-white bg-clip-padding dark:bg-surface-dark"
                    id={`dropdownMenu${category.id}`}
                    aria-labelledby={`dropdownMenuButton${category.id}`}
                  >
                    <div className="bg-zinc-50 px-6 py-5 lg:px-8">
                      <div className="flex flex-col gap-6">
                        {category.pages.map((page) => (
                          <div key={page.firstLevelPage}>
                            <a
                              href="#"
                              aria-current="true"
                              className="block w-full border-b border-neutral-100 px-6 py-2 font-semibold uppercase text-neutral-700 dark:border-white/10 dark:text-white hover:bg-zinc-200/60"
                            >
                              {page.firstLevelPage}
                            </a>
                            {page.secondLevelPage.length > 0 && (
                              <div>
                                {page.secondLevelPage.map((subPage) => (
                                  <a
                                    key={subPage}
                                    href="#"
                                    aria-current="true"
                                    className="bg-zinc-50 block w-full border-b border-neutral-100 bg-white px-6 py-2 text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:border-white/10 dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                                  >
                                    {subPage}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}
