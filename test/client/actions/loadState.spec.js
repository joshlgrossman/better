import { expect, use } from 'chai';
import { stub } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { cloneDeep } from 'lodash';
import { loadState } from '../../../src/client/actions';

use(sinonChai);

describe('client.actions.loadState', () => {
  let state;
  let getItem;
  let parse;
  let previousWindow;

  beforeEach(() => {
    getItem = stub();
    parse = stub();
    previousWindow = cloneDeep(global.window);
    global.window = {
      localStorage: { getItem },
      JSON: { parse }
    };
    state = {
      test: 'state'
    };
  });

  afterEach(() => {
    global.window = previousWindow;
  });
  
  it('should get the state', () => {
    loadState()(state);
    expect(getItem).to.have.been.calledWith('state');
  });

  it('should parse the state', () => {
    getItem.callsFake(() => 'result');
    loadState()(state);
    expect(parse).to.have.been.calledWith('result');
  });

  describe('when the state is valid', () => {
    it('should return the parsed state', () => {
      getItem.callsFake(() => 'state');
      parse.callsFake(() => 'result');
      const result = loadState()(state);
      expect(result).to.equal('result');
    });
  });

  describe('when the state is invalid', () => {
    it('should return the current state', () => {
      getItem.callsFake(() => 'state');
      parse.throws('error');
      const result = loadState()(state);
      expect(result).to.equal(state);
    });
  });

  describe('when the state doesnt exist', () => {
    it('should return the current state', () => {
      getItem.callsFake(() => null);
      parse.callsFake(() => 'result');
      const result = loadState()(state);
      expect(result).to.equal(state);
    });
  });
});
