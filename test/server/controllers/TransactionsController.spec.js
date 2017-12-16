import { expect, use } from 'chai';
import { stub, match } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { TransactionsController } from '../../../src/server/controllers';

use(sinonChai);

describe('server.controllers.TransactionsController', () => {

  let transactionsService;
  let transactionsAssembler;
  let currentUser;
  let controller;
  let resp;

  beforeEach(() => {
    transactionsService = {
      list: stub().callsFake(() => Promise.resolve([{ list: 'test' }])),
      create: stub().callsFake(() => Promise.resolve({ create: 'test' }))
    };

    transactionsAssembler = {
      assemble: stub().returns('assembled')
    };

    currentUser = { username: 'test' };

    controller = new TransactionsController(transactionsService, transactionsAssembler);
  });

  describe('when listing user transactions', () => {
    beforeEach(async () => {
      resp = await controller.list(currentUser);
    });
    
    it('should query for the transactions', () => {
      expect(transactionsService.list).to.have.been.calledWith(currentUser);
    });
    
    it('should assemble the results', () => {
      expect(transactionsAssembler.assemble).to.have.been.calledWith(
        match({ list: 'test' }));
    });

    it('should return the assembled results', () => {
      expect(resp).to.deep.equal(['assembled']);
    });
  });

  describe('when creating a new transaction', () => {
    beforeEach(async () => {
      resp = await controller.create(currentUser, { to: 'other', amount: 1 });
    });

    it('should create a new transaction', () => {
      expect(transactionsService.create).to.have.been.calledWith('test', 'other', 1);
    });

    it('should assemble the results', () => {
      expect(transactionsAssembler.assemble).to.have.been.calledWith(
        match({ create: 'test' }));
    });

    it('should return the assembled results', () => {
      expect(resp).to.equal('assembled');
    });
  });

});