import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkEventExportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {EventExports} */
describe('Event Export Tests', () => {
  let eloqua;
  let exports;

  beforeEach(function(done) {
    exports = bulkEventExportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    exports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {EventExports#get} */
  it('Event Export Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.exports.get(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/exports');
      done();
    }));
  });

  /** @test {EventExports#get} */
  it('Event Export Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.exports.get(1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/exports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {EventExports#getOne} */
  it('Event Export Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.exports.getOne(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/exports/1');
      done();
    }));
  });

  /** @test {EventExports#create} */
  it('Event Export Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.exports.create(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/exports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {EventExports#update} */
  it('Event Export Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.exports.update(1, 1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/exports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {EventExports#delete} */
  it('Event Export Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.exports.delete(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/exports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {EventExports#getData} */
  it('Event Export Get Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.exports.getData(1, 1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/exports/1/data');
      done();
    }));
  });

  /** @test {EventExports#getData} */
  it('Event Export Get Data with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.exports.getData(1, 1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/exports/1/data');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {EventExports#deleteData} */
  it('Event Export Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.exports.deleteData(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/exports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
