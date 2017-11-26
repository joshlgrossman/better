import { expect } from 'chai';
import { setLocation } from '../../../src/client/actions/setLocation';

describe('client.actions.setLocation', () => {
  let state;

  beforeEach(() => {
    state = {
      location: 'a',
      something: 'else'
    };
  });

  it('should set the location', () => {
    const result = setLocation(state)('b');
    expect(result).to.deep.equal({
      location: 'b',
      something: 'else'
    });
  });
});
