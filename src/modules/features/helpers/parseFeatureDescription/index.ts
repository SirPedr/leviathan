const parser = new DOMParser();

export const parseFeatureDescription = (description: string) =>
  parser
    .parseFromString(description, "text/html")
    .body.textContent?.replace(/[\n\t]/g, "") ?? "";
