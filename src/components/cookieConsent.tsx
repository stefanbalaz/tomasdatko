"use client";

import { useEffect } from "react";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import ReactGA from "react-ga4";
import { pageData } from "@/data/pageData";

export const showConsentModal = () => {
  CookieConsent.show(true);
};

export default function Cookie() {
  const {
    eMail,
    pageId,
    googleAnalytics: { id: googleAnalyticsId },
    projectName,
  } = pageData.general.legal;

  // Identify imprint and data privacy pageIds
  const imprintUrl = pageData.firstLevelPage.find(
    (page) => page.id === pageId.imprint
  )?.url;
  const dataPrivacyUrl = pageData.firstLevelPage.find(
    (page) => page.id === pageId.dataPrivacy
  )?.url;

  // console.log("imprintUrl", imprintUrl);
  // console.log("dataPrivacyUrl", dataPrivacyUrl);
  // console.log("eMail", eMail);

  useEffect(() => {
    CookieConsent.run({
      disablePageInteraction: true,
      autoClearCookies: true,
      root: "#app",
      cookie: {
        name: projectName,
      },
      guiOptions: {
        consentModal: {
          layout: "box wide",
          position: "middle center",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      onFirstConsent: ({ cookie }) => {
        console.log("onFirstConsent fired", cookie);
      },
      onConsent: ({ cookie }) => {
        console.log("onConsent fired!", cookie);
      },
      onChange: ({ changedCategories, changedServices }) => {
        console.log("onChange fired!", changedCategories, changedServices);
      },
      onModalReady: ({ modalName }) => {
        console.log("ready:", modalName);
      },
      onModalShow: ({ modalName }) => {
        console.log("visible:", modalName);
      },
      onModalHide: ({ modalName }) => {
        console.log("hidden:", modalName);
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [
              {
                name: /^_ga/,
              },
            ],
            reloadPage: true,
          },
          services: {
            ga: {
              label: "Google Analytics",
              onAccept: () => {
                ReactGA.initialize(googleAnalyticsId);
              },
              onReject: () => {
                ReactGA.gtag("consent", "update", {
                  analytics_storage: "denied",
                });
              },
            },
          },
        },
      },
      // language: {
      //   default: "cz",
      //   translations: {
      //     cz: {
      //       consentModal: {
      //         title: "Preference ochrany osobních údajů",
      //         description: `
      //         Než budete moci pokračovat na naši webovou stránku, potřebujeme váš souhlas.<br/>
      //         Pokud je vám méně než 16 let a chcete poskytnout souhlas s nepovinnými službami, musíte požádat své zákonné zástupce o povolení.<br/>
      //         Na naší webové stránce používáme soubory cookies a jiné technologie. Některé z nich jsou nezbytné, zatímco jiné nám pomáhají zlepšovat tuto webovou stránku a vaše uživatelské zkušenosti. Osobní údaje mohou být zpracovány (například IP adresy) za účelem personalizovaných reklam a obsahu nebo měření reklam a obsahu. Další informace o používání vašich údajů naleznete v našich <a href="/${dataPrivacyUrl}" target="_blank">zásadách ochrany osobních údajů</a>. Není povinné souhlasit se zpracováním vašich údajů pro použití tohoto nabízeného produktu. Vaši volbu můžete kdykoli změnit nebo upravit v nastaveních. Je však možné, že kvůli individuálním nastavením nejsou k dispozici všechny funkce webové stránky.<br/>
      //         <hr style="border-top: 1px solid #ccc; margin: 10px 0;"/>
      //         <span style="font-size: 0.9em;">
      //           Některé služby zpracovávají osobní údaje v USA. S vaším souhlasem s používáním těchto služeb souhlasíte také se zpracováním vašich údajů v USA podle čl. 49 (1) písm. a GDPR. Soudní dvůr EU považuje USA za zemi s nedostatečnou úrovní ochrany osobních údajů podle standardů EU. Existuje například riziko, že americké úřady zpracují osobní údaje v rámci dohledových programů bez možnosti stěžování se pro občany EU.<br/>
      //         </span>
      //         `,
      //         acceptAllBtn: "Souhlasím se všemi cookies",
      //         acceptNecessaryBtn: "Přijmout pouze nezbytné cookies",
      //         showPreferencesBtn:
      //           "Individuální nastavení ochrany osobních údajů",
      //         closeIconLabel: "Zavřít a odmítnout vše",
      //         footer: `
      //           <a href="/${imprintUrl}" target="_blank">Impresum</a>
      //           <a href="/${dataPrivacyUrl}" target="_blank">Zásady ochrany osobních údajů</a>
      //         `,
      //       },
      //       preferencesModal: {
      //         title: "Preference ochrany osobních údajů",
      //         acceptAllBtn: "Souhlasím se všemi cookies",
      //         acceptNecessaryBtn: "Přijmout pouze nezbytné cookies",
      //         savePreferencesBtn: "Uložit aktuální nastavení",
      //         closeIconLabel: "Zavřít modální okno",
      //         serviceCounterLabel: "Služba|Služby",
      //         sections: [
      //           {
      //             title: "Vaše preference ochrany osobních údajů",
      //             description: `Zde naleznete přehled všech používaných cookies. Můžete udělit souhlas nebo zobrazit další informace a vybrat konkrétní cookies.`,
      //           },
      //           {
      //             title: "Nezbytné",
      //             description:
      //               "Tyto cookies jsou nezbytné pro správné fungování webové stránky a nemohou být deaktivovány.",
      //             linkedCategory: "necessary",
      //             cookieTable: {
      //               caption: "Tabulka cookies",
      //               headers: {
      //                 name: "Cookie",
      //                 domain: "Doména",
      //                 desc: "Popis",
      //               },
      //               body: [
      //                 {
      //                   name: projectName,
      //                   domain: location.hostname,
      //                   desc: "Tento cookie uchovává preference souhlasu uživatele s cookies na této webové stránce. Ukládá, zda uživatel přijal nebo odmítl určité kategorie cookies.",
      //                 },
      //               ],
      //             },
      //           },
      //           {
      //             title: "Funkční",
      //             description:
      //               "Tyto cookies sbírají informace o tom, jak používáte naši webovou stránku. Všechny údaje jsou anonymizovány a nelze je použít k vaší identifikaci.",
      //             linkedCategory: "analytics",
      //             cookieTable: {
      //               caption: "Tabulka cookies",
      //               headers: {
      //                 name: "Cookie",
      //                 domain: "Doména",
      //                 desc: "Popis",
      //               },
      //               body: [
      //                 {
      //                   name: "_ga",
      //                   domain: location.hostname,
      //                   desc: "Tento cookie používá Google Analytics k rozlišení uživatelů a omezení počtu požadavků. Pomáhá sledovat používání webové stránky a výkonnostní metriky.",
      //                 },
      //                 {
      //                   name: "_gid",
      //                   domain: location.hostname,
      //                   desc: "Tento cookie používá Google Analytics k rozlišení uživatelů. Ukládá a aktualizuje jedinečnou hodnotu pro každou navštívenou stránku.",
      //                 },
      //               ],
      //             },
      //           },
      //           {
      //             title: "Marketingové",
      //             description:
      //               "Tyto cookies shromažďují informace o tom, jak používáte naši webovou stránku, aby vám mohly zobrazovat personalizované reklamy. Umožňují také měření úspěšnosti reklamních kampaní. Tyto cookies mohou být použity k vytvoření vašeho uživatelského profilu a zobrazení relevantního obsahu.",
      //             linkedCategory: "marketing",
      //             cookieTable: {
      //               caption: "Tabulka cookies",
      //               headers: {
      //                 name: "Cookie",
      //                 domain: "Doména",
      //                 desc: "Popis",
      //               },

      //               body: [
      //                 {
      //                   name: "_gads",
      //                   domain: location.hostname,
      //                   desc: "Tento soubor cookie používá Google AdSense k zobrazování personalizovaných reklam na základě vaší aktivity na této a dalších webových stránkách.",
      //                 },
      //                 {
      //                   name: "IDE",
      //                   domain: "doubleclick.net",
      //                   desc: "Tento soubor cookie používá Google DoubleClick k vyhodnocování účinnosti reklamních kampaní a ke zlepšení cílení reklam.",
      //                 },
      //               ],
      //             },
      //           },
      //           {
      //             title: "Další informace",
      //             description: `Pokud máte otázky týkající se naší politiky cookies a vašich možností, kontaktujte nás prosím na adrese <a href="mailto:${eMail}">${eMail}</a>.`,
      //           },
      //         ],
      //       },
      //     },
      //   },
      // },
      language: {
        default: "sk",
        translations: {
          sk: {
            consentModal: {
              title: "Preferencie ochrany osobných údajov",
              description: `
              Predtým, ako budete môcť pokračovať na našu webovú stránku, potrebujeme váš súhlas.<br/>
              Ak máte menej ako 16 rokov a chcete poskytnúť súhlas s nepovinnými službami, musíte požiadať svojich zákonných zástupcov o povolenie.<br/>
              Na našej webovej stránke používame súbory cookies a iné technológie. Niektoré z nich sú nevyhnutné, zatiaľ čo iné nám pomáhajú zlepšovať túto webovú stránku a vaše používateľské skúsenosti. Osobné údaje môžu byť spracované (napríklad IP adresy) na účely personalizovaných reklám a obsahu alebo merania reklám a obsahu. Ďalšie informácie o používaní vašich údajov nájdete v našich <a href="/${dataPrivacyUrl}" target="_blank">zásadách ochrany osobných údajov</a>. Nie je povinné súhlasiť so spracovaním vašich údajov na použitie tohto ponúkaného produktu. Vašu voľbu môžete kedykoľvek zmeniť alebo upraviť v nastaveniach. Je však možné, že kvôli individuálnym nastaveniam nie sú dostupné všetky funkcie webovej stránky.<br/>
              <hr style="border-top: 1px solid #ccc; margin: 10px 0;"/>
              <span style="font-size: 0.9em;">
                Niektoré služby spracovávajú osobné údaje v USA. S vaším súhlasom s používaním týchto služieb súhlasíte aj so spracovaním vašich údajov v USA podľa čl. 49 (1) písm. a GDPR. Súdny dvor EÚ považuje USA za krajinu s nedostatočnou úrovňou ochrany osobných údajov podľa štandardov EÚ. Existuje napríklad riziko, že americké úrady spracujú osobné údaje v rámci dohľadových programov bez možnosti sťažovať sa pre občanov EÚ.<br/>
              </span>
              `,
              acceptAllBtn: "Súhlasím so všetkými cookies",
              acceptNecessaryBtn: "Prijať iba nevyhnutné cookies",
              showPreferencesBtn:
                "Individuálne nastavenia ochrany osobných údajov",
              closeIconLabel: "Zatvoriť a odmietnuť všetko",
              footer: `
                <a href="/${imprintUrl}" target="_blank">Impresum</a>
                <a href="/${dataPrivacyUrl}" target="_blank">Zásady ochrany osobných údajov</a>
              `,
            },
            preferencesModal: {
              title: "Preferencie ochrany osobných údajov",
              acceptAllBtn: "Súhlasím so všetkými cookies",
              acceptNecessaryBtn: "Prijať iba nevyhnutné cookies",
              savePreferencesBtn: "Uložiť aktuálne nastavenia",
              closeIconLabel: "Zatvoriť modálne okno",
              serviceCounterLabel: "Služba|Služby",
              sections: [
                {
                  title: "Vaše preferencie ochrany osobných údajov",
                  description: `Tu nájdete prehľad všetkých používaných cookies. Môžete udeliť súhlas alebo zobraziť ďalšie informácie a vybrať konkrétne cookies.`,
                },
                {
                  title: "Nevyhnutné",
                  description:
                    "Tieto cookies sú nevyhnutné pre správne fungovanie webovej stránky a nemôžu byť deaktivované.",
                  linkedCategory: "necessary",
                  cookieTable: {
                    caption: "Tabuľka cookies",
                    headers: {
                      name: "Cookie",
                      domain: "Doména",
                      desc: "Popis",
                    },
                    body: [
                      {
                        name: projectName,
                        domain: location.hostname,
                        desc: "Tento cookie uchováva preferencie súhlasu používateľa s cookies na tejto webovej stránke. Ukladá, či používateľ prijal alebo odmietol určité kategórie cookies.",
                      },
                    ],
                  },
                },
                {
                  title: "Funkčné",
                  description:
                    "Tieto cookies zhromažďujú informácie o tom, ako používate našu webovú stránku. Všetky údaje sú anonymizované a nemožno ich použiť na vašu identifikáciu.",
                  linkedCategory: "analytics",
                  cookieTable: {
                    caption: "Tabuľka cookies",
                    headers: {
                      name: "Cookie",
                      domain: "Doména",
                      desc: "Popis",
                    },
                    body: [
                      {
                        name: "_ga",
                        domain: location.hostname,
                        desc: "Tento cookie používa Google Analytics na rozlíšenie používateľov a obmedzenie počtu požiadaviek. Pomáha sledovať používanie webovej stránky a výkonnostné metriky.",
                      },
                      {
                        name: "_gid",
                        domain: location.hostname,
                        desc: "Tento cookie používa Google Analytics na rozlíšenie používateľov. Ukladá a aktualizuje jedinečnú hodnotu pre každú navštívenú stránku.",
                      },
                    ],
                  },
                },
                // {
                //   title: "Marketingové",
                //   description:
                //     "Tieto cookies zhromažďujú informácie o tom, ako používate našu webovú stránku, aby vám mohli zobrazovať personalizované reklamy. Umožňujú aj meranie úspešnosti reklamných kampaní. Tieto cookies môžu byť použité na vytvorenie vášho používateľského profilu a zobrazenie relevantného obsahu.",
                //   linkedCategory: "marketing",
                //   cookieTable: {
                //     caption: "Tabuľka cookies",
                //     headers: {
                //       name: "Cookie",
                //       domain: "Doména",
                //       desc: "Popis",
                //     },
                //     body: [
                //       {
                //         name: "_gads",
                //         domain: location.hostname,
                //         desc: "Tento súbor cookie používa Google AdSense na zobrazovanie personalizovaných reklám na základe vašej aktivity na tejto a ďalších webových stránkach.",
                //       },
                //       {
                //         name: "IDE",
                //         domain: "doubleclick.net",
                //         desc: "Tento súbor cookie používa Google DoubleClick na vyhodnocovanie účinnosti reklamných kampaní a na zlepšenie cielenia reklám.",
                //       },
                //     ],
                //   },
                // },
                {
                  title: "Ďalšie informácie",
                  description: `Ak máte otázky týkajúce sa našej politiky cookies a vašich možností, kontaktujte nás prosím na adrese <a href="mailto:${eMail}">${eMail}</a>.`,
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  return null;
}
