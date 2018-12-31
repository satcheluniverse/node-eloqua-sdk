import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkAccountExportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {AccountExports} */
describe('Account Export Tests', () => {
  let eloqua;
  let exports;

  beforeEach(function(done) {
    exports = bulkAccountExportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    exports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {AccountExports#get} */
  it('Account Export Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.exports.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/exports');
      done();
    }));
  });

  /** @test {AccountExports#get} */
  it('Account Export Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.exports.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/exports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {AccountExports#getOne} */
  it('Account Export Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.exports.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/exports/1');
      done();
    }));
  });

  /** @test {AccountExports#create} */
  it('Account Export Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.exports.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/exports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {AccountExports#update} */
  it('Account Export Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.exports.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/exports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {AccountExports#delete} */
  it('Account Export Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.exports.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/exports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {AccountExports#getData} */
  it('Account Export Get Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.exports.getData(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/exports/1/data');
      done();
    }));
  });

  /** @test {AccountExports#getData} */
  it('Account Export Get Data with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.exports.getData(1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/exports/1/data');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {AccountExports#deleteData} */
  it('Account Export Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.exports.deleteData(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/exports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
