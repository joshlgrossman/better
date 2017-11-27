import { post } from 'axios';

export function loginUser({ username, password }) {
  // return post('https://jsonplaceholder.typicode.com/post', { username, password });
  return Promise.resolve({
    name: username,
    credits: 10,
    messages: [
      {
        from: 'Someone',
        to: username,
        body: 'hello'
      },
      {
        from: username,
        to: 'Jarrod',
        body: 'what do you think so far?'
      }
    ]
  });
}
