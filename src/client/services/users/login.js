import { post } from 'axios';

export function login({ username, password }) {
  return post(`/users/${username}`, { password });
}
