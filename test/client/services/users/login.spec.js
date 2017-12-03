import { expect } from 'chai';
import * as moxios from 'moxios';
import { login } from '../../../../src/client/services';

describe('client.services.users.login', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  
  describe('when logging in', () => {
    it('should compose the correct request', done => {
      const data = { username: 'hello', password: 'world' };
      login(data);
      
      moxios.wait(() => {
        const req = moxios.requests.mostRecent();
        
        expect(req.config.url).to.equal('/users/hello');
        expect(JSON.parse(req.config.data).password).to.equal('world');

        done();
      })
    });
  });

});