import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkOpportunitiesImportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {OpportunitiesImports} */
describe('Opportunities Import Tests', () => {
  let eloqua;
  let imports;

  beforeEach(function(done) {
    imports = bulkOpportunitiesImportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    imports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {OpportunitiesImports#get} */
  it('Opportunities Import Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.imports.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/imports');
      done();
    }));
  });

  /** @test {OpportunitiesImports#get} */
  it('Opportunities Import Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.imports.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/imports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {OpportunitiesImports#getOne} */
  it('Opportunities Import Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.imports.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/imports/1');
      done();
    }));
  });

  /** @test {OpportunitiesImports#create} */
  it('Opportunities Import Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.imports.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/imports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {OpportunitiesImports#update} */
  it('Opportunities Import Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.imports.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/imports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {OpportunitiesImports#delete} */
  it('Opportunities Import Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.imports.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/imports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {OpportunitiesImports#uploadData} */
  it('Opportunities Import Upload Data', done => {
    let data = [{CompanyName: 'Test'}];
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.imports.uploadData(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/imports/1/data');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {OpportunitiesImports#deleteData} */
  it('Opportunities Import Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.imports.deleteData(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/imports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
