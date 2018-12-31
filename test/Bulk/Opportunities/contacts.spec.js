import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkOpportunitiesContactsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {OpportunitiesContacts} */
describe('Opportunities Contact Tests', () => {
  let eloqua;
  let contacts;

  beforeEach(function(done) {
    contacts = bulkOpportunitiesContactsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    contacts.done();
    nock.cleanAll();
    return done();
  });

  /** @test {OpportunitiesContacts#get} */
  it('Opportunities Contact Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.contacts.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/contacts/imports');
      done();
    }));
  });

  /** @test {OpportunitiesContacts#get} */
  it('Opportunities Contact Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.contacts.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/contacts/imports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {OpportunitiesContacts#getOne} */
  it('Opportunities Contact Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.contacts.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/contacts/imports/1');
      done();
    }));
  });

  /** @test {OpportunitiesContacts#create} */
  it('Opportunities Contact Create', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.contacts.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/contacts/imports');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {OpportunitiesContacts#update} */
  it('Opportunities Contact Update', done => {
    let data = {name: 'Test'};
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.contacts.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/contacts/imports/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {OpportunitiesContacts#delete} */
  it('Opportunities Contact Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.contacts.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/contacts/imports/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {OpportunitiesContacts#uploadData} */
  it('Opportunities Contact Upload Data', done => {
    let data = [{CompanyName: 'Test'}];
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.contacts.uploadData(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/contacts/imports/1/data');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {OpportunitiesContacts#deleteData} */
  it('Opportunities Contact Delete Data', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.contacts.deleteData(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/contacts/imports/1/data');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
