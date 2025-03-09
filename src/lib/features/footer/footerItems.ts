/* import { PageDataProps } from "@/app/types";

export function constructFooterItems(pageData: PageDataProps) {
  // Helper function to map items with a given footer visibility flag
  const filterFooterVisible = (items: any[], visibleFlag: string) =>
    items
      .filter((item) => item[visibleFlag])
      .map(({ id, label, url = "" }) => ({ id, label, url }));

  // Extract topNavList with footerVisible: true
  const topNavListFooterVisible = filterFooterVisible(
    pageData.general.header.topNavList,
    "footerVisible"
  );

  //footerCategory

  // Extract firstLevelPage with footerVisible: true
  const firstLevelPageFooterVisible = pageData.firstLevelPage
    .filter((page) => page.footerVisible)
    .map(({ id, navLabel: label, url = "" }) => ({ id, label, url }));

  // Extract topNavExternal with footerVisible: true
  const topNavExternalFooterVisible = pageData.general.header.topNavExternal
    .filter((item) => item.footerVisible)
    .flatMap((item) => [
      { id: item.id, label: item.label, url: item.url ?? "" },
      ...(item.subList || [])
        .filter((subItem) => subItem.topNavVisible)
        .map(({ id, label, url = "" }) => ({ id, label, url })),
    ]);

  // Combine all results into one array
  const combinedArray = [
    ...topNavListFooterVisible,
    ...firstLevelPageFooterVisible,
    ...topNavExternalFooterVisible,
  ];

  // Function to update IDs incrementally from 1
  const updateIds = (items: any[]) =>
    items.map((item, index) => ({ ...item, id: index + 1 }));

  // Updated array with incremental IDs
  const updatedArray = updateIds(combinedArray);

  //   console.log("updatedArray", updatedArray);
  return updatedArray;
}
 */

// import { PageDataProps } from "@/app/types";

// export function constructFooterItems(pageData: PageDataProps) {
//   // Helper function to map items with a given footer visibility flag
//   const filterFooterVisible = (
//     items: any[],
//     visibleFlag: string,
//     footerCategory: string
//   ) =>
//     items
//       .filter((item) => item[visibleFlag])
//       .map(({ id, label, url = "" }) => ({ id, label, url, footerCategory }));

//   // Extract topNavList with footerVisible: true
//   const topNavListFooterVisible = filterFooterVisible(
//     pageData.general.header.topNavList,
//     "footerVisible",
//     "topNavList" // Assigning a category, change as needed
//   );

// /*   console.log("topNavListFooterVisible", topNavListFooterVisible); */

//   // Extract firstLevelPage with footerVisible: true
//   const firstLevelPageFooterVisible =
//     pageData.firstLevelPage
//       ?.filter((page) => page.footerVisible)
//       .map(({ id, navLabel: label, url = "" }) => ({
//         id,
//         label,
//         url,
//         footerCategory: "firstLevelPage" || "legal",
//       })) ?? [];

// /*   console.log("firstLevelPageFooterVisible", firstLevelPageFooterVisible); */

//   // Extract topNavExternal with footerVisible: true
//   const topNavExternalFooterVisible = pageData.general.header.topNavExternal
//     .filter((item) => item.footerVisible)
//     .flatMap((item) => [
//       {
//         id: item.id,
//         label: item.label,
//         url: item.url ?? "",
//         footerCategory: "topNavExternal",
//       }, // Main item
//       ...(item.subList || [])
//         .filter((subItem) => subItem.topNavVisible)
//         .map(
//           ({ id, label, url = "", footerCategory = "topNavExternalSub" }) => ({
//             id,
//             label,
//             url,
//             footerCategory,
//           })
//         ), // Sub items
//     ]);

// /*   console.log("topNavExternalFooterVisible", topNavExternalFooterVisible); */

//   // Combine all results into one array
//   const combinedArray = [
//     ...topNavListFooterVisible,
//     ...firstLevelPageFooterVisible,
//     ...topNavExternalFooterVisible,
//   ];

// /*   console.log("combinedArray", combinedArray); */

//   // Function to update IDs incrementally from 1
//   const updateIds = (items: any[]) =>
//     items.map((item, index) => ({ ...item, id: index + 1 }));

//   // Updated array with incremental IDs
//   const updatedArray = updateIds(combinedArray);

//   //   console.log("updatedArray", updatedArray);
//   return updatedArray;
// }

import { PageDataProps } from "@/app/types";

export function constructFooterItems(pageData: PageDataProps) {
  // Helper function to map items with a given footer visibility flag
  const filterFooterVisible = (
    items: any[],
    visibleFlag: string,
    footerCategory: string
  ) =>
    items
      .filter((item) => item[visibleFlag])
      .map(({ id, label, url = "" }) => ({ id, label, url, footerCategory }));

  // Extract topNavList with footerVisible: true
  const topNavListFooterVisible = filterFooterVisible(
    pageData.general.header.topNavList,
    "footerVisible",
    "topNavList" // Assigning a category, change as needed
  );

  // Extract firstLevelPage with footerVisible: true
  const firstLevelPageFooterVisible =
    pageData.firstLevelPage
      ?.filter((page) => page.footerVisible)
      .map(({ id, navLabel: label, url = "", footerCategory }) => ({
        id,
        label,
        url,
        footerCategory,
      })) ?? [];

  // Extract topNavExternal with footerVisible: true
  const topNavExternalFooterVisible = pageData.general.header.topNavExternal
    .filter((item) => item.footerVisible)
    .flatMap((item) => [
      {
        id: item.id,
        label: item.label,
        url: item.url ?? "",
        footerCategory: "topNavExternal",
      }, // Main item
      ...(item.subList || [])
        .filter((subItem) => subItem.topNavVisible)
        .map(
          ({ id, label, url = "", footerCategory = "topNavExternalSub" }) => ({
            id,
            label,
            url,
            footerCategory,
          })
        ), // Sub items
    ]);

  // Combine all results into one array
  const combinedArray = [
    ...topNavListFooterVisible,
    ...firstLevelPageFooterVisible,
    ...topNavExternalFooterVisible,
  ];

  // Function to update IDs incrementally from 1
  const updateIds = (items: any[]) =>
    items.map((item, index) => ({ ...item, id: index + 1 }));

  // Updated array with incremental IDs
  const updatedArray = updateIds(combinedArray);

  //   console.log("updatedArray", updatedArray);
  return updatedArray;
}
