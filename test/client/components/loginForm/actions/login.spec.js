import { expect, use } from 'chai';
import { stub, match } from 'sinon';
import * as moxios from 'moxios';
import * as sinonChai from 'sinon-chai';
import { login } from '../../../../../src/client/components/loginForm/actions/index';

use(sinonChai);

describe('client.components.loginForm.actions.login', () => {
  let actions;
  let effects;

  beforeEach(() => {
    actions = {
      setError: stub()
    };
    effects = {
      setUser: stub(),
      setLocation: stub()
    };
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  describe('when successful', () => {
    it('should set the user and location', done => {
      const data = { username: 'test', password: 'pw' };
      login(data, actions)(effects);

      moxios.wait(async () => {
        const req = moxios.requests.mostRecent();

        try {
          await req.respondWith({
            status: 200,
            response: {
              it: 'worked'
            }
          });

          expect(effects.setLocation).to.have.been.calledWith('home');
          expect(effects.setUser).to.have.been.calledWith(
            match.has('data', {
              it: 'worked'
            })
          );
        } catch {}

        done();
      });
    });
  });

  describe('when unsuccessful', () => {
    it('should set the error message', done => {
      const data = { username: 'wrong', password: 'pw' };
      login(data, actions)(effects);

      moxios.wait(async () => {
        const req = moxios.requests.mostRecent();

        try {
          await req.respondWith({
            status: 404,
            response: {
              it: 'didnt work'
            }
          });

          expect(actions.setError).to.have.been.calledWith(
            match.has('data', {
              it: 'didnt work'
            })
          );
        } catch {}

        done();
      });
    });
  });
});
