import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkEmailAddressesImportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {EmailAddressesImports} */
describe('Email Addresses Import Tests', () => {
  let eloqua;
  let imports;

  beforeEach(function(done) {
    imports = bulkEmailAddressesImportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    imports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {EmailAddressesImports#get} */
  it('Email Addresses Import Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.emailAddresses.imports.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/emailAddresses/imports');
      done();
    }));
  });

  /** @test {EmailAddressesImports#get} */
  it('Email Addresses Import Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.emailAddresses.imports.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/emailAddresses/imports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {EmailAddressesImports#getOne} */
  it('Email Addresses Import Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.emailAddresses.imports.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/emailAddresses/imports/1');
      done();
    }));
  });

  /** @test {EmailAddressesImports#create} */
  it('Email Addresses Import Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.emailAddresses.imports.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/emailAddresses/imports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {EmailAddressesImports#update} */
  it('Email Addresses Import Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.emailAddresses.imports.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/emailAddresses/imports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {EmailAddressesImports#delete} */
  it('Email Addresses Import Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.emailAddresses.imports.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/emailAddresses/imports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {EmailAddressesImports#uploadData} */
  it('Email Addresses Import Upload Data', done => {
    let data = [{CompanyName: 'Test'}];
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.emailAddresses.imports.uploadData(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/emailAddresses/imports/1/data');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {EmailAddressesImports#deleteData} */
  it('Email Addresses Import Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.emailAddresses.imports.deleteData(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/emailAddresses/imports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
