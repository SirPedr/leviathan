export const sortAlphabetically = (first: string, second: string) => {
  if (first < second) {
    return -1;
  }

  if (first > second) {
    return 1;
  }

  return 0;
};
