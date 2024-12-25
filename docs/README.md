This document provides guidelines and requirements for configuring and managing content within the application. It covers various components and their properties, as well as the steps to ensure content is displayed correctly.

to do or not to do?

- advanced logic for "text center" globally and per page? currently it only works globally. per page does not work.
- to move navbar config outside of the header

  1.element -> ElementConfig
  2.design -> DesignConfig
  3.page -> PageConfig
  4.content -> ContentConfig

design -> style -> main: centerText: false,

socialMedia: {
color: true, // specific icon color will be applied, otherwise text color
designAdditionalClassName: "[&>svg]:h-8 [&>svg]:w-8", // will be applied to the icon; eg the size can be adjusted (default size: [&>svg]:h-4 [&>svg]:w-4)
},

footer: {
backgroundColor: "bg-primary-light",
textColor: "text-primary-dark",
itemsMarginBottom: "mb-2", // overwrites the default value "mb-4"
designAdditionalClassName: "", // applied to the entire footer div
},

sidebarNav -> visible: boolean
logo size: small, medium large

breadcrumbs:

- visible: boolean
- backgroundColor
- initialLabel: "Home",

## Table of Contents

1. [Configuration](#configuration)

   - [Font](#font)
   - [Colors](#colors)

2. [Components](#components)
   - [Navigation](#navigation)
   - [Logo](#logo)
   - [Footer](#footer)
   - [Social Media](#footer)

Styles specificity:

- global - highest
- header, footer, main

### Font

Introduction text

- By default, tailwind provides three font family utilities:
  - a cross-browser sans-serif stack: `font-sans`,
  - a cross-browser serif stack: `font-serif`,
  - a cross-browser monospaced stack: `font-mono`,
- The default font is the default font "Inter" from the installation.
- Is is possible to add more fonts as follows.
- The newly added font can be used as a Talwind utility `font-[FONT_NAME]` in the className property.

1. Configuration in `talwind.config.ts`:

- Create a new folder in /public/fonts and add the font(s) there.
- In `talwind.config.ts`, add the new font object to the object `fontFamilies` with the following properties:
  - `key`: the name of the font that will be used; lowcase
  - `familyName`: is used for `fontFamily` in theme -> extend -> fontFamily; first capital letter
  - `folderName`: the name of the folder in "fonts" where the font is located
  - `fileName`: the name of the file incl. file type
  - `styles`: array of objects with the following properties:
    - `weight`: either number from "100" to "900" or a range, eg "100 900" for dynamic fonts.
    - `style`: possible values: normal, italic
  - `format`: font type; example of values: opentype, truetype
- After this config, in `talwind.config.ts`, the required `fontFamily`, `safelist` and `@font-face` are generated automatically.

Example:

```ts
const fontFamilies = {
  strenuous: {
    familyName: "Strenuous",
    folderName: "Strenuous",
    fileName: "strenuous.otf",
    styles: [
      { weight: "100 900", style: "normal" },
      { weight: "400", style: "italic" },
    ],
    format: "opentype",
  },
};
```

2. Configuration in `pageData`:

- In `pageData`, in general -> layout -> font, we define the font name - the "key" defined in `talwind.config.ts`.
- The default value is the default font with the value "default". The values "sans", "serif" and "mono" also can be used.

```ts
 general: {
    layout: {
      font: {
        global: "default" as const,
        logo: "sans" as const,
        headline1: "cinzel" as const,
      },
    },}
```

### Colors

Introduction text

- There are 5 color utilities defined:
  1. primary:
  - light
  - default
  - dark
  2. secondary:
  - light
  - default
  - dark
  3. tertiary:
  - light
  - default
  - dark
  4. neutral:
  - light
  - dark
  5. textColor

These colors can be defined in `talwind.config.ts` and used as Talwind utilities, eg. `bg-tertiary-default`. In the `pageData.ts`, these colors have to be used in the format `var(--[color-name])`, eg. `var(--primary-default)`.

### Navigation

Introduction text

- The navigation items are automatically generated from the `pageData.ts`
- The navigation items are defined on these levels:

  - Top-level navigation:

    ```json
    {
      "general": {
        "header": {
          "topNavList": [{}]
        }
      }
    }
    ```

  - Category navigation items:

    ```json
    {
      "firstLevelPage": [{}]
    }
    ```

  - Subcategory navigation items:

    ```json
    {
      "firstLevelPage": [
        {
          "secondLevelPage": [{}]
        }
      ]
    }
    ```

  - External links:

  ```json
  {
    "general": {
      "header": {
        "topNavExternal": [{ "subList": [{}] }]
      }
    }
  }
  ```

- The `topNavList` property has the following properties:

  - `id`: is not relevant
  - `label`: this string appears in the Front-End
  - `displayOrder`: defines the order of the item in the category list
  - `topNavVisible`: defines whether the navigation item is visible in the top navigation in header
    `footerVisible`: defines whether the navigation item is visible in the footer in the category "categories"
  - `dropdown`: defines whether the navigation item appears as a dropdown or as a regular link
  - `url`:
    - the URL of the regular link
    - the values can be a string or null

- The `firstLevelPage` and `secondLevelPage` property have the following navigation properties:

  - `id`:
    - is not relevant
    - for the firstLevelPage, it will be recalculated when the final array of navigation items is constructed
  - `label`: this string appears in the Front-End
  - `topNavListId`:
    - only exists for the firstLevelPage
    - defines in which top level navigation item it appears
    - value must be a valid topNavList ID
  - `displayOrder`: defines the order of the item in the category list
  - `topNavVisible`: defines whether the navigation item is visible in the top navigation in header
    `footerVisible`: - only exists for the firstLevelPage
    - defines whether the navigation item is visible in the footer in the category "categories"
  - `url`: the URL of the regular link

- The subcategory navigation item appears automatically as children of category navigation item.
- The property `topNavVisible` also exists in the `topNavExternal` (not only in `topNavList` and `firstLevelPage`).

- The `topNavExternal` property has the following properties:
  - It is possible to define additional navigation points with links to external pages
  - `topNavExternal` is an array of objects
    - Each object has the following properties:
      - `label` - this is equivalent to a label of `firstLevelPage`
      - `topNavListId` - which topNavList the topNavExternal is assigned to
      - `displayOrder`
      - `topNavVisible` - boolean
      - `footerVisible` - boolean; default "false"
      - `url` - topNavExternal has to have a link
      - `subList` - an array of sub points equivalent to `secondLevelPage`
        - The `subList` object has following properties:
          - `label` - string
          - `displayOrder` - number
          - `topNavVisible` - boolean
          - `url` - string

### Logo

Introduction text

The `logo` property has the following properties:

- The logo configuration supports svg and png files, as well as a text logo without image.
- The logo is shown in the header and in the footer.
- The logo image shall be uploaded in the folder /public.
- In the pageData, the following information have to be filled out for a working logo configuration:
  - fileName (string): the name of the file without filetype; case sensitive.
  - fileType (string): the filetype of the logo file.
  - headerLogoType:
    - configuration which logo type shall be displayed in the header
    - possible values (case sensitive):
      - `svg` - shows only the svg logo without text
      - `png` - shows only the png logo without text
      - `text` - shows only the text logo without image
      - `pngText` - shows logo with both png and text
      - `svgText` - shows logo with both svg and text
  - footerLogoType:
    - configuration which logo type shall be displayed in the footer
    - only one image can be defined as a logo; if the logo contains an image, only this image can be used for both header and footer
  - width (number): the original image width in pixel; this is used for responsiveness - aspect ration calculation.
  - height (number): the original image height in pixel; this is used for responsiveness - aspect ration calculation.
  - alt?: (string; optional): the alt text of the image.
  - text? (optional):
    - firstPartWording (string):
    - firstPartStyle (CSSProperties):
      - Possible values:
        - `capitalize` - transforms the first character of each word to uppercase
        - `uppercase` - transforms all characters to uppercase
        - `lowercase` - transforms all characters to lowercase
    - secondPartWording (string):
    - secondPartStyle (CSSProperties): see above "firstPartStyle".
    - logoClassName: additional Talwind classes; string

Logo font can be also defined in the object "font" in general -> layout see [Font](#font). The "logoClassName" has higher specificity.

## Example:

```ts
logo: {
  fileName: "logo",
  fileType: "png",
  headerLogoType: "text" as LogoType,
  footerLogoType: "pngText" as LogoType,
  width: 500,
  height: 300,
  alt: "Logo",
  text: {
    firstPartWording: "Config",
    firstPartStyle: {
      color: "var(--primary-default)",
      textTransform: "uppercase" as const,
    },
    secondPartWording: "Freak",
    secondPartStyle: {
      color: "var(--secondary-default)",
      textTransform: "lowercase" as const,
    },
  },
  logoClassName: "font-strenuous",
},
```

### Footer

Introduction text

- In the pageData, there is only the property `description`. It is the text shown on the left side under the logo.
- The logo is configurable in the object `logo` with the property `footerLogoType`.
- In `pageData`, `general`, there is `socialMedia` object. The social media links are shown at the top of the footer.
  - `socialMedia` has following properties:
    - `facebook`
    - `instagram`
    - `twitter`
    - `google`
    - `linkedin`
    - `github`
  - Each property has a value link.
- The objects `topNavList`, `topNavExternal` and `firstLevelPage` has a property `footerVisible` - a boolean with a default value "false".
- footerCategory === legal - the item appears in the column "legal"
