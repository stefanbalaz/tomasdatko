import { CSSProperties } from "react";

type FontType = string; // Extend with other fonts if needed

export type HeroContentPosition = "left" | "center" | "right";
export type HeroDivWidth = "w-1/2" | string; // Add more width utilities as needed
export type HeroTextAlign = "left" | "center" | "right" | "justify";

// DESIGN CONFIG START

interface GlobalDesign {
  primaryColorLight: string;
  primaryColorDefault: string;
  primaryColorDark: string;
  secondaryColorLight: string;
  secondaryColorDefault: string;
  secondaryColorDark: string;
  tertiaryColorLight: string;
  tertiaryColorDefault: string;
  tertiaryColorDark: string;
  neutralLight: string;
  neutralDark: string;
  font: FontType;
  fontSize: string; // Tailwind text-size classes like "text-base"
  textColor: string; // Tailwind text-color classes
  backgroundColor: string; // Tailwind bg-color classes
  designAdditionalClassName: string; // Additional CSS classes
}

// Define the allowed values for size and rounded as separate types
export type ButtonSize = "small" | "medium" | "large" | undefined;
export type ButtonRounded =
  | "rounded"
  | "rounded-full"
  | "undefined"
  | undefined;

export interface ButtonDesign {
  // size: ButtonSize; // Reference the ButtonSize type here
  size: string; // Reference the ButtonSize type here // Can be fixed
  // rounded: ButtonRounded; // Reference the ButtonRounded type here
  rounded: string; // Reference the ButtonRounded type here // Can be fixed
  primary: Record<string, any>; // Define properties based on your primary button design
  secondary: Record<string, any>; // Define properties based on your secondary button design
  designAdditionalClassName: string;
}

interface HeaderDesign {
  backgroundColor: string;
  textColor: string;
  sticky: boolean;
  designAdditionalClassName: string;
}

interface BreadcrumbsDesign {
  backgroundColor: string;
  designAdditionalClassName: string;
}

interface LogoDesign {
  font: FontType;
  fontSize: string; // Tailwind text-size classes for the logo
  designAdditionalClassName: string; // Additional CSS classes
  // size: "small" | "medium" | "large";
  size: string; // Can be fixed
}

interface TopNavDesign {
  visible: boolean;
  backgroundColor: string;
  textColor: string;
}

interface HeroDesign {
  fullWidth: boolean;
  main: {
    image: {
      // imageHeight: "full" | "xs" | "s" | "m" | "l" | "xl" | "2xl";
      imageHeight: string; // Can be fixed
      imgFolder: string;
      imgName: string;
      imgAlt: string;
      imageWidthPx: string;
      imageHeightPx: string;
      designAdditionalClassName: string;
    };
    style: {
      opacity: string; // Tailwind opacity classes
    };
    content: {
      simple: {
        visible: boolean;
        text: string;
        position: HeroContentPosition;
        divWidth: HeroDivWidth;
        textAlign: HeroTextAlign;
        font: FontType;
        fontSize: string; // Tailwind text-size classes
        paragraphAdditionalClassName: string; // Additional paragraph styling classes
        designAdditionalClassName: string; // Additional CSS classes
      };
      box: {
        visible: boolean;
      };
    };
    designAdditionalClassName: string; // Additional CSS classes for main hero
  };
  sub: {
    // imageHeight: "full" | "xs" | "s" | "m" | "l" | "xl" | "2xl";
    imageHeight: string; // Can be fixed
    imageWidthPx: string;
    imageHeightPx: string;
    designAdditionalClassName: string;
  };
}

interface MainDesign {
  width: string; // Tailwind width classes
  position: string; // Tailwind positioning classes like "mx-auto"
  centerText: boolean;
  backgroundColor: string;
  designAdditionalClassName: string;
}

interface SidebarNavDesign {
  backgroundColor: string;
  visible: boolean;
}

interface HeadlineDesign {
  font: FontType;
  fontSize: string; // Tailwind text-size classes
  designAdditionalClassName: string;
}

interface ParagraphDesign {
  font: FontType;
  fontSize: string;
  backgroundColor: string;
  designAdditionalClassName: string;
}

interface FooterDesign {
  backgroundColor: string;
  textColor: string;
  itemsMarginBottom: string;
  designAdditionalClassName: string;
}

interface SocialMediaDesign {
  color: boolean;
  designAdditionalClassName: string;
}

interface DesignStyleConfig {
  id?: number;
  layoutID?: number;
  global?: GlobalDesign;
  button?: ButtonDesign;
  header?: HeaderDesign;
  breadcrumbs?: BreadcrumbsDesign;
  logo?: LogoDesign;
  topNav?: TopNavDesign;
  hero?: HeroDesign;
  main?: MainDesign;
  sidebarNav?: SidebarNavDesign;
  headline1?: HeadlineDesign;
  headline2?: HeadlineDesign;
  headline3?: HeadlineDesign;
  paragraph?: ParagraphDesign;
  footer?: FooterDesign;
  socialMedia?: SocialMediaDesign;
}

// DESIGN CONFIG END

// PAGE DATA START

export interface PageDataProps {
  general: {
    design: {
      designID: number;
      designStyle: DesignStyleConfig[];
    };
    legal: LegalConfig;
    socialMedia: SocialMediaConfig;
    logo: LogoConfig;
    header: HeaderConfig;
    breadcrumbs: BreadcrumbsConfig;
    footer: FooterConfig;
  };
  homePage: HomePageConfig;
  firstLevelPage: FirstLevelPage[];
}

// LEGAL CONFIG START

interface PostalAddress {
  streetName: string;
  streetNumber: string;
  zipCode: string;
  city: string;
  country: string;
}

interface PageId {
  imprint: number;
  dataPrivacy: number;
}

interface GoogleAnalytics {
  id: string;
}

interface LegalConfig {
  entityName: string; // Required
  legalForm: string;
  projectName: string; // Required (appears for example in the cookie - as a cookie name)
  phoneNumber: string;
  eMail: string; // Required
  postalAddress: PostalAddress;
  pageId: PageId; // Required for cookie consent
  googleAnalytics: GoogleAnalytics; // Required
}

// LEGAL CONFIG END

// SOCIAL MEDIA CONFIG START

interface SocialMediaLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  google?: string;
  linkedin?: string;
  github?: string;
}

interface SocialMediaConfig {
  link: SocialMediaLinks;
  elementAdditionalClassName: string;
}

// SOCIAL MEDIA CONFIG END

// LOGO CONFIG START

export type LogoType = "svg" | "png" | "text" | "pngText" | "svgText";

type TextTransform = "lowercase" | "uppercase" | "capitalize" | undefined;

interface TextStyle {
  color: string;
  textTransform: TextTransform;
}

interface LogoText {
  firstPartWording: string;
  firstPartStyle: TextStyle;
  secondPartWording: string;
  secondPartStyle: TextStyle;
}

interface LogoConfig {
  fileName: string;
  fileType: string;
  headerLogoType: LogoType;
  footerLogoType: LogoType;
  width: number;
  height: number;
  alt: string;
  text: LogoText;
  elementAdditionalClassName: string;
}

// LOGO CONFIG END

// HEADER START

interface SubListItem {
  id: number;
  label: string;
  displayOrder: number;
  topNavVisible: boolean;
  url: string;
  footerCategory?: string;
}

interface TopNavExternalItem {
  id: number;
  label: string;
  topNavListId: number;
  displayOrder: number;
  topNavVisible: boolean;
  footerVisible: boolean;
  url: string;
  subList?: SubListItem[]; // Optional sub-list property
}

interface TopNavListItem {
  id: number;
  label: string;
  displayOrder: number;
  topNavVisible: boolean;
  footerVisible: boolean;
  dropdown: boolean;
  url: string | null; // URL can be string or null
}

interface HeaderConfig {
  topNavList: TopNavListItem[];
  topNavExternal: TopNavExternalItem[];
  elementAdditionalClassName: string;
}

// HEADER END

// BREADCRUMBS START

interface BreadcrumbsConfig {
  visible: boolean;
  initialLabel: string;
  elementAdditionalClassName: string;
}

// BREADCRUMBS END

// FOOTER START

interface FooterConfig {
  socialNetworksIntro: string;
  description: string;
  labels: FooterLabels;
  elementAdditionalClassName: string;
}

interface FooterLabels {
  categories: string;
  legal: string;
  contact: string;
  cookies: string;
}

// FOOTER END

// HOMEPAGE START

interface HomePageConfig {
  layout: string;
  metaData: MetaData;
  sidebarNav: SidebarNav;
  centerText: boolean;
  content?: Section[]; // Content is an array of Section objects
}

// HOMEPAGE END

// METADATA START

interface MetaData {
  title: string;
  description: string;
}

// METADATA END

// SIDEBAR START

interface SidebarNav {
  visible: boolean;
}

// SIDEBAR END

// SECTION START

// export interface Section {
//   // type: "section";
//   type: string;
//   id: string;
//   parent: string | null;
//   className: string;
//   children: (Headline | ParagraphGroup)[];
// }

// Headline definition
interface Headline1 {
  type: "headline1";
  className: string;
  text: string;
}

interface Headline2 {
  type: "headline2";
  className: string;
  text: string;
}

// // Define all possible content types
// type ContentType =
//   | "headline1"
//   | "headline2"
//   | "paragraphGroup"
//   | "paragraph"
//   | "text"
//   | "section";

// Text node definition
interface TextNode {
  type: "text";
  text: string;
}

// Section definition (which includes other types)
// interface Section {
//   type: string;
//   id: string;
//   parent: string | null;
//   className: string;
//   children: (Headline1 | Headline2 | ParagraphGroup | Section)[];
// }

interface Section {
  type: string;
  id: string;
  parent: string | null;
  className: string;
  children: any[]; // Use any to accept any structure
}

// Base interface for common properties
interface BaseContent {
  type: string;
  className: string;
}

// Text element
interface TextElement extends BaseContent {
  type: "text";
  text: string;
}

// Bold text element
interface BoldTextElement extends BaseContent {
  type: "bold";
  text: string;
}

// Paragraph element containing other content
interface Paragraph extends BaseContent {
  type: "paragraph";
  children: (TextElement | BoldTextElement)[]; // Can contain text or bold text
}

// Bullet item element containing text or bold
interface BulletItem extends BaseContent {
  type: "bulletItem";
  children: (TextElement | BoldTextElement)[]; // Can contain text or bold text
}

// Bullet list containing bullet items
interface BulletList extends BaseContent {
  type: "bulletList";
  children: BulletItem[]; // Array of bullet items
}

// Paragraph group containing paragraphs or bullet lists
interface ParagraphGroup extends BaseContent {
  type: "paragraphGroup";
  children: (Paragraph | BulletList)[]; // Can contain paragraphs or bullet lists
}

// Headline element (can be headline1 or headline2, etc.)
interface Headline extends BaseContent {
  type: "headline1" | "headline2" | "headline3"; // Extend for more headline types
  text: string;
}

// SECTION END

// CONTENT RENDERER START

// Common properties for all block types
interface BaseBlock {
  id?: string; // Optional, not all types may need an ID
  className?: string; // Optional, for custom classes
  children?: Block[]; // Nested children for sections or complex types
}

// Define specific types for each block type
interface SectionBlock extends BaseBlock {
  type: "section";
}

interface Headline1Block extends BaseBlock {
  type: "headline1";
  text: string; // Headline needs a text property
}

interface Headline2Block extends BaseBlock {
  type: "headline2";
  text: string;
}

interface Headline3Block extends BaseBlock {
  type: "headline3";
  text: string;
}

interface ParagraphBlock extends BaseBlock {
  type: "paragraph";
}

interface ParagraphGroupBlock extends BaseBlock {
  type: "paragraphGroup";
}

interface ImageBlock extends BaseBlock {
  type: "image";
  src: string; // Source of the image
  alt: string; // Alt text for accessibility
}

interface ParagraphImageBlock extends BaseBlock {
  type: "paragraphImage";
}

interface BulletListBlock extends BaseBlock {
  type: "bulletList";
}

interface VideoBlock extends BaseBlock {
  type: "video";
}

// Union type for all block types
export type Block =
  | SectionBlock
  | Headline1Block
  | Headline2Block
  | Headline3Block
  | ParagraphBlock
  | ParagraphGroupBlock
  | ImageBlock
  | ParagraphImageBlock
  | BulletListBlock
  | VideoBlock;

// CONTENT RENDERER END

// CHECKED

// HEADLINE START

// interface Headline {
//   // type: "headline1" | "headline2" | "headline3"; // Extend for other headline types
//   type: string;
//   className: string;
//   text: string;
// }

// HEADLINE END

// Define the interface for the text content
// interface TextContent {
//   type: "text";
//   text: string;
// }

// Define the interface for a paragraph, which contains an array of text content
// interface Paragraph {
//   type: "paragraph";
//   className: string;
//   children: TextContent[];
// }

// // Define the interface for a paragraph group, which contains an array of paragraphs
// interface ParagraphGroup {
//   type: "paragraphGroup";
//   className: string;
//   /*   children: Paragraph[]; */
//   children: { type: string; className: string; text: string }[]; // An array of paragraphs
// }

// Define the interface for a headline
// interface Headline {
//   type: "headline1" | "headline2" | "headline3"; // You can add other headline types if necessary
//   className: string;
//   text: string;
//   children?: never; // No children for headlines
// }

// Define the interface for the content array, which consists of sections
// interface ContentItem {
//   type: string; // General type of content
//   id?: string; // Optional ID
//   parent?: string | null; // Optional parent ID
//   className: string;
//   text?: string; // Optional text property
//   children?: ContentItem[]; // Optional array of children
// }

// Define the interface for the first level page
export interface FirstLevelPage {
  id: number;
  url: string;
  navLabel?: string;
  topNavListId: number | null; // Accept null or number
  displayOrder: number | null; // Accept null if applicable
  topNavVisible: boolean;
  footerVisible: boolean;
  layout: string;
  sidebarNav: SidebarNav;
  centerText: boolean;
  metaData: MetaData;
  content?: Section[];
  secondLevelPage?: SecondLevelPage[]; // Array of second level pages
  footerCategory?: string;
  params?: {
    firstLevelPage: string;
    secondLevelPage: string;
  };
}

// Define the interface for the second level page
export interface SecondLevelPage {
  id: number;
  url: string;
  navLabel?: string;
  topNavVisible: boolean;
  displayOrder: number;
  layout?: string;
  sidebarNav?: SidebarNav;
  centerText?: boolean;
  metaData?: MetaData;
  content?: Section[]; // Optional content for the second level page
  params?: {
    firstLevelPage: string;
    secondLevelPage: string;
  };
  currentSecondLevelPage?: any;
}

// interface LogoTypeTextProps {
//   firstPartWording: string;
//   firstPartStyle?: CSSProperties | undefined;
//   secondPartWording: string;
//   secondPartStyle?: CSSProperties | undefined;
// }

// export interface LogoProps {
//   fileName: string;
//   fileType: string;
//   headerLogoType: LogoType;
//   footerLogoType: LogoType;
//   width: number;
//   height: number;
//   alt?: string;
//   text?: LogoTypeTextProps;
//   logoClassName?: string;
// }

// export interface MetaDataProps {
//   title: string;
//   description: string;
//   openGraph?: {
//     images?: { url: string }[];
//   };
// }

// export interface FirstLevelPageProps {
//   id: number;
//   url: string | null;
//   navLabel: string;
//   topNavListId: number;
//   secondLevelPage?: SecondLevelPageProps[];
//   displayOrder: number;
//   topNavVisible: boolean;
//   footerVisible: boolean;
//   layout: string;
//   metaData: MetaDataProps;
//   params?: {
//     firstLevelPage?: string;
//   };
//   children?: React.ReactNode;
// }

// export interface SecondLevelPageProps {
//   id: number;
//   url: string | null;
//   navLabel: string;
//   displayOrder: number;
//   topNavVisible: boolean;
//   params?: {
//     firstLevelPage: string;
//     secondLevelPage: string;
//   };
//   currentSecondLevelPage?: any;
//   children?: React.ReactNode;
// }

// export interface SubListProps {
//   id: number;
//   url: string | null;
//   label: string;
//   displayOrder: number;
//   topNavVisible: boolean;
// }
/* 
export interface TopNavCategoryProps {
  id: number;
  label: string;
  displayOrder: number;
  topNavVisible: boolean;
  footerVisible: boolean;
  dropdown: boolean;
  url: string | null;
} */

/* export interface TopNavExternalProps {
  id: number;
  label: string;
  topNavListId: number;
  url: string | null;
  displayOrder: number;
  subList?: SubListProps[];
  topNavVisible: boolean;
  footerVisible: boolean;
} */

export interface Headline1Props {
  children: React.ReactNode;
  headline1ClassName?: string;
  additionalClassName?: string;
}

export interface Headline2Props {
  children: React.ReactNode;
  headline2ClassName?: string;
  additionalClassName?: string;
}

export interface Headline3Props {
  children: React.ReactNode;
  headline3ClassName?: string;
  additionalClassName?: string;
}

export interface ParagraphProps {
  children: React.ReactNode;
  paragraphClassName?: string;
}

export interface ContentRendererParams {
  firstLevelPage?: string;
  secondLevelPage?: string;
}
