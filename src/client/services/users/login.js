import { post, defaults } from 'axios';

export function login({ username, password }) {
  return post(`/users/${username}`, { password }).then(({ data }) => {
    defaults.headers.common.authorization = data.token;

    return data;
  });
}
