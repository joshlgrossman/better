import { expect } from 'chai';
import { setUser } from '../../../src/client/actions';

describe('client.actions.setUser', () => {
  let state;

  beforeEach(() => {
    state = {
      user: null,
      something: 'else'
    };
  });

  it('should set the user', () => {
    const result = setUser('test')(state);
    expect(result).to.deep.equal({
      user: 'test',
      something: 'else'
    });
  });
});
