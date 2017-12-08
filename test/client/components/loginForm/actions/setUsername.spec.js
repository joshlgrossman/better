import { expect } from 'chai';
import { setUsername } from '../../../../../src/client/components/loginForm/actions/setUsername';

describe('client.components.loginForm.actions.setUsername', () => {
  let state;

  beforeEach(() => {
    state = {
      data: {
        username: null
      },
      something: 'else'
    };
  });

  it('should set the username', () => {
    const result = setUsername(state, { validateForm: a => a })('test');
    expect(result).to.deep.equal({
      data: {
        username: 'test'
      },
      something: 'else'
    });
  });
});
