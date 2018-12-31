import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkContactImportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ContactImports} */
describe('Contact Import Tests', () => {
  let eloqua;
  let imports;

  beforeEach(function(done) {
    imports = bulkContactImportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    imports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ContactImports#get} */
  it('Contact Import Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.imports.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/imports');
      done();
    }));
  });

  /** @test {ContactImports#get} */
  it('Contact Import Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.imports.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/imports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ContactImports#getOne} */
  it('Contact Import Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.imports.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/imports/1');
      done();
    }));
  });

  /** @test {ContactImports#create} */
  it('Contact Import Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.imports.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/imports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {ContactImports#update} */
  it('Contact Import Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.imports.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/imports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {ContactImports#delete} */
  it('Contact Import Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.imports.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/imports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {ContactImports#uploadData} */
  it('Contact Import Upload Data', done => {
    let data = [{CompanyName: 'Test'}];
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.imports.uploadData(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/imports/1/data');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {ContactImports#deleteData} */
  it('Contact Import Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.imports.deleteData(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/imports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
