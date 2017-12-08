import { expect } from 'chai';
import { toggleRegister } from '../../../../../src/client/components/loginForm/actions';

describe('client.components.loginForm.actions.toggleRegister', () => {
  let state;

  beforeEach(() => {
    state = {
      something: 'else'
    };
  });

  describe('when register is false', () => {
    it('should set register to true', () => {
      state.isRegister = false;
      const result = toggleRegister(state);
      expect(result).to.deep.equal({
        isRegister: true,
        something: 'else'
      });
    });
  });

  describe('when register is true', () => {
    it('should set register to false', () => {
      state.isRegister = true;
      const result = toggleRegister(state);
      expect(result).to.deep.equal({
        isRegister: false,
        something: 'else'
      });
    });
  });
});
