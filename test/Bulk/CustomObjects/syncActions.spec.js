import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkCustomObjectSyncActionsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {CustomObjectSyncActions} */
describe('Custom Object Sync Action Tests', () => {
  let eloqua;
  let syncActions;

  beforeEach(function(done) {
    syncActions = bulkCustomObjectSyncActionsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    syncActions.done();
    nock.cleanAll();
    return done();
  });

  /** @test {CustomObjectSyncActions#get} */
  it('Custom Object Sync Action Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.syncActions.get(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/syncActions');
      done();
    }));
  });

  /** @test {CustomObjectSyncActions#get} */
  it('Custom Object Sync Action Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.syncActions.get(1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/syncActions');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {CustomObjectSyncActions#getOne} */
  it('Custom Object Sync Action Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.syncActions.getOne(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/syncActions/1');
      done();
    }));
  });

  /** @test {CustomObjectSyncActions#create} */
  it('Custom Object Sync Action Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.syncActions.create(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/syncActions');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {CustomObjectSyncActions#update} */
  it('Custom Object Sync Action Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.syncActions.update(1, 1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/syncActions/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {CustomObjectSyncActions#delete} */
  it('Custom Object Sync Action Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.syncActions.delete(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/syncActions/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {CustomObjectSyncActions#uploadData} */
  it('Custom Object Sync Action Upload Data', done => {
    let data = [{CompanyName: 'Test'}];
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.syncActions.uploadData(1, 1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/syncActions/1/data');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {CustomObjectSyncActions#deleteData} */
  it('Custom Object Sync Action Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.syncActions.deleteData(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/syncActions/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
