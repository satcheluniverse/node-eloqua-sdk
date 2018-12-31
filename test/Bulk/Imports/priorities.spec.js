import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkImportPrioritiesResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ImportPriorities} */
describe('Bulk Import Priorities Tests', () => {
  let eloqua;
  let priorities;

  beforeEach(function(done) {
    priorities = bulkImportPrioritiesResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    priorities.done();
    nock.cleanAll();
    return done();
  });
  /** @test {ImportPriorities#get} */
  it('Import Priorities Get', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.imports.priorities.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/imports/priorities');
      done();
    }));
  });

  /** @test {ImportPriorities#get} */
  it('Import Priorities Get with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.imports.priorities.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/imports/priorities');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ImportPriorities#getOne} */
  it('Import Priorities Get One', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.imports.priorities.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/imports/priorities/1');
      done();
    }));
  });
});
