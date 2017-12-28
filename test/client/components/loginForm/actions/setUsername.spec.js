import { expect, use } from 'chai';
import { stub } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { setUsername } from '../../../../../src/client/components/loginForm/actions';

use(sinonChai);

describe('client.components.loginForm.actions.setUsername', () => {
  let state;
  let actions;

  beforeEach(() => {
    actions = {
      validate: stub().returnsArg(0)
    };

    state = {
      data: {
        username: null
      },
      something: 'else'
    };
  });

  it('should set the username', () => {
    const result = setUsername('test')(state, actions);
    expect(result).to.deep.equal({
      data: {
        username: 'test'
      },
      something: 'else'
    });
  });
});
