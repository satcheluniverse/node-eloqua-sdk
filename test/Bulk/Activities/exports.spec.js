import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkActivitiesExportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ActivitiesExports} */
describe('Activities Export Tests', () => {
  let eloqua;
  let exports;

  beforeEach(function(done) {
    exports = bulkActivitiesExportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    exports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ActivitiesExports#get} */
  it('Activities Export Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.exports.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/exports');
      done();
    }));
  });

  /** @test {ActivitiesExports#get} */
  it('Activities Export Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.exports.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/exports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ActivitiesExports#getOne} */
  it('Activities Export Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.exports.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/exports/1');
      done();
    }));
  });

  /** @test {ActivitiesExports#create} */
  it('Activities Export Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.exports.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/exports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {ActivitiesExports#update} */
  it('Activities Export Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.exports.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/exports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {ActivitiesExports#delete} */
  it('Activities Export Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.exports.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/exports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {ActivitiesExports#getData} */
  it('Activities Export Get Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.exports.getData(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/exports/1/data');
      done();
    }));
  });

  /** @test {ActivitiesExports#getData} */
  it('Activities Export Get Data with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.exports.getData(1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/exports/1/data');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ActivitiesExports#deleteData} */
  it('Activities Export Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.exports.deleteData(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/exports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
