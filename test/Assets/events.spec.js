import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {dataEventsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {Events} */
describe('Event Tests', () => {
  let eloqua;
  let events;

  beforeEach(function(done) {
    events = dataEventsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    events.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Events#get} */
  it('Event Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.events.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/eventRegistrations');
      done();
    }));
  });

  /** @test {Events#get} */
  it('Event Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.events.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/eventRegistrations');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {Events#getOne} */
  it('Event Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.events.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/eventRegistration/1');
      done();
    }));
  });

  /** @test {Events#getOne} */
  it('Event Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.events.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/eventRegistration/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {Events#create} */
  it('Event Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.events.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/eventRegistration');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Events#update} */
  it('Event Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.events.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/eventRegistration/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {Events#delete} */
  it('Event Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.events.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/eventRegistration/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

});
