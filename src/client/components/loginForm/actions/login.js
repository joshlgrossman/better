import { post } from 'axios';

export const login = ({ username, password }, { setError }) => ({ setUser, setLocation }) =>
  post('https://jsonplaceholder.typicode.com/post', { username, password })
    .then(setUser)
    .then(() => setLocation('app'))
    .catch(setError);
