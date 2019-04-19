import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {assetsFormsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {Forms} */
describe('Form Tests', () => {
  let eloqua;
  let forms;

  beforeEach(function(done) {
    forms = assetsFormsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    forms.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Forms#get} */
  it('Form Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.forms.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/forms');
      done();
    }));
  });

  /** @test {Forms#get} */
  it('Form Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.forms.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/forms');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {Forms#getOne} */
  it('Form Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.forms.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/form/1');
      done();
    }));
  });

  /** @test {Forms#getOne} */
  it('Form Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.forms.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/form/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {Forms#create} */
  it('Form Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.forms.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/form');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Forms#update} */
  it('Form Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.forms.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/form/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {Forms#partial} */
  it('Form Partially Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.forms.partial(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/form/1');
      expect(xhr.config.method).to.eql('patch');
      done();
    }));
  });

  /** @test {Forms#delete} */
  it('Form Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.forms.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/form/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

});
