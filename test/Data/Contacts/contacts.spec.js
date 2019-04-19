import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {dataContactsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {Contacts} */
describe('Contact Tests', () => {
  let eloqua;
  let contacts;

  beforeEach(function(done) {
    contacts = dataContactsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    contacts.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Contacts#get} */
  it('Contact Get', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.data.contacts
      .get(null, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/contacts');
        done();
      }));
  });

  /** @test {Contacts#get} */
  it('Contact Get with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.data.contacts
      .get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/contacts');
        expect(xhr.config.params).to.eql({count: 1});
        done();
      }));
  });

  /** @test {Contacts#getOne} */
  it('Contact Get One', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/contact/1');
      done();
    }));
  });

  /** @test {Contacts#getOne} */
  it('Contact Get One with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/contact/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {Contacts#create} */
  it('Contact Create', done => {
    let data = {
      name: 'Test',
    };
    let eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/contact');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Contacts#update} */
  it('Contact Update', done => {
    let data = {
      name: 'Test',
    };
    let eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/contact/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {Contacts#delete} */
  it('Contact Delete', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/contact/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

});
