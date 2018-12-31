import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkContactExportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ContactExports} */
describe('Contact Export Tests', () => {
  let eloqua;
  let exports;

  beforeEach(function(done) {
    exports = bulkContactExportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    exports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ContactExports#get} */
  it('Contact Export Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.exports.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/exports');
      done();
    }));
  });

  /** @test {ContactExports#get} */
  it('Contact Export Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.exports.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/exports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ContactExports#getOne} */
  it('Contact Export Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.exports.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/exports/1');
      done();
    }));
  });

  /** @test {ContactExports#create} */
  it('Contact Export Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.exports.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/exports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {ContactExports#update} */
  it('Contact Export Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.exports.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/exports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {ContactExports#delete} */
  it('Contact Export Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.exports.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/exports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {ContactExports#getData} */
  it('Contact Export Get Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.exports.getData(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/exports/1/data');
      done();
    }));
  });

  /** @test {ContactExports#getData} */
  it('Contact Export Get Data with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.exports.getData(1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/exports/1/data');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ContactExports#deleteData} */
  it('Contact Export Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.exports.deleteData(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/exports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
