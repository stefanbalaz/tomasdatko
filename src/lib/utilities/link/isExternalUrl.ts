// Utility function to check if the URL is external
export const isExternalUrl = (url: string) =>
  /^(http:\/\/|https:\/\/|www\.)/.test(url);
