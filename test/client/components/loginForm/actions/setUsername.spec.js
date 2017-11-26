import { expect } from 'chai';
import { setUsername } from '../../../../../src/client/components/loginForm/actions/setUsername';

describe('client.components.loginForm.actions.setUsername', () => {
  let state;

  beforeEach(() => {
    state = {
      username: null,
      something: 'else'
    };
  });

  it('should set the username', () => {
    const result = setUsername(state)('test');
    expect(result).to.deep.equal({
      username: 'test',
      something: 'else'
    });
  });
});
