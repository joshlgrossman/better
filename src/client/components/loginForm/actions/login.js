import { loginUser } from '../../../utils/loginUser';

export const login = ({ username, password }, actions) => effects =>
  loginUser({ username, password })
    .then(effects.setUser)
    .then(() => effects.setLocation('home'))
    .catch(actions.setError);
