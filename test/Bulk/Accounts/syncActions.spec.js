import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkAccountSyncActionsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {AccountSyncActions} */
describe('Account Sync Action Tests', () => {
  let eloqua;
  let syncActions;

  beforeEach(function(done) {
    syncActions = bulkAccountSyncActionsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    syncActions.done();
    nock.cleanAll();
    return done();
  });

  /** @test {AccountSyncActions#get} */
  it('Account Sync Action Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.syncActions.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/syncActions');
      done();
    }));
  });

  /** @test {AccountSyncActions#get} */
  it('Account Sync Action Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.syncActions.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/syncActions');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {AccountSyncActions#getOne} */
  it('Account Sync Action Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.syncActions.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/syncActions/1');
      done();
    }));
  });

  /** @test {AccountSyncActions#create} */
  it('Account Sync Action Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.syncActions.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/syncActions');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {AccountSyncActions#update} */
  it('Account Sync Action Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.syncActions.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/syncActions/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {AccountSyncActions#delete} */
  it('Account Sync Action Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.syncActions.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/syncActions/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {AccountSyncActions#uploadData} */
  it('Account Sync Action Upload Data', done => {
    let data = [{CompanyName: 'Test'}];
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.syncActions.uploadData(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/syncActions/1/data');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {AccountSyncActions#deleteData} */
  it('Account Sync Action Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.syncActions.deleteData(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/syncActions/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
