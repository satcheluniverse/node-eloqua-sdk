import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {dataVisitorsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {Visitors} */
describe('Visitor Tests', () => {
  let eloqua;
  let visitors;

  beforeEach(function(done) {
    visitors = dataVisitorsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    visitors.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Visitors#fields} */
  it('Visitor Fields', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.visitors.fields(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/visitor/fields');
      done();
    }));
  });

  /** @test {Visitors#fields} */
  it('Visitor Fields with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.visitors.fields({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/visitor/fields');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });
});
