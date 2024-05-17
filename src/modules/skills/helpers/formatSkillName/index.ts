import { capitalize } from "../../../../helpers/capitalize";

export const formatSkillName = (name: string) =>
  capitalize(name.replace(/([A-Z])/g, " $1"));
