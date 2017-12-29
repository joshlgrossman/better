import { expect, use } from 'chai';
import { stub } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { cloneDeep } from 'lodash';
import { saveState } from '../../../src/client/actions';

use(sinonChai);

describe('client.actions.saveState', () => {
  let state;
  let setItem;
  let stringify;
  let previousWindow;

  beforeEach(() => {
    setItem = stub();
    stringify = stub();
    previousWindow = cloneDeep(global.window);
    global.window = {
      localStorage: { setItem },
      JSON: { stringify }
    };
    state = {
      test: 'state'
    };
  });

  afterEach(() => {
    global.window = previousWindow;
  });
  
  it('should stringify the state', () => {
    saveState()(state);
    expect(stringify).to.have.been.calledWith(state);
  });

  it('should save the state', () => {
    stringify.callsFake(() => 'result');
    saveState()(state);
    expect(setItem).to.have.been.calledWith('state', 'result');   
  });
});
