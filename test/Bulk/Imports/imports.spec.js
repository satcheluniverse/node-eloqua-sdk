import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkImportsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {Imports} */
describe('Bulk Import Tests', () => {
  let eloqua;
  let imports;

  beforeEach(function(done) {
    imports = bulkImportsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    imports.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Imports#get} */
  it('Import Get', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.imports.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/imports');
      done();
    }));
  });

  /** @test {Imports#get} */
  it('Import Get with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.imports.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/imports');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {Imports#getData} */
  it('Import Get Data', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.imports.getData(assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/imports/data');
      done();
    }));
  });

  require('./priorities.spec');
});
