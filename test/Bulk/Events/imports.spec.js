import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkEventImportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {EventImports} */
describe('Event Import Tests', () => {
  let eloqua;
  let imports;

  beforeEach(function(done) {
    imports = bulkEventImportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    imports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {EventImports#get} */
  it('Event Import Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.imports.get(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/imports');
      done();
    }));
  });

  /** @test {EventImports#get} */
  it('Event Import Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.imports.get(1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/imports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {EventImports#getOne} */
  it('Event Import Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.imports.getOne(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/imports/1');
      done();
    }));
  });

  /** @test {EventImports#create} */
  it('Event Import Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.imports.create(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/imports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {EventImports#update} */
  it('Event Import Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.imports.update(1, 1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/imports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {EventImports#delete} */
  it('Event Import Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.imports.delete(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/imports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {EventImports#uploadData} */
  it('Event Import Upload Data', done => {
    let data = [{CompanyName: 'Test'}];
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.imports.uploadData(1, 1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/imports/1/data');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {EventImports#deleteData} */
  it('Event Import Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.imports.deleteData(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/imports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
