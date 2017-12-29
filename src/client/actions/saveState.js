export const saveState = () => state => window.localStorage.setItem('state', window.JSON.stringify(state));
