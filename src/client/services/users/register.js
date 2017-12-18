import { post, defaults } from 'axios';

export function register({ username, password }) {
  return post('/users/new', { username, password }).then(({ data }) => {
    defaults.headers.common.authorization = data.token;

    return data;
  });
}
