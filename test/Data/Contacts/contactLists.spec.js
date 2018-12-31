import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {dataContactsListsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ContactLists} */
describe('Contact List Tests', () => {
  let eloqua;
  let contactLists;

  beforeEach(function(done) {
    contactLists = dataContactsListsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    contactLists.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ContactLists#get} */
  it('Contact List Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.lists.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/lists');
      done();
    }));
  });

  /** @test {ContactLists#get} */
  it('Contact List Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.lists.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/lists');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {ContactLists#getOne} */
  it('Contact List Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.lists.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/list/1');
      done();
    }));
  });

  /** @test {ContactLists#getOne} */
  it('Contact List Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.lists.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/list/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {ContactLists#create} */
  it('Contact List Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.lists.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/list');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {ContactLists#update} */
  it('Contact List Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.lists.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/list/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {ContactLists#delete} */
  it('Contact List Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.lists.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/list/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
