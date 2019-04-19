import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {dataContactsSegmentsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ContactSegmnets} */
describe('Contact Segmnet Tests', () => {
  let eloqua;
  let contactSegments;

  beforeEach(function(done) {
    contactSegments = dataContactsSegmentsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    contactSegments.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ContactSegmnets#get} */
  it('Contact Segmnet Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.contacts.segments.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/segments');
      done();
    }));
  });

  /** @test {ContactSegmnets#get} */
  it('Contact Segmnet Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.contacts.segments.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/segments');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {ContactSegmnets#getOne} */
  it('Contact Segmnet Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.contacts.segments.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/segment/1');
      done();
    }));
  });

  /** @test {ContactSegmnets#getOne} */
  it('Contact Segmnet Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.contacts.segments.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/segment/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {ContactSegmnets#create} */
  it('Contact Segmnet Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions({isTest: true}));

    eloqua.assets.contacts.segments.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/segment');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {ContactSegmnets#update} */
  it('Contact Segmnet Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.contacts.segments.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/segment/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {ContactSegmnets#delete} */
  it('Contact Segmnet Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.contacts.segments.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contact/segment/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
