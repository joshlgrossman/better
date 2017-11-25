import { expect } from 'chai';

import { setUser } from '../../../client/actions/setUser';

describe('client.actions.setUser', () => {
  let state;

  beforeEach(() => {
    state = {
      user: null,
      something: 'else'
    };
  });

  it('should set the user', () => {
    const result = setUser(state)('test');
    expect(result).to.deep.equal({
      user: 'test',
      something: 'else'
    });
  });
});
