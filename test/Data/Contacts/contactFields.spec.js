import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {dataContactsFieldsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ContactFields} */
describe('Contact Field Tests', () => {
  let eloqua;
  let contactFields;

  beforeEach(function(done) {
    contactFields = dataContactsFieldsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    contactFields.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ContactFields#get} */
  it('Contact Field Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.fields.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/fields');
      done();
    }));
  });

  /** @test {ContactFields#get} */
  it('Contact Field Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.fields.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/fields');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {ContactFields#getOne} */
  it('Contact Field Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.fields.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/field/1');
      done();
    }));
  });

  /** @test {ContactFields#getOne} */
  it('Contact Field Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.fields.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/field/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {ContactFields#create} */
  it('Contact Field Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.fields.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/field');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {ContactFields#update} */
  it('Contact Field Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.fields.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/field/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {ContactFields#delete} */
  it('Contact Field Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.contacts.fields.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/field/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
