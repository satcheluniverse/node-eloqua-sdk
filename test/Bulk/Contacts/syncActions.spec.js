import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkContactSyncActionsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ContactSyncActions} */
describe('Contact Sync Action Tests', () => {
  let eloqua;
  let syncActions;

  beforeEach(function(done) {
    syncActions = bulkContactSyncActionsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    syncActions.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ContactSyncActions#get} */
  it('Contact Sync Action Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.syncActions.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/syncActions');
      done();
    }));
  });

  /** @test {ContactSyncActions#get} */
  it('Contact Sync Action Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.syncActions.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/syncActions');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ContactSyncActions#getOne} */
  it('Contact Sync Action Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.syncActions.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/syncActions/1');
      done();
    }));
  });

  /** @test {ContactSyncActions#create} */
  it('Contact Sync Action Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.syncActions.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/syncActions');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {ContactSyncActions#update} */
  it('Contact Sync Action Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.syncActions.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/syncActions/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {ContactSyncActions#delete} */
  it('Contact Sync Action Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.syncActions.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/syncActions/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {ContactSyncActions#uploadData} */
  it('Contact Sync Action Upload Data', done => {
    let data = [{CompanyName: 'Test'}];
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.syncActions.uploadData(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/syncActions/1/data');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {ContactSyncActions#deleteData} */
  it('Contact Sync Action Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.syncActions.deleteData(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/syncActions/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
