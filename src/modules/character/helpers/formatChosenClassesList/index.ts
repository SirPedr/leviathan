export const formatChosenClassesList = (classes: string[]) =>
  new Intl.ListFormat("en-US", {
    type: "conjunction",
    style: "long",
  }).format(classes);
