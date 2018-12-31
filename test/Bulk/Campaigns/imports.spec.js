import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkCampaignResponsesImportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {CampaignResponsesImports} */
describe('Campaign Responses Import Tests', () => {
  let eloqua;
  let imports;

  beforeEach(function(done) {
    imports = bulkCampaignResponsesImportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    imports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {CampaignResponsesImports#get} */
  it('Campaign Responses Import Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.imports.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/imports');
      done();
    }));
  });

  /** @test {CampaignResponsesImports#get} */
  it('Campaign Responses Import Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.imports.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/imports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {CampaignResponsesImports#getOne} */
  it('Campaign Responses Import Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.imports.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/imports/1');
      done();
    }));
  });

  /** @test {CampaignResponsesImports#create} */
  it('Campaign Responses Import Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.imports.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/imports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {CampaignResponsesImports#update} */
  it('Campaign Responses Import Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.imports.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/imports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {CampaignResponsesImports#delete} */
  it('Campaign Responses Import Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.imports.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/imports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {CampaignResponsesImports#uploadData} */
  it('Campaign Responses Import Upload Data', done => {
    let data = [{CompanyName: 'Test'}];
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.imports.uploadData(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/imports/1/data');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {CampaignResponsesImports#deleteData} */
  it('Campaign Responses Import Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.imports.deleteData(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/imports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
