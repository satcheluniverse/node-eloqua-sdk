import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkCustomObjectImportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {CustomObjectImports} */
describe('Custom Object Import Tests', () => {
  let eloqua;
  let imports;

  beforeEach(function(done) {
    imports = bulkCustomObjectImportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    imports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {CustomObjectImports#get} */
  it('Custom Object Import Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.imports.get(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/imports');
      done();
    }));
  });

  /** @test {CustomObjectImports#get} */
  it('Custom Object Import Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.imports.get(1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/imports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {CustomObjectImports#getOne} */
  it('Custom Object Import Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.imports.getOne(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/imports/1');
      done();
    }));
  });

  /** @test {CustomObjectImports#create} */
  it('Custom Object Import Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.imports.create(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/imports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {CustomObjectImports#update} */
  it('Custom Object Import Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.imports.update(1, 1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/imports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {CustomObjectImports#delete} */
  it('Custom Object Import Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.imports.delete(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/imports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {CustomObjectImports#uploadData} */
  it('Custom Object Import Upload Data', done => {
    let data = [{CompanyName: 'Test'}];
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.imports.uploadData(1, 1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/imports/1/data');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {CustomObjectImports#deleteData} */
  it('Custom Object Import Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.imports.deleteData(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/imports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
