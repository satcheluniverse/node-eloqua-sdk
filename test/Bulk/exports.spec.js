import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {bulkExportsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

/** @test {Exports} */
describe('Bulk Export Tests', () => {
  let eloqua;
  let exports;

  beforeEach(function(done) {
    exports = bulkExportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    exports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Exports#get} */
  it('Export Get', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.exports.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/exports');
      done();
    }));
  });

  /** @test {Exports#get} */
  it('Export Get with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.exports.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/exports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {Exports#getData} */
  it('Export Get Data', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.exports.getData(assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/exports/data');
      done();
    }));
  });
});
