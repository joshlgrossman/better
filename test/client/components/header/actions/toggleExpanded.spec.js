import { expect } from 'chai';
import { toggleExpanded } from '../../../../../src/client/components/header/actions';

describe('client.components.header.actions.toggleExpanded', () => {
  let state;

  beforeEach(() => {
    state = {
      something: 'else'
    };
  });

  describe('when expanded is false', () => {
    it('should set expanded to true', () => {
      state.isExpanded = false;
      const result = toggleExpanded(state);
      expect(result).to.deep.equal({
        isExpanded: true,
        something: 'else'
      });
    });
  });

  describe('when expanded is true', () => {
    it('should set expanded to false', () => {
      state.isExpanded = true;
      const result = toggleExpanded(state);
      expect(result).to.deep.equal({
        isExpanded: false,
        something: 'else'
      });
    });
  });
});
