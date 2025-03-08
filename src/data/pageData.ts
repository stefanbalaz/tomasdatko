import {
  LogoType,
  HeroContentPosition,
  HeroDivWidth,
  HeroTextAlign,
} from "../app/types";

export const pageData = {
  // GENERAL

  general: {
    design: {
      designID: 1, // Here is the defined designStyle ID selected
      designStyle: [
        {
          id: 1,
          layoutID: 1, // This is not necessary probably
          global: {
            primaryColorLight: "var(--primary-light)", // CSS variable from Tailwind config
            primaryColorDefault: "var(--primary-default)", // CSS variable from Tailwind config
            primaryColorDark: "var(--primary-dark)", // CSS variable from Tailwind config
            secondaryColorLight: "var(--secondary-light)",
            secondaryColorDefault: "var(--secondary-default)",
            secondaryColorDark: "var(--secondary-dark)",
            tertiaryColorLight: "var(--tertiary-light)",
            tertiaryColorDefault: "var(--tertiary-default)",
            tertiaryColorDark: "var(--tertiary-dark)",
            neutralLight: "var(--neutral-light)", // CSS variable from Tailwind config
            neutralDark: "var(--neutral-dark)", // CSS variable from Tailwind config
            font: "cervo" as const, // undefined - font inter; works only for global property, or tailwind default fonts "sans", "serif", "mono" or individually added font - fontname like "cinzel", "caveat", etc.
            fontSize: "text-base",
            textColor: "text-textColor",
            backgroundColor: "", // bg-primary-light
            designAdditionalClassName: "tracking-wider", // "tracking-wider" tailwind utility applied to spacing between letters
          },

          button: {
            size: "large", // Ensure this is one of the specified string literals
            rounded: "rounded-full", // Ensure this is either "rounded" or "rounded-full"
            primary: { color: "bg-primary-dark" }, // Define the properties here based on your design
            secondary: { color: "bg-secondary-dark" },
            designAdditionalClassName: "",
          },

          image: {
            designAdditionalClassName: "border-16 border-yellow-400",
          },

          header: {
            backgroundColor: "", // bg-tertiary-light
            textColor: "text-yellow-400", // text-primary-dark
            sticky: false,
            designAdditionalClassName: "font-bold",
          },
          breadcrumbs: {
            backgroundColor: "bg-primary-light",
            designAdditionalClassName: "",
          },
          logo: {
            font: "hanoble" as const, // tailwind default fonts "sans", "serif", "mono" or individually added font - fontname like "cinzel", "caveat", etc.
            fontSize:
              "text-xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl", // header text logo
            designAdditionalClassName: "font-extrabold leading-tight",
            size: "medium", //size of header image logo; possible values: small, medium, large; mandatory, otherwise the original image size
          },
          topNav: {
            visible: true,
            backgroundColor: "bg-primary-default",
            textColor: "",
          },
          hero: {
            fullWidth: true,
            main: {
              image: {
                imageHeight: "m", //full (hero height = full image height), xs, s, m, l, xl, 2xl
                imgFolder: "/", // "/" for main public folder
                imgName: "p14_horse_short.jpg", // filename with extension, eg. hero.png
                imgAlt: "Tomas Datko",
                imageWidthPx: "", // image width for nextjs image scaling
                imageHeightPx: "", // image height for nextjs image scaling
                designAdditionalClassName: "", // additional css classes for image
              },

              style: { opacity: "bg-[hsla(0,0%,0%,0.3)]" }, // value "opacity-0" to "opacity-100" (bright/no effect - dark/black); optimal 0.3 or 0.4
              content: {
                simple: {
                  visible: false,
                  text: "Seeing beyond moments",
                  position: "left" as HeroContentPosition, //left, center, right
                  divWidth: "w-1/2" as HeroDivWidth, // tailwind utility
                  textAlign: "left" as HeroTextAlign, //left, center, right, justify (block full width)
                  font: "font-cinzel" as const, // tailwind default fonts "sans", "serif", "mono" or individually added font - fontname like "cinzel", "caveat", etc.
                  fontSize:
                    "text-xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl ", // header text logo
                  paragraphAdditionalClassName: "leading-10 text-yellow-400", // tailwind utility applied to text paragraph; eg leading-10 (possible values leading-3 to leading-10)
                  designAdditionalClassName: "font-bold",
                },
                box: { visible: false },
              },
              designAdditionalClassName: "", // border-20 border-yellow-400
            },
            sub: {
              imageHeight: "xs", //full, xs, s, m, l, xl, 2xl
              imageWidthPx: "",
              imageHeightPx: "",
              designAdditionalClassName: "",
            },
          },
          main: {
            width: "w-5/6 lg:w-1/2",
            position: "mx-auto",
            centerText: true, // "main" is per default a grid with 3 columns, first two columns are for the content and the third for the sidebar
            backgroundColor: "", // bg-neutral-light
            designAdditionalClassName: "", // rounded-lg shadow-secondary-1
          },
          sidebarNav: {
            backgroundColor: "bg-primary-default",
            visible: true, // values: true, false; shows the right sidebar with content (h1 and h2) overview; visible sidebar shrinks the content into first two of three grid columns; global property for entire app, can be overwritten by property on individual pages
          },
          headline1: {
            font: "hanoble" as const,
            fontSize:
              "text-xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl",
            designAdditionalClassName: "",
          },
          headline2: {
            font: "hanoble" as const,
            fontSize:
              "text-base xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl",
            designAdditionalClassName: "",
          },
          headline3: {
            font: "hanoble" as const,
            fontSize:
              "font-bold text-xl xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl",
            designAdditionalClassName: "",
          },
          paragraph: {
            font: "mono" as const,
            fontSize: "text-base leading-relaxed",
            backgroundColor: "bg-gray-500",
            designAdditionalClassName: "",
          },
          footer: {
            backgroundColor: "bg-gray-300",
            textColor: "",
            itemsMarginBottom: "mb-2", // overwrites the default value "mb-4"
            designAdditionalClassName: "", // applied to the entire footer div
          },
          socialMedia: {
            color: false, // specific icon color will be applied, otherwise text color
            designAdditionalClassName:
              "[&>svg]:h-8 [&>svg]:w-8 text-yellow-400", // applied to the icon; eg the size can be adjusted (default size: [&>svg]:h-4 [&>svg]:w-4)
          },
        },
      ],
    },

    legal: {
      entityName: "Tomas Datko", // Required
      legalForm: undefined,
      projectName: "Tomas Datko", // Required (appears for example in the cookie - as a cookie name)
      phoneNumber: undefined /* "+49 162 254 23 09", */,
      eMail: "tom.datko@hotmail.com", // Required
      postalAddress: {
        streetName: undefined,
        streetNumber: undefined,
        zipCode: undefined,
        city: undefined,
        country: undefined,
      },
      /*   postalAddress: {
        streetName: "Uhlandstraße",
        streetNumber: "130",
        zipCode: "10717",
        city: "Berlin",
        country: "Germany",
      }, */
      pageId: {
        // Required for cookie consent
        imprint: 6,
        dataPrivacy: 7,
      },
      googleAnalytics: {
        id: "G-Undefined", // Required
      },
    },

    socialMedia: {
      link: {
        // if link not defined, the icon does not appear
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "",
        google: "",
        linkedin: "",
        github: "",
      },
      elementAdditionalClassName: "",
    },

    logo: {
      fileName: "logo",
      fileType: "png",
      headerLogoType: "text" as LogoType,
      footerLogoType: "text" as LogoType,
      width: 500,
      height: 300,
      alt: "Logo",
      text: {
        firstPartWording: "Tomas Datko",
        firstPartStyle: {
          color: "", // var(--primary-default)
          textTransform: "uppercase" as const, // "lowercase" as const, "uppercase" as const, "capitalize" as const, undefined
        },
        secondPartWording: "",
        secondPartStyle: {
          color: "", // var(--secondary-default)
          textTransform: undefined, // "lowercase" as const, "uppercase" as const, "capitalize" as const, undefined
        },
      },
      elementAdditionalClassName: "",
    },

    header: {
      topNavList: [
        {
          id: 1,
          label: "Bio",
          displayOrder: 3,
          topNavVisible: true,
          footerVisible: false,
          dropdown: false,
          url: "bio",
        },
        {
          id: 2,
          label: "Exhibition",
          displayOrder: 1,
          topNavVisible: true,
          footerVisible: false,
          dropdown: false,
          url: "exhibition",
        },
        {
          id: 3,
          label: "Film",
          displayOrder: 2,
          topNavVisible: true,
          footerVisible: false,
          dropdown: false,
          url: "film",
        },
      ],
      topNavExternal: [
        /*      {
          id: 1,
          label: "Team",
          topNavListId: 1,
          displayOrder: 1,
          topNavVisible: true,
          footerVisible: false,
          url: "https://www.zaehnsationell.de/team-zahnarzt-zehlendorf/",
          subList: [
            {
              id: 1,
              label: "Stefan",
              displayOrder: 2,
              topNavVisible: true,
              url: "https://www.zaehnsationell.de/team-zahnarzt-zehlendorf/",
            },
           
          ],
        },
       */
      ],
      elementAdditionalClassName: "",
    },

    breadcrumbs: {
      visible: false,
      initialLabel: "Home",
      elementAdditionalClassName: "",
    },

    footer: {
      socialNetworksIntro: "Follow me on social networks:",
      description:
        "" /* "Turning moments into stories, one frame at a time.", */,
      labels: {
        categories: "Links",
        legal: "Legal",
        contact: "Contact",
        cookies: "Cookies",
      },
      elementAdditionalClassName: "",
    },
  },

  // HOMEPAGE

  homePage: {
    layout: "Layout1",
    metaData: {
      title: "Tomas Datko - Personal page",
      description: "Turning moments into stories, one frame at a time.",
    },
    sidebarNav: { visible: false }, // values: undefined, true, false; overwrites the global property
    centerText: true,
    hero: {
      visible: true,
      type: "main", // values: undefined, sub, main
    },
    content: [
      {
        type: "section",
        id: "section1",
        parent: null,
        className: "",
        children: [
          {
            type: "headline1",
            className: "",
            text: "Capturing the World Through a Thoughtful Lens",
          },

          {
            type: "paragraph",
            className: "",
            children: [
              {
                type: "text",
                text: "Photography is my medium for storytelling—a way to freeze moments, spark dialogue, and connect people across boundaries. My journey has been shaped by years of creative exploration, from working behind the scenes in media to leading international security operations. Each experience has deepened my understanding of human connection and the power of visuals to convey meaning. Today, I focus on creating images that not only capture beauty but also provoke thought, offering a window into the complexities of life.",
              },
            ],
          },
        ],
      },

      {
        type: "section",
        id: "section2",
        parent: null,
        className: "",
        children: [
          {
            type: "headline2",
            className: "",
            text: "Inspiring Compassion Through Art",
          },

          {
            type: "paragraph",
            className: "",
            children: [
              {
                type: "text",
                text: "Through my work, I aim to challenge indifference and foster empathy. Whether it's highlighting the resilience of working animals or exploring the emotions that unite us, my photography bridges worlds and reveals shared truths. Art, I believe, is not just a reflection of life—it’s a call to engage with it. My hope is that each viewer takes away not only a story but also a deeper awareness of their role within it.",
              },
            ],
          },
        ],
      },
    ],
  },

  firstLevelPage: [
    //MAIN PAGE

    {
      id: 1,
      url: "bio",
      navLabel: "Bio",
      topNavListId: 1,
      displayOrder: 1,
      topNavVisible: true,
      footerVisible: true,
      layout: "Layout1",
      sidebarNav: { visible: false },
      centerText: true,
      metaData: {
        title: "Tomas Datko - Bio",
        description: "Tomas Datko about me page",
      },
      hero: {
        visible: false,
        type: "main", // values: undefined, sub, main
      },

      content: [
        {
          type: "section",
          id: "section1",
          parent: null,
          className: "",
          children: [
            /*        {
              type: "headline1",
              className: "",
              text: "Bio",
            }, */
            {
              type: "headline2",
              className: "",
              text: "Tomas Datko is a photographer, writer, and filmmaker currently based in Berlin.",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Born in 1980s Czechoslovakia, he grew up navigating cultural displacement, which shaped his artistic lens. After an early career in international fashion modeling, he transitioned into photography and storytelling, using his work to explore themes of identity, resilience, and transformation.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "His solo photography exhibition",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "bold",
                      text: "Patterns: Part 1 - Chronicles of Pain",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "was featured at PS120 in Berlin, and his short documentary on the working horses of Giza was selected for the 2025 Berlin Independent Film Festival.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Beyond photography, Tomas is working on a collection of fictional short stories, including Coop Coup, a satirical exploration of loneliness through anthropomorphism, and a memoir reflecting on Asperger's, mental health, and personal growth, all told with his signature humor and sarcasm. He is also developing a film intertwining the lives of Peruvian butterflies with themes of mental health and spiritual transformation.",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 2,
      url: "exhibition",
      navLabel: "Exhibition",
      topNavListId: 1,
      displayOrder: 2,
      topNavVisible: true,
      footerVisible: true,
      layout: "Layout1",
      sidebarNav: { visible: false },
      centerText: true,
      metaData: {
        title: "Tomas Datko - Exhibition",
        description:
          "Tomas Datko is a photographer, writer, and filmmaker currently based in Berlin.",
      },
      hero: {
        visible: false,
        type: "main", // values: undefined, sub, main
      },
      content: [
        {
          type: "section",
          id: "section6",
          parent: null,
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "Presented in a solo exhibition,",
            },

            {
              type: "headline2",
              className: "",
              text: "Tomas Datko: Patterns Part 1 - Chronicles of Pain",
            },

            {
              type: "headline2",
              className: "",
              text: "at PS120, Potsdamer Strasse 124",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "(22.08. - 15.09.2024), this series captures the harsh reality of the working horses of Giza, exposing the silent suffering endured under the weight of human indifference. Through a blend of documentary realism and poetic depth, the images confront viewers with the cost of exploitation and the quiet complicity that allows it to persist.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "This work extends beyond photography with a short film, recently selected for the",
                    },
                  ],
                },
                {
                  type: "paragraphGroup",
                  className: "",
                  children: [
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "bold",
                          text: "2025 Berlin Independent Film Festival",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "(12.02. - 18.02.2025). Together, the images and film serve as a call to acknowledge what is too often ignored.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          type: "section",
          id: "section2",
          parent: null,
          className: "",
          children: [
            /*          {
              type: "headline2",
              className: "",
              text: "Exhibition",
            }, */
            /*   {
              type: "paragraph",
              className: "",
              children: [
                {
                  type: "text",
                  text: "The streets of Cairo tell a tale of unspoken struggle—where horses carry the weight of history and tourism. Their lean frames and exhausted eyes speak of endless labor, often overlooked by those seeking the perfect snapshot of the pyramids. Through my lens, I captured the juxtaposition of their strength and the pervasive indifference surrounding their plight.",
                },
              ],
            }, */
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p14_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section3",
          parent: null,
          className: "",
          children: [
            /*    {
              type: "headline2",
              className: "",
              text: "Shadows of Exploitation",
            },
            {
              type: "paragraph",
              className: "",
              children: [
                {
                  type: "text",
                  text: "Amid the grandeur of ancient monuments, the stark reality of exploitation unfolds. These working horses navigate rocky slopes and blistering sands, often without adequate care or respite. Each frame is a stark reminder of the cost of neglect, highlighting the ethical dilemmas that linger in these environments.",
                },
              ],
            }, */
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p1_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section4",
          parent: null,
          className: "",
          children: [
            /*   {
              type: "headline2",
              className: "",
              text: "Breaking the Silence",
            },
            {
              type: "paragraph",
              className: "",
              children: [
                {
                  type: "text",
                  text: "Beyond the images lies a story that rarely surfaces—a narrative suppressed by those who benefit from it. The photographs aim to shed light on the hidden pain, challenging the silence maintained by authorities and urging viewers to confront the uncomfortable truths embedded in these moments.",
                },
              ],
            }, */
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p2_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section5",
          parent: null,
          className: "",
          children: [
            /*   {
              type: "headline2",
              className: "",
              text: "A Call for Compassion",
            },
            {
              type: "paragraph",
              className: "",
              children: [
                {
                  type: "text",
                  text: "Every photograph invites a question: What is our responsibility toward the lives we touch, directly or indirectly? These images are more than documentation; they are a call to action, encouraging empathy and fostering a deeper awareness of the consequences of our choices as travelers and global citizens.",
                },
              ],
            }, */
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p3_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section6",
          parent: null,
          className: "",
          children: [
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p4_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section7",
          parent: null,
          className: "",
          children: [
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p5_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section8",
          parent: null,
          className: "",
          children: [
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p6_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section9",
          parent: null,
          className: "",
          children: [
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p7_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section10",
          parent: null,
          className: "",
          children: [
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p8_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section11",
          parent: null,
          className: "",
          children: [
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p9_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section12",
          parent: null,
          className: "",
          children: [
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p10_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section13",
          parent: null,
          className: "",
          children: [
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p11_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section14",
          parent: null,
          className: "",
          children: [
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p12_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section15",
          parent: null,
          className: "",
          children: [
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p13_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section16",
          parent: null,
          className: "",
          children: [
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p4_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },

        {
          type: "section",
          id: "section17",
          parent: null,
          className: "",
          children: [
            {
              type: "image",
              className: "", // p-4 border-4 border-yellow-500
              src: "/p15_horse.jpg",
              alt: "Tomas Datko",
            },
          ],
        },
      ],
    },

    {
      id: 3,
      url: "film",
      navLabel: "Film",
      topNavListId: 1,
      displayOrder: 2,
      topNavVisible: true,
      footerVisible: true,
      layout: "Layout1",
      sidebarNav: { visible: false },
      centerText: true,
      metaData: {
        title: "Tomas Datko - Film",
        description: "Film page",
      },
      hero: {
        visible: false,
        type: "main", // values: undefined, sub, main
      },
      content: [
        {
          type: "section",
          id: "section6",
          parent: null,
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "Presented in a solo exhibition,",
            },

            {
              type: "headline2",
              className: "",
              text: "Tomas Datko: Patterns Part 1 - Chronicles of Pain",
            },

            {
              type: "headline2",
              className: "",
              text: "at PS120, Potsdamer Strasse 124",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "(22.08. - 15.09.2024), this series captures the harsh reality of the working horses of Giza, exposing the silent suffering endured under the weight of human indifference. Through a blend of documentary realism and poetic depth, the images confront viewers with the cost of exploitation and the quiet complicity that allows it to persist.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "This work extends beyond photography with a short film, recently selected for the",
                    },
                  ],
                },
                {
                  type: "paragraphGroup",
                  className: "",
                  children: [
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "bold",
                          text: "2025 Berlin Independent Film Festival",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "(12.02. - 18.02.2025). Together, the images and film serve as a call to acknowledge what is too often ignored.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          type: "section",
          id: "section1",
          parent: null,
          className: "",
          children: [
            /*    {
              type: "headline1",
              className: "",
              text: "Patterns of Indifference",
            }, */
            {
              type: "video",
            },
          ],
        },
      ],
    },

    {
      id: 6,
      url: "imprint",
      navLabel: "Imprint",
      topNavListId: null,
      displayOrder: null,
      topNavVisible: false,
      footerVisible: true,
      footerCategory: "legal",
      sidebarNav: { visible: false },
      centerText: true,
      layout: "Layout1",
      metaData: {
        title: "Imprint",
        description: "Imprint",
      },
      content: [
        {
          type: "section",
          id: "section1",
          parent: null,
          className: "",
          children: [
            {
              type: "headline1",
              className: "",
              text: "Imprint",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Tomas Datko",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Uhlandstraße 130",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "10717 Berlin",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "📧 E-Mail: tom.datko@hotmail.com",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "📞 Phone: +49 162 254 23 09",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Responsible for the content according to § 55 Abs. 2 RStV:",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Tomas Datko, Uhlandstraße 130, 10717 Berlin",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    {
      id: 7,
      url: "dataprivacy",
      navLabel: "Data Privacy",
      topNavListId: null,
      displayOrder: null,
      topNavVisible: false,
      footerVisible: true,
      footerCategory: "legal",
      sidebarNav: { visible: false },
      centerText: true,
      layout: "Layout1",
      metaData: {
        title: "Data Privacy",
        description: "Data Privacy Policy",
      },
      content: [
        {
          type: "section",
          id: "section1",
          parent: null,
          className: "",
          children: [
            {
              type: "headline1",
              className: "",
              text: "Data Privacy Policy",
            },
          ],
        },
        {
          type: "section",
          id: "section2",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "1. Introduction",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "This document (hereinafter referred to as the 'Document') describes how we collect, use, and protect personal data you provide when using this website (hereinafter referred to as the 'Website'). This Document is binding for all visitors and users of the Website.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section3",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "2. Data Controller",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "The operator of this Website and the entity responsible for data processing is ",
                    },
                    {
                      type: "bold",
                      text: "Tomas Datko",
                    },
                    {
                      type: "text",
                      text: " located at ",
                    },
                    {
                      type: "bold",
                      text: "Uhlandstraße 130, 10717 Berlin.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section4",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "3. Categories of Personal Data Processed",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "When using the Website, we may collect the following categories of personal data:",
                    },
                  ],
                },
                {
                  type: "bulletList",
                  className: "",
                  children: [
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Technical Data: ",
                        },
                        {
                          type: "text",
                          text: "IP address, browser type, language settings, operating system type, access time to the Website.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Cookies: ",
                        },
                        {
                          type: "text",
                          text: "Cookies help track user preferences, enhance navigation on the Website, and provide relevant information.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section5",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "4. Purposes of Personal Data Processing",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "We collect and process personal data for the following purposes:",
                    },
                  ],
                },
                {
                  type: "bulletList",
                  className: "",
                  children: [
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Ensuring Website Operation: ",
                        },
                        {
                          type: "text",
                          text: "Based on our legitimate interests, to ensure the functionality and security of the Website.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Analytical Purposes: ",
                        },
                        {
                          type: "text",
                          text: "Using Google Analytics to analyze traffic and user behavior, helping us improve the content and services offered on the Website.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Communication: ",
                        },
                        {
                          type: "text",
                          text: "Based on your consent, if you opt to subscribe to newsletters or other forms of communication.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section6",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "5. Cookies and Google Analytics",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "When using the Website, we may use cookies and Google Analytics to record information about your visit and interaction with the Website. Cookies are small text files that are stored in your browser, allowing us to identify you on subsequent visits to the Website and tailor content to your interests.",
                    },
                    {
                      type: "text",
                      text: "Google Analytics is a service provided by Google that gives us statistics about Website traffic and allows us to better understand your preferences and behavior on the Website.",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section7",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "6. Legal Basis for Personal Data Processing",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "The processing of personal data is based on:",
                    },
                  ],
                },
                {
                  type: "bulletList",
                  className: "",
                  children: [
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Your consent: ",
                        },
                        {
                          type: "text",
                          text: "When using cookies, if required by applicable legislation.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Our legitimate interests: ",
                        },
                        {
                          type: "text",
                          text: "To ensure the operation and improvement of the Website.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section8",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "7. Your Rights",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "According to applicable legal regulations, you have the right to:",
                    },
                  ],
                },
                {
                  type: "bulletList",
                  className: "",
                  children: [
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "text",
                          text: "Request access to your personal data and information about its processing.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "text",
                          text: "Request correction of inaccurate or incomplete data.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "text",
                          text: "Delete your personal data if there is no legitimate reason for its further processing.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "text",
                          text: "Restrict the processing of your personal data in certain situations.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "text",
                          text: "Object to the processing of your personal data.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section9",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "8. Contact Information",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "If you have any questions or requests regarding data protection or this Document, please contact us at:",
                    },
                  ],
                },
                {
                  type: "bulletList",
                  className: "",
                  children: [
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Tomas Datko, Uhlandstraße 130, 10717 Berlin.",
                        },
                      ],
                    },
                    {
                      type: "bulletItem",
                      children: [
                        {
                          type: "bold",
                          text: "Email: tom.datko@hotmail.com",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "section",
          id: "section10",
          parent: "section1",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "9. Changes to Data Protection",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "This Document may be updated from time to time. The current version of the Document is always available on the Website.",
                    },
                    {
                      type: "text",
                      text: " Last updated: 8.3.2025",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 8,
      url: "Content",
      navLabel: "Content",
      topNavListId: 5,
      displayOrder: 1,
      topNavVisible: true,
      footerVisible: false,
      layout: "Layout1",
      sidebarNav: { visible: true },
      centerText: true,
      metaData: {
        title: "Car page title",
        description: "Car page description",
      },
      content: [
        {
          type: "section",
          id: "section1",
          parent: null,
          className: "",
          children: [
            {
              type: "headline1",
              className: "",
              text: "Headline 1 picture on the right",
            },
            {
              type: "paragraphImage",
              className: "",
              children: [
                {
                  type: "paragraphGroup",
                  className: "",
                  children: [
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ",
                        },
                        {
                          type: "textLink",
                          text: "Example link",
                          href: "https://example.com",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "Another paragraph following the first one. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                        },
                      ],
                    },
                    {
                      type: "paragraph",
                      className: "",
                      children: [
                        {
                          type: "text",
                          text: "Another paragraph following the first one. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "image",
                  className: "",
                  src: "/logo.svg",
                  alt: "Homepage Image",
                },
              ],
            },
          ],
        },

        {
          type: "section",
          id: "section2",
          parent: null,
          className: "",
          children: [
            {
              type: "headline1",
              className: "",
              text: "Headline 1 text picture column",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
              ],
            },
            {
              type: "image",
              className: "",
              src: "/bottles.png",
              alt: "Homepage Image",
            },
          ],
        },
        {
          type: "section",
          id: "section3",
          parent: "section2",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "Sub headline 1 text only",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
              ],
            },
            {
              type: "headline3",
              className: "",
              text: "Healdine 3 between text blocks",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
              ],
            },
            {
              type: "bulletList",
              className: "",
              children: [
                {
                  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
                },
                {
                  text: "Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
                },
                {
                  text: " Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                },
              ],
            },
          ],
        },

        {
          type: "section",
          id: "section4",
          parent: null,
          className: "",
          children: [
            {
              type: "headline1",
              className: "",
              text: "This is the main headline 1",
            },
            {
              type: "headline3",
              className: "",
              text: "This is the third headline 3",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          type: "section",
          id: "section5",
          parent: "section4",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "This is the sub headline 2",
            },
            {
              type: "paragraphGroup",
              className: "",
              children: [
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      type: "text",
                      text: "This is a paragraph with ",
                    },
                    {
                      type: "bold",
                      text: "bold text",
                    },
                    {
                      type: "text",
                      text: " and a ",
                    },
                    {
                      type: "textLink",
                      text: "link",
                      href: "https://example.com",
                    },
                    {
                      type: "text",
                      text: ".",
                    },
                  ],
                },
                {
                  type: "paragraph",
                  className: "",
                  children: [
                    {
                      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          type: "section",
          id: "section5",
          parent: "section4",
          className: "",
          children: [
            {
              type: "headline2",
              className: "",
              text: "This is the bullet list",
            },
            {
              type: "bulletList",
              className: "",
              children: [
                {
                  type: "text", // Explicitly define this as a text type or bulletItem
                  text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
                },
                {
                  type: "bulletItem", // Define a specific type for bullet items
                  children: [
                    {
                      type: "text",
                      text: "This is a bullet point with a ",
                    },
                    {
                      type: "bold",
                      text: "bold word",
                    },
                    {
                      type: "text",
                      text: " and a ",
                    },
                    {
                      type: "textLink",
                      text: "text link",
                      href: "https://example.com",
                    },
                    {
                      type: "text",
                      text: " in the same sentence.",
                    },
                  ],
                },
                {
                  type: "text",
                  text: "Dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
                },
                {
                  type: "text",
                  text: "Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
