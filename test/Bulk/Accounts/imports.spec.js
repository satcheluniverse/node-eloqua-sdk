import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkAccountImportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {AccountImports} */
describe('Account Import Tests', () => {
  let eloqua;
  let imports;

  beforeEach(function(done) {
    imports = bulkAccountImportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    imports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {AccountImports#get} */
  it('Account Import Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.imports.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/imports');
      done();
    }));
  });

  /** @test {AccountImports#get} */
  it('Account Import Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.imports.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/imports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {AccountImports#getOne} */
  it('Account Import Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.imports.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/imports/1');
      done();
    }));
  });

  /** @test {AccountImports#create} */
  it('Account Import Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.imports.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/imports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {AccountImports#update} */
  it('Account Import Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.imports.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/imports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {AccountImports#delete} */
  it('Account Import Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.imports.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/imports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {AccountImports#uploadData} */
  it('Account Import Upload Data', done => {
    let data = [{CompanyName: 'Test'}];
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.imports.uploadData(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/imports/1/data');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {AccountImports#deleteData} */
  it('Account Import Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.imports.deleteData(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/imports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
