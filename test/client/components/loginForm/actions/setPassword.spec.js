import { expect } from 'chai';
import { setPassword } from '../../../../../src/client/components/loginForm/actions/setPassword';

describe('client.components.loginForm.actions.setPassword', () => {
  let state;

  beforeEach(() => {
    state = {
      password: null,
      something: 'else'
    };
  });

  it('should set the password', () => {
    const result = setPassword(state)('test');
    expect(result).to.deep.equal({
      password: 'test',
      something: 'else'
    });
  });
});
