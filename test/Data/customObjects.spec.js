import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {dataCustomObjectsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {CustomObjects} */
describe('Custom Object Tests', () => {
  let eloqua;
  let customObjects;

  beforeEach(function(done) {
    customObjects = dataCustomObjectsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    customObjects.done();
    nock.cleanAll();
    return done();
  });

  /** @test {CustomObjects#get} */
  it('Custom Object Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.customObjects.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/customObjects');
      done();
    }));
  });

  /** @test {CustomObjects#get} */
  it('Custom Object Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.customObjects.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/customObjects');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {CustomObjects#getOne} */
  it('Custom Object Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.customObjects.getOne(1, null,
      assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/customObject/1');
        done();
      }));
  });

  /** @test {CustomObjects#getOne} */
  it('Custom Object Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.customObjects.getOne(1, {depth: 'minimal'},
      assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/customObject/1');
        expect(xhr.config.params).to.eql({depth: 'minimal'});
        done();
      }));
  });

  /** @test {CustomObjects#create} */
  it('Custom Object Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions({isTest: true}));

    eloqua.data.customObjects.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/customObject');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {CustomObjects#update} */
  it('Custom Object Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions({isTest: true}));

    eloqua.data.customObjects.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/customObject/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {CustomObjects#delete} */
  it('Custom Object Delete', done => {
    eloqua = new Eloqua(getOptions({isTest: true}));

    eloqua.data.customObjects.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/customObject/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {CustomObjectData} */
  describe('Custom Object Data Tests', () => {
    /** @test {CustomObjectData#get} */
    it('Custom Object Data Get', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.data.customObjects.data.get(1, null, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/customObject/1/instances');
        done();
      }));
    });

    /** @test {CustomObjectData#get} */
    it('Custom Object Data Get with Querystring', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.data.customObjects.data.get(1, {count: 1}, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/customObject/1/instances');
        expect(xhr.config.params).to.eql({count: 1});
        done();
      }));
    });

    /** @test {CustomObjectData#getOne} */
    it('Custom Object Data Get One', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.data.customObjects.data.getOne(1, 1, null,
        assertSuccessful(done, function(err, result, xhr) {
          expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/customObject/1/instance/1');
          done();
        }));
    });

    /** @test {CustomObjectData#getOne} */
    it('Custom Object Data Get One with Querystring', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.data.customObjects.data.getOne(1, 1, {depth: 'minimal'},
        assertSuccessful(done, function(err, result, xhr) {
          expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/customObject/1/instance/1');
          expect(xhr.config.params).to.eql({depth: 'minimal'});
          done();
        }));
    });

    /** @test {CustomObjectData#create} */
    it('Custom Object Data Create', done => {
      let data = {
        name: 'Test',
      };
      eloqua = new Eloqua(getOptions({isTest: true}));

      eloqua.data.customObjects.data.create(1, data, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/customObject/1/instance');
        expect(xhr.config.method).to.eql('post');
        done();
      }));
    });

    /** @test {CustomObjectData#update} */
    it('Custom Object Data Update', done => {
      let data = {
        name: 'Test',
      };
      eloqua = new Eloqua(getOptions({isTest: true}));

      eloqua.data.customObjects.data.update(1, 1, data, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/customObject/1/instance/1');
        expect(xhr.config.method).to.eql('put');
        done();
      }));
    });

    /** @test {CustomObjectData#delete} */
    it('Custom Object Data Delete', done => {
      eloqua = new Eloqua(getOptions({isTest: true}));

      eloqua.data.customObjects.data.delete(1, 1, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/customObject/1/instance/1');
        expect(xhr.config.method).to.eql('delete');
        done();
      }));
    });
  });
});
