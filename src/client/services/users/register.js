import { post } from 'axios';

export function register({ username, password }) {
  return post(`/users`, { username, password }).then(response => response.data);
}
