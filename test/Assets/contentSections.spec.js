import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {assetsContentSectionsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {ContentSections} */
describe('Content Section Tests', () => {
  let eloqua;
  let contentSections;

  beforeEach(function(done) {
    contentSections = assetsContentSectionsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    contentSections.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ContentSections#get} */
  it('Content Section Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.contentSections.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contentSections');
      done();
    }));
  });

  /** @test {ContentSections#get} */
  it('Content Section Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.contentSections.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contentSections');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {ContentSections#getOne} */
  it('Content Section Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.contentSections.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contentSection/1');
      done();
    }));
  });

  /** @test {ContentSections#getOne} */
  it('Content Section Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.contentSections.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contentSection/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {ContentSections#create} */
  it('Content Section Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.contentSections.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contentSection');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {ContentSections#update} */
  it('Content Section Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.contentSections.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contentSection/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {ContentSections#delete} */
  it('Content Section Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.contentSections.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/contentSection/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
