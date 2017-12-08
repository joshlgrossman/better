import { validateForm } from '../../../utils';

export const validate = validateForm({
  username: {
    check: (value, data) => value && value.length > 3,
    message: 'username must be more than 3 characters'
  },
  password: {
    check: value => value && value.length > 6,
    message: 'password must be more than 6 characters'
  }
});
