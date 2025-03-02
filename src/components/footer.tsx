import { pageData } from "@/data/pageData";
import { constructFooterItems } from "../lib/features/footer/footerItems";
import Link from "next/link";
import Logo from "./logo";
import { twMerge } from "tailwind-merge";
import { selectedDesignStyle } from "../lib/utilities/designStyle/designStyle";
import classNames from "classnames";
import CookieConsentLink from "./cookieConsentLink";

export default function Footer() {
  const { general } = pageData;
  const { socialMedia: socialMediaElementConfig } = pageData.general;
  const { footer: footerElementConfig } = pageData.general;
  const logoElementConfig = pageData.general.logo.footerLogoType;
  const { footer: footerDesignConfig, socialMedia: socialMediaDesignConfig } =
    selectedDesignStyle || {};

  // Construct street name and number
  const addressParts = [];

  if (general.legal.postalAddress.streetName)
    addressParts.push(general.legal.postalAddress.streetName);
  if (general.legal.postalAddress.streetNumber)
    addressParts.push(general.legal.postalAddress.streetNumber);

  const streetNameNumber = addressParts.join(" ");

  const fullPostalAddress = (
    <>
      {streetNameNumber && (
        <>
          {streetNameNumber}
          {", "}
        </>
      )}
      {general.legal.postalAddress.zipCode && (
        <>
          {general.legal.postalAddress.zipCode}
          {", "}
        </>
      )}
      {general.legal.postalAddress.country && (
        <>{general.legal.postalAddress.country}</>
      )}
    </>
  );

  /*   console.log("fullPostalAddress", fullPostalAddress); */

  // Construct footer links
  const footerLinks = constructFooterItems(pageData);

  return (
    /*   <footer className="bg-zinc-50 text-center text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left"> */
    <footer
      className={twMerge(
        "text-center dark:bg-neutral-700 dark:text-white/75 lg:text-left bg-opacity-20",
        footerElementConfig.elementAdditionalClassName,
        footerDesignConfig?.backgroundColor,
        footerDesignConfig?.textColor,
        footerDesignConfig?.designAdditionalClassName
      )}
    >
      {(socialMediaElementConfig.link.facebook ||
        socialMediaElementConfig.link.instagram ||
        socialMediaElementConfig.link.twitter ||
        socialMediaElementConfig.link.google ||
        socialMediaElementConfig.link.linkedin ||
        socialMediaElementConfig.link.github) && (
        <div className="flex items-center justify-center border-b-2 border-primary-default/10 p-6 dark:border-white/10 lg:justify-between">
          <div className="me-12 hidden lg:block">
            <span>{footerElementConfig.socialNetworksIntro}</span>
          </div>

          <div className="flex justify-center">
            {socialMediaElementConfig.link.facebook && (
              <a
                href={socialMediaElementConfig.link.facebook}
                target="_blank"
                className={twMerge(
                  classNames("me-6 [&>svg]:h-4 [&>svg]:w-4", {
                    "[&>svg]:fill-[#1877f2]": socialMediaDesignConfig?.color,
                  }),
                  socialMediaDesignConfig?.designAdditionalClassName || ""
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </a>
            )}
            {socialMediaElementConfig.link.twitter && (
              <a
                href={socialMediaElementConfig.link.twitter}
                className={twMerge(
                  classNames("me-6 [&>svg]:h-4 [&>svg]:w-4", {
                    "[&>svg]:fill-black": socialMediaDesignConfig?.color,
                  }),
                  socialMediaDesignConfig?.designAdditionalClassName || ""
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
            )}
            {socialMediaElementConfig.link.google && (
              <a
                href={socialMediaElementConfig.link.google}
                className={twMerge(
                  classNames("me-6 [&>svg]:h-4 [&>svg]:w-4", {
                    "[&>svg]:fill-[#ea4335]": socialMediaDesignConfig?.color,
                  }),
                  socialMediaDesignConfig?.designAdditionalClassName || ""
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 488 512"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </a>
            )}
            {socialMediaElementConfig.link.instagram && (
              <a
                href={socialMediaElementConfig.link.instagram}
                className={twMerge(
                  classNames("me-6 [&>svg]:h-4 [&>svg]:w-4", {
                    "[&>svg]:fill-[#c13584]": socialMediaDesignConfig?.color,
                  }),
                  socialMediaDesignConfig?.designAdditionalClassName || ""
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
            )}
            {socialMediaElementConfig.link.linkedin && (
              <a
                href={socialMediaElementConfig.link.linkedin}
                className={twMerge(
                  classNames("me-6 [&>svg]:h-4 [&>svg]:w-4", {
                    "[&>svg]:fill-[#0077b5]": socialMediaDesignConfig?.color,
                  }),
                  socialMediaDesignConfig?.designAdditionalClassName || ""
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </a>
            )}
            {socialMediaElementConfig.link.github && (
              <a
                href={socialMediaElementConfig.link.github}
                className={twMerge(
                  classNames("me-6 [&>svg]:h-4 [&>svg]:w-4", {
                    "[&>svg]:fill-[#333]": socialMediaDesignConfig?.color,
                  }),
                  socialMediaDesignConfig?.designAdditionalClassName || ""
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      )}

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6
              className={twMerge(
                "mb-4 flex items-center justify-center font-semibold md:justify-start",
                footerDesignConfig?.itemsMarginBottom
              )}
            >
              <Logo
                imageSizes="30px"
                textSizes="text-base"
                logoType={logoElementConfig}
              />
            </h6>
            {footerElementConfig.description && (
              <p>{footerElementConfig.description} </p>
            )}
          </div>
          {footerLinks.length > 0 &&
          footerLinks.some((item) => item.footerCategory !== "legal") ? (
            <div>
              <h6
                className={twMerge(
                  "mb-4 flex justify-center font-semibold uppercase md:justify-start",
                  footerDesignConfig?.itemsMarginBottom
                )}
              >
                {footerElementConfig.labels.categories}
              </h6>
              {footerLinks
                .filter((item) => item?.footerCategory != "legal")
                .map((item) => (
                  <p
                    key={item.id}
                    className={twMerge(
                      "mb-4",
                      footerDesignConfig?.itemsMarginBottom
                    )}
                  >
                    <Link
                      href={`/${item.url}`}
                      target={
                        item.url.includes("http") || item.url.includes("www")
                          ? "_blank"
                          : "_self"
                      }
                      rel={
                        item.url.includes("http") || item.url.includes("www")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {item.label}
                    </Link>
                  </p>
                ))}
            </div>
          ) : (
            <span>&nbsp;</span> // Empty space fallback
          )}

          <div>
            <h6
              className={twMerge(
                "mb-4 flex justify-center font-semibold uppercase md:justify-start",
                footerDesignConfig?.itemsMarginBottom
              )}
            >
              {footerElementConfig.labels.legal}
            </h6>
            {footerLinks
              .filter((item) => item?.footerCategory === "legal")
              .map((item) => (
                <p
                  key={item.id}
                  className={twMerge(
                    "mb-4",
                    footerDesignConfig?.itemsMarginBottom
                  )}
                >
                  <Link href={`/${item.url}`}>{item.label}</Link>
                </p>
              ))}
            <p
              className={twMerge("mb-4", footerDesignConfig?.itemsMarginBottom)}
            >
              <CookieConsentLink />
            </p>
          </div>

          <div>
            <h6
              className={twMerge(
                "mb-4 flex justify-center font-semibold uppercase md:justify-start",
                footerDesignConfig?.itemsMarginBottom
              )}
            >
              {footerElementConfig.labels.contact}
            </h6>
            {(streetNameNumber ||
              general?.legal?.postalAddress?.zipCode ||
              general?.legal?.postalAddress?.country) && (
              <p
                className={twMerge(
                  "mb-4 flex items-center justify-center md:justify-start",
                  footerDesignConfig?.itemsMarginBottom
                )}
              >
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                </span>
                {fullPostalAddress}
              </p>
            )}

            {general?.legal?.eMail && (
              <p
                className={twMerge(
                  "mb-4 flex items-center justify-center md:justify-start",
                  footerDesignConfig?.itemsMarginBottom
                )}
              >
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </span>
                {general.legal.eMail}
              </p>
            )}
            {general?.legal?.phoneNumber && (
              <p
                className={twMerge(
                  "mb-4 flex items-center justify-center md:justify-start",
                  footerDesignConfig?.itemsMarginBottom
                )}
              >
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {general.legal.phoneNumber}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="bg-primary-dark/5 p-6 text-center">
        <span>{`© ${new Date().getFullYear()} Copyright:`} </span>
        <Link className="font-semibold" href="/" /* target="_blank" */>
          {general.legal.entityName} {general.legal.legalForm}
        </Link>
      </div>
    </footer>
  );
}
