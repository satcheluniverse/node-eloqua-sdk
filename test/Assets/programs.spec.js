import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {assetsProgramsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {Programs} */
describe('Program Tests', () => {
  let eloqua;
  let programs;

  beforeEach(function(done) {
    programs = assetsProgramsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    programs.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Programs#get} */
  it('Program Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.programs
      .get(null, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/programs');
        done();
      }));
  });

  /** @test {Programs#get} */
  it('Program Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.programs
      .get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/programs');
        expect(xhr.config.params).to.eql({count: 1});
        done();
      }));
  });

  /** @test {Programs#getOne} */
  it('Program Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.programs.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/program/1');
      done();
    }));
  });

  /** @test {Programs#getOne} */
  it('Program Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.programs.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/program/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {Programs#create} */
  it('Program Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.programs.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/program');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Programs#update} */
  it('Program Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.programs.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/program/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {Programs#delete} */
  it('Program Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.programs.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/program/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {Programs#activate} */
  it('Program Activate', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.programs.activate(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/program/active/1');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Programs#activate} */
  it('Program Activate', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.programs.activate(1, {runAsUserId: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/program/active/1');
      expect(xhr.config.method).to.eql('post');
      expect(xhr.config.params).to.eql({runAsUserId: 1});
      done();
    }));
  });

  /** @test {Programs#deactivate} */
  it('Program Deactivate', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.programs.deactivate(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/program/draft/1');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Programs#pause} */
  it('Program Pause', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.programs.pause(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/program/pause/1');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });
});
