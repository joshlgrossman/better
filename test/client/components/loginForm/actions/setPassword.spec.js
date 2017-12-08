import { expect, use } from 'chai';
import { stub } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { setPassword } from '../../../../../src/client/components/loginForm/actions/setPassword';

use(sinonChai);

describe('client.components.loginForm.actions.setPassword', () => {
  let state;
  let actions;

  beforeEach(() => {
    actions = {
      validate: stub().returnsArg(0)
    };

    state = {
      data: {
        password: null
      },
      something: 'else'
    };
  });

  it('should set the password', () => {
    const result = setPassword(state, actions)('test');
    expect(result).to.deep.equal({
      data: {
        password: 'test'
      },
      something: 'else'
    });
  });
});
