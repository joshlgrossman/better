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
      list: stub(),
      get: stub()
    }

    controller = new UserController(userService);
  });

  describe('when getting a specific user', () => {
    it('should query for that user', () => {
      controller.get({ username: 'test' });
      expect(userService.get).to.have.been.calledWith('test');
    });
  });

  describe('when listing all users', () => {
    it('should get all users', () => {
      controller.list();
      expect(userService.list).to.have.been.called;
    });
  });

});