import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkActivitiesImportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ActivitiesImports} */
describe('Activities Import Tests', () => {
  let eloqua;
  let imports;

  beforeEach(function(done) {
    imports = bulkActivitiesImportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    imports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ActivitiesImports#get} */
  it('Activities Import Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.imports.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/imports');
      done();
    }));
  });

  /** @test {ActivitiesImports#get} */
  it('Activities Import Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.imports.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/imports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ActivitiesImports#getOne} */
  it('Activities Import Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.imports.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/imports/1');
      done();
    }));
  });

  /** @test {ActivitiesImports#create} */
  it('Activities Import Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.imports.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/imports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {ActivitiesImports#update} */
  it('Activities Import Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.imports.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/imports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {ActivitiesImports#delete} */
  it('Activities Import Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.imports.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/imports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {ActivitiesImports#uploadData} */
  it('Activities Import Upload Data', done => {
    let data = [{CompanyName: 'Test'}];
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.imports.uploadData(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/imports/1/data');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {ActivitiesImports#deleteData} */
  it('Activities Import Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.imports.deleteData(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/imports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
