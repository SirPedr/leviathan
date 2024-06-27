const parser = new DOMParser();

export const cleanDirtyText = (text: string) =>
  parser
    .parseFromString(text, "text/html")
    .body.textContent?.replace(/[\n\t]/g, "") ?? "";
