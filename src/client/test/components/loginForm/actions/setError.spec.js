import { expect } from 'chai';
import { setError } from '../../../../components/loginForm/actions/setError';

describe('client.components.loginForm.actions.setError', () => {
  let state;

  beforeEach(() => {
    state = {
      error: null,
      something: 'else'
    };
  });

  it('should set the error', () => {
    const result = setError(state)('test');
    expect(result).to.deep.equal({
      error: 'test',
      something: 'else'
    });
  });
});
