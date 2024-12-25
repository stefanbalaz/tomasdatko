"use client";

import React from "react";
import { showConsentModal } from "./cookieConsent";
import { pageData } from "@/data/pageData";

interface CookieConsentLinkProps {}

const CookieConsentLink: React.FC<CookieConsentLinkProps> = () => {
  const { footer: footerElementConfig } = pageData.general;

  return (
    <button
      className=""
      onClick={() => {
        showConsentModal();
      }}
    >
      {footerElementConfig.labels.cookies}
    </button>
  );
};

export default CookieConsentLink;
