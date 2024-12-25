import { notFound } from "next/navigation";
import { Metadata } from "next";
import { pageData } from "@/data/pageData";
import SecondLevelPage from "./page";
import { SecondLevelPage as SecondLevelPageProps } from "@/app/types";

export async function generateStaticParams() {
  const staticParams = [];
  for (const firstLevelPage of pageData.firstLevelPage) {
    if (firstLevelPage.secondLevelPage) {
      staticParams.push(
        ...firstLevelPage.secondLevelPage.map((secondLevelPage) => ({
          firstLevelPage: firstLevelPage.url,
          secondLevelPage: secondLevelPage.url,
        }))
      );
    }
  }
  return staticParams;
}

export async function generateMetadata({
  params,
}: // }: SecondLevelPageProps): Promise<Metadata> {
any): Promise<any> {
  const {
    firstLevelPage: firstLevelPageSlug,
    secondLevelPage: secondLevelPageSlug,
  } = params!;
  const firstLevelPageData = pageData.firstLevelPage.find(
    (page) => page.url === firstLevelPageSlug
  );
  if (!firstLevelPageData) {
    notFound();
  }
  const currentSecondLevelPage = firstLevelPageData.secondLevelPage?.find(
    (page) => page.url === secondLevelPageSlug
  );
  if (!currentSecondLevelPage) {
    notFound();
  }
  return {
    title: currentSecondLevelPage.metaData.title,
    description: currentSecondLevelPage.metaData.description,
    /*   openGraph: {
      images: [
        {
          url: currentSecondLevelPage?.heroProps?.backgroundImage
            ? currentSecondLevelPage?.heroProps?.buttonLink
            : "",
        },
      ],
    }, */
  };
}

export default function Layout({ params }: any): any {
  const {
    firstLevelPage: firstLevelPageSlug,
    secondLevelPage: secondLevelPageSlug,
  } = params!;
  const firstLevelPageData = pageData.firstLevelPage.find(
    (page) => page.url === firstLevelPageSlug
  );
  if (!firstLevelPageData) {
    notFound();
  }
  const currentSecondLevelPage = firstLevelPageData.secondLevelPage?.find(
    (page) => page.url === secondLevelPageSlug
  );
  if (!currentSecondLevelPage) {
    notFound();
  }

  return (
    /*   <SecondLevelPage
      currentSecondLevelPage={currentSecondLevelPage}
    ></SecondLevelPage> */
    <SecondLevelPage
      id={currentSecondLevelPage.id}
      url={currentSecondLevelPage.url}
      navLabel={currentSecondLevelPage.navLabel}
      displayOrder={currentSecondLevelPage.displayOrder}
      topNavVisible={currentSecondLevelPage.topNavVisible}
      currentSecondLevelPage={currentSecondLevelPage}
    ></SecondLevelPage>
  );
}
