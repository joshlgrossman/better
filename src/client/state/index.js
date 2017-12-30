import * as components from '../components';

import * as user from './user';

export const state = {
  location: 'login',
  user,
  ...Object.keys(components)
    .map(key => ({ [key]: components[key].state }))
    .reduce((result, component) => ({ ...result, ...component }), {})
};
