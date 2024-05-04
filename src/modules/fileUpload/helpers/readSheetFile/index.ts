export const readSheetFile = (sheet: File) =>
  new Promise((resolve) => {
    const fileReader = new FileReader();

    fileReader.readAsText(sheet);

    fileReader.addEventListener("load", () => {
      const sheetContent = fileReader.result?.toString() ?? "";
      resolve(JSON.parse(sheetContent));
    });
  });
