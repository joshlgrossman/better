export const loadState = () => state => {
  const savedState = window.localStorage.getItem('state');

  try {
    if (savedState) return window.JSON.parse(savedState);
  } catch {}

  return state;
};
