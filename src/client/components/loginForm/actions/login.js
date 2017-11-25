import { post } from 'axios';

export const login = ({ username, password }, actions) => effects =>
  post('https://jsonplaceholder.typicode.com/post', { username, password })
    .then(effects.setUser)
    .catch(actions.setError);
