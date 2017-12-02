import { expect, use } from 'chai';
import { stub } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { UserController } from '../../../src/server/controllers';

use(sinonChai);

describe('server.controllers.UserController', () => {
  
  let userService;
  let controller;

  beforeEach(() => {
    userService = {
      list: stub().returns('list test'),
      get: stub().returns('get test')
    }

    controller = new UserController(userService);
  });

  describe('when getting a specific user', () => {
    it('should query for that user', () => {
      controller.get({ username: 'test' });
      expect(userService.get).to.have.been.calledWith('test');
    });

    it('should return the results', () => {
      const resp = controller.get({ username: 'test' });
      expect(resp).to.equal('get test');
    });
  });

  describe('when listing all users', () => {
    it('should get all users', () => {
      const resp = controller.list();
      expect(userService.list).to.have.been.called;
    });

    it('should return the results', () => {
      const resp = controller.list();
      expect(resp).to.equal('list test');
    });
  });

});