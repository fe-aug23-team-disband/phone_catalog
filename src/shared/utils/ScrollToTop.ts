export const scrollToTop = (behavior?: ScrollBehavior) => {
  window.scrollTo({ top: 0, behavior: behavior });
};
