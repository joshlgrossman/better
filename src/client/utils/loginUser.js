import { post } from 'axios';

export function loginUser({ username, password }) {
  // return post('https://jsonplaceholder.typicode.com/post', { username, password });
  return Promise.resolve({ name: 'Josh' });
}
