import { expect, use } from 'chai';
import { stub, match } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { UsersController } from '../../../src/server/controllers';

use(sinonChai);

describe('server.controllers.UsersController', () => {

  let usersService;
  let usersAssembler;
  let controller;
  let resp;

  beforeEach(() => {
    usersService = {
      list: stub().callsFake(() => Promise.resolve([{ list: 'test' }])),
      get: stub().callsFake(() => Promise.resolve({ get: 'test' })),
      register: stub().callsFake(() => Promise.resolve({ register: 'test' })),
      login: stub().callsFake(() => Promise.resolve({ login: 'test' }))
    };

    usersAssembler = {
      assemble: stub().returns('assembled')
    };

    controller = new UsersController(usersService, usersAssembler);
  });

  describe('when getting a specific user', () => {
    beforeEach(async () => {
      resp = await controller.get({ username: 'get' });
    });

    it('should query for that user', () => {
      expect(usersService.get).to.have.been.calledWith('get');
    });

    it('should assemble the results', () => {
      expect(usersAssembler.assemble).to.have.been.calledWith(
        match({ get: 'test' }));
    });

    it('should return the assembled results', () => {
      expect(resp).to.equal('assembled');
    });
  });

  describe('when listing all users', () => {
    beforeEach(async () => {
      resp = await controller.list();
    });
    
    it('should get all users', () => {
      expect(usersService.list).to.have.been.called;
    });

    it('should assemble the results', () => {
      expect(usersAssembler.assemble).to.have.been.calledWith(
        match({ list: 'test' }));
    });

    it('should return the assembled results', () => {
      expect(resp).to.deep.equal(['assembled']);
    });
  });

  describe('when registering a new user', () => {
    beforeEach(async () => {
      resp = await controller.register({ username: 'hello', password: 'world' });
    });

    it('should register the user', () => {
      expect(usersService.register).to.have.been.calledWith('hello', 'world');
    });

    it('should assemble the results', () => {
      expect(usersAssembler.assemble).to.have.been.calledWith(
        match({ register: 'test' }));
    });

    it('should return the assembled results', () => {
      expect(resp).to.equal('assembled');
    });
  });

  describe('when logging in a user', () => {
    beforeEach(async () => {
      resp = await controller.login({ username: 'hello' }, { password: 'world' });
    });

    it('should attempt to login the user', () => {
      expect(usersService.login).to.have.been.calledWith('hello', 'world');
    });

    it('should assemble the results', () => {
      expect(usersAssembler.assemble).to.have.been.calledWith(
        match({ login: 'test' }));
    });

    it('should return the assembled results', () => {
      expect(resp).to.equal('assembled');
    });
  });

});