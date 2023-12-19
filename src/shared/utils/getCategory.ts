export const getCategory = (namespace: string) => {
  if (namespace.includes("pad")) {
    return "tablets";
  }
  if (namespace.includes("watch")) {
    return "accessories";
  }

  return "phones";
};
