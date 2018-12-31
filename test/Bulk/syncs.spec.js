import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {bulkSyncsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

/** @test {Syncs} */
describe('Sync Tests', () => {
  let eloqua;
  let syncs;

  beforeEach(function(done) {
    syncs = bulkSyncsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    syncs.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Syncs#get} */
  it('Sync Get', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.syncs.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/syncs');
      done();
    }));
  });

  /** @test {Syncs#get} */
  it('Sync Get with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.syncs.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/syncs');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {Syncs#getOne} */
  it('Sync Get One', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.syncs.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/syncs/1');
      expect(xhr.config.params).to.eql();
      done();
    }));
  });

  /** @test {Syncs#create} */
  it('Sync Create', done => {
    let data = {syncedInstanceUri: '/contacts/exports/1'};
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.syncs.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/syncs');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Syncs#getData} */
  it('Sync Get Data', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.syncs.getData(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/syncs/1/data');
      done();
    }));
  });

  /** @test {Syncs#getData} */
  it('Sync Get Data with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.syncs.getData(1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/syncs/1/data');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {Syncs#delete} */
  it('Sync Delete', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.syncs.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/syncs/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {Syncs#getLogs} */
  it('Sync Get Logs', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.syncs.getLogs(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/syncs/1/logs');
      done();
    }));
  });

  /** @test {Syncs#getRejects} */
  it('Sync Get Rejects', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.syncs.getRejects(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/syncs/1/rejects');
      done();
    }));
  });

  /** @test {Syncs#getRejects} */
  it('Sync Get Rejects with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.syncs.getRejects(1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/syncs/1/rejects');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });
});
