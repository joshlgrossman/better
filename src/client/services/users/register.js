import { post } from 'axios';

export function register({ username, password }) {
  return post('/users/new', { username, password })
    .then(response => response.data);
}
