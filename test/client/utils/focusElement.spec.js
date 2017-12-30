import { expect, use } from 'chai';
import { stub } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { focusElement } from '../../../src/client/utils';

use(sinonChai);

describe('client.utils.focusElement', () => {

  it('should focus the element', () => {
    const element = { focus: stub() };
    focusElement(element);
    expect(element.focus).to.have.been.calledOnce;
  });
  
});