import { SecondLevelPage as SecondLevelPageProps } from "@/app/types";
import { PageDataProps } from "@/app/types";

export function constructNavItems(data: PageDataProps) {
  const { general, firstLevelPage } = data;

  // Create a map to organize secondLevelPages by their parent firstLevelPage ID
  const secondLevelPagesMap: Record<number, SecondLevelPageProps[]> = {};

  // Sort topNavList based on displayOrder
  const sortedTopNavList = general.header.topNavList
    .filter((category) => category.topNavVisible)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  // Sort topNavExternal based on displayOrder
  const sortedTopNavExternal = general.header.topNavExternal
    .filter((external) => external.topNavVisible)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  firstLevelPage.forEach((page) => {
    if (page.secondLevelPage) {
      // Filter secondLevelPages based on topNavVisible
      const filteredSecondLevelPages = page.secondLevelPage
        .filter((secondLevel) => secondLevel.topNavVisible)
        .sort((a, b) => a.displayOrder - b.displayOrder);

      secondLevelPagesMap[page.id] = filteredSecondLevelPages;
    }
  });

  //  console.log("firstLevelPage data:", firstLevelPage);

  //  console.log("secondLevelPagesMap:", secondLevelPagesMap);

  // Create the final navigation array
  const navigationArray = sortedTopNavList.map((category) => {
    // Get first level pages that match the current category ID
    const categoryFirstLevelPages = firstLevelPage
      .filter((page) => page.topNavListId === category.id && page.topNavVisible)
      .map((page) => ({
        id: page.id,
        displayOrder: page.displayOrder,
        label: page.navLabel,
        url: page.url,
        secondLevelPages: secondLevelPagesMap[page.id] || [],
      }));

    // Include external links in the first level pages
    const categoryExternalLinks = sortedTopNavExternal
      .filter((ext) => ext.topNavListId === category.id)
      .map((ext) => ({
        id: ext.id,
        displayOrder: ext.displayOrder,
        label: ext.label,
        url: ext.url,
        secondLevelPages: ext.subList
          ? ext.subList
              .filter((sub) => sub.topNavVisible)
              .sort((subA, subB) => subA.displayOrder - subB.displayOrder)
              .map((sub) => ({
                id: sub.id,
                displayOrder: sub.displayOrder,
                navLabel: sub.label,
                url: sub.url,
              }))
          : [],
      }));

    const combinedFirstLevelPages = [
      ...categoryFirstLevelPages,
      ...categoryExternalLinks,
    ].sort((a, b) => a.id - b.id);

    // Initialize incrementing ID counter
    let increment = 1;
    // Assign new IDs starting from 1
    let idCounterFirstLevelPages = increment;
    let idCounterSecondLevelPages = increment;
    const finalFirstLevelPages = combinedFirstLevelPages.map((item) => {
      return {
        ...item,
        id: idCounterFirstLevelPages++,
        secondLevelPages: item.secondLevelPages.map((subItem) => ({
          ...subItem,
          id: idCounterSecondLevelPages++,
        })),
      };
    });

    return {
      id: category.id,
      displayOrder: category.displayOrder,
      label: category.label,
      firstLevelPages: finalFirstLevelPages,
      dropdown: category.dropdown,
      url: category.url,
    };
  });

  // console.log("ConstructNavItems Result", navigationArray);
  return navigationArray;
}
