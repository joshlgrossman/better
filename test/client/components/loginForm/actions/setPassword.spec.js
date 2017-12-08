import { expect } from 'chai';
import { setPassword } from '../../../../../src/client/components/loginForm/actions/setPassword';

describe('client.components.loginForm.actions.setPassword', () => {
  let state;

  beforeEach(() => {
    state = {
      data: {
        password: null
      },
      something: 'else'
    };
  });

  it('should set the password', () => {
    const result = setPassword(state, { validateForm: a => a })('test');
    expect(result).to.deep.equal({
      data: {
        password: 'test'
      },
      something: 'else'
    });
  });
});
