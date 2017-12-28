import { expect } from 'chai';
import { setError } from '../../../../../src/client/components/loginForm/actions';

describe('client.components.loginForm.actions.setError', () => {
  let state;

  beforeEach(() => {
    state = {
      errors: [],
      something: 'else'
    };
  });

  it('should set the error', () => {
    const result = setError('test')(state);
    expect(result).to.deep.equal({
      errors: ['test'],
      something: 'else'
    });
  });
});
