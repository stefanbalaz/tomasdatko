import { notFound } from "next/navigation";
import { Metadata } from "next";
import { pageData } from "@/data/pageData";
import { FirstLevelPage as FirstLevelPageProps } from "@/app/types";

export async function generateStaticParams() {
  return pageData.firstLevelPage.map((page) => ({
    firstLevelPage: page.url,
  }));
}

export async function generateMetadata({
  params,
}: FirstLevelPageProps): Promise<Metadata> {
  if (!params) {
    throw new Error("Params is undefined");
  }

  const { firstLevelPage: slug } = params;

  const currentPage = pageData.firstLevelPage.find((page) => page.url === slug);

  if (!currentPage) {
    notFound();
  }

  return {
    title: currentPage.metaData.title,
    description: currentPage.metaData.description,
    /* openGraph: {
      images: [
        {
          url:  || "",
        },
      ],
    }, */
  };
}

export default function Layout({ children }: any): JSX.Element {
  return <>{children}</>;
}
