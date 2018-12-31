import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkCustomObjectExportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {CustomObjectExports} */
describe('Custom Object Export Tests', () => {
  let eloqua;
  let exports;

  beforeEach(function(done) {
    exports = bulkCustomObjectExportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    exports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {CustomObjectExports#get} */
  it('Custom Object Export Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.exports.get(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/exports');
      done();
    }));
  });

  /** @test {CustomObjectExports#get} */
  it('Custom Object Export Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.exports.get(1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/exports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {CustomObjectExports#getOne} */
  it('Custom Object Export Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.exports.getOne(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/exports/1');
      done();
    }));
  });

  /** @test {CustomObjectExports#create} */
  it('Custom Object Export Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.exports.create(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/exports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {CustomObjectExports#update} */
  it('Custom Object Export Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.exports.update(1, 1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/exports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {CustomObjectExports#delete} */
  it('Custom Object Export Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.exports.delete(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/exports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {CustomObjectExports#getData} */
  it('Custom Object Export Get Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.exports.getData(1, 1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/exports/1/data');
      done();
    }));
  });

  /** @test {CustomObjectExports#getData} */
  it('Custom Object Export Get Data with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.exports.getData(1, 1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/exports/1/data');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {CustomObjectExports#deleteData} */
  it('Custom Object Export Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.exports.deleteData(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/exports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
