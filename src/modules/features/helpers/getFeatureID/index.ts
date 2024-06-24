import slugify from "slugify";

export const getFeatureID = (featureName: string) =>
  slugify(featureName, {
    lower: true,
    replacement: "_",
    remove: /[()']/g,
  });
