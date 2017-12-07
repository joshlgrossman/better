import { expect } from 'chai';
import * as moxios from 'moxios';
import { register } from '../../../../src/client/services';

describe('client.services.users.register', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  
  describe('when registering', () => {
    it('should compose the correct request', done => {
      const data = { username: 'hello', password: 'world' };
      register(data);
      
      moxios.wait(() => {
        const req = moxios.requests.mostRecent();
        
        expect(req.config.url).to.equal('/users/new');
        expect(JSON.parse(req.config.data)).to.deep.equal(data);

        done();
      })
    });
  });

});