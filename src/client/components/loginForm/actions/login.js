import { post } from 'axios';

export const login = ({ username, password }, { setError }) => setUser =>
  post('https://jsonplaceholder.typicode.com/post', { username, password })
    .then(setUser)
    .catch(setError);
