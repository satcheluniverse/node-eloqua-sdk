import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {assetsEmailGroupsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {EmailGroups} */
describe('Email Group Tests', () => {
  let eloqua;
  let emailGroups;

  beforeEach(function(done) {
    emailGroups = assetsEmailGroupsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    emailGroups.done();
    nock.cleanAll();
    return done();
  });

  /** @test {EmailGroups#get} */
  it('Email Group Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.groups.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/groups');
      done();
    }));
  });

  /** @test {EmailGroups#get} */
  it('Email Group Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.groups.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/groups');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {EmailGroups#getOne} */
  it('Email Group Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.groups.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/group/1');
      done();
    }));
  });

  /** @test {EmailGroups#getOne} */
  it('Email Group Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.groups.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/group/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {EmailGroups#create} */
  it('Email Group Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.groups.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/group');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {EmailGroups#update} */
  it('Email Group Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.groups.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/group/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {EmailGroups#delete} */
  it('Email Group Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.groups.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/group/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
