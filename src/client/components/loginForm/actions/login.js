import * as users from '../../../services/users';

export const login = effects => ({ data: { username, password }, isRegister }, actions) =>
  (isRegister ? users.register({ username, password }) : users.login({ username, password }))
    .then(effects.setUser)
    .then(() => effects.setLocation('home'))
    .catch(actions.setError);
