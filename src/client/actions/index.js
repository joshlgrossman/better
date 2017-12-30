import * as components from '../components';

import { setUser } from './setUser';
import { setLocation } from './setLocation';
import { saveState } from './saveState';
import { loadState } from './loadState';

export * from './setUser';
export * from './setLocation';
export * from './saveState';
export * from './loadState';

export const actions = {
  setUser,
  setLocation,
  saveState,
  loadState,
  ...Object.keys(components)
    .map(key => ({ [key]: components[key].actions }))
    .reduce((result, component) => ({ ...result, ...component }), {})
};
