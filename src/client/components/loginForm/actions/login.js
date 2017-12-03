import * as users from '../../../services/users';

export const login = ({ username, password, isRegister }, actions) => effects =>
  (isRegister ? users.register({ username, password }) : users.login({ username, password }))
    .then(effects.setUser)
    .then(() => effects.setLocation('home'))
    .catch(actions.setError);
