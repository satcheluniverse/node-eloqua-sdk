import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkCampaignResponsesExportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {CampaignResponsesExports} */
describe('Campaign Responses Export Tests', () => {
  let eloqua;
  let exports;

  beforeEach(function(done) {
    exports = bulkCampaignResponsesExportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    exports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {CampaignResponsesExports#get} */
  it('Campaign Responses Export Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.exports.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/exports');
      done();
    }));
  });

  /** @test {CampaignResponsesExports#get} */
  it('Campaign Responses Export Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.exports.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/exports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {CampaignResponsesExports#getOne} */
  it('Campaign Responses Export Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.exports.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/exports/1');
      done();
    }));
  });

  /** @test {CampaignResponsesExports#create} */
  it('Campaign Responses Export Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.exports.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/exports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {CampaignResponsesExports#update} */
  it('Campaign Responses Export Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.exports.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/exports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {CampaignResponsesExports#delete} */
  it('Campaign Responses Export Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.exports.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/exports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {CampaignResponsesExports#getData} */
  it('Campaign Responses Export Get Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.exports.getData(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/exports/1/data');
      done();
    }));
  });

  /** @test {CampaignResponsesExports#getData} */
  it('Campaign Responses Export Get Data with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.exports.getData(1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/exports/1/data');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {CampaignResponsesExports#deleteData} */
  it('Campaign Responses Export Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.exports.deleteData(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/exports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
