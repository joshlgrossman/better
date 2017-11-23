export const setLocation = state => location => {
  window.history.pushState({}, '', location);
  return { ...state, location };
};
