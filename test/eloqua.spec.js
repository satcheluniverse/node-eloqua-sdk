import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions, globalConfig} from './helpers/common';
import {assetsCampaignsResponse, bulkSyncsResponse, idResponse, oauthResponse} from './helpers/mocksSuccess';
import {assertFailure, assertSuccessful} from './helpers/callbacks';

nock.disableNetConnect();

/** @test {Eloqua} */
describe('Eloqua Tests', function() {
  let eloqua;

  beforeEach(function(done) {
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    return done();
  });

  /** @test {Eloqua} */
  describe('Constructor Tests', function(done) {
    /** @test {Eloqua#init} */
    it('Constructor functions properly', function(done) {
      eloqua = new Eloqua(getOptions());
      expect(eloqua.axiosOptions.baseURL).to.eql(globalConfig.ELOQUA_BASEURL);
      expect(eloqua.axiosOptions.auth.username).to
        .eql(globalConfig.ELOQUA_SITENAME + '\\' + globalConfig.ELOQUA_USERNAME);
      expect(eloqua.axiosOptions.auth.password).to.eql(globalConfig.ELOQUA_PASSWORD);
      expect(eloqua.restVersion).to.eql('2.0');
      expect(eloqua.bulkVersion).to.eql('2.0');
      expect(eloqua.apiCalls).to.eql(0);
      done();
    });

    /** @test {Eloqua#constructor} */
    it('Constructor with 1.0 versions', function(done) {
      eloqua = new Eloqua(getOptions({restVersion: '1.0', bulkVersion: '1.0'}));
      expect(eloqua.restVersion).to.eql('1.0');
      expect(eloqua.bulkVersion).to.eql('1.0');
      done();
    });

    /** @test {Eloqua#constructor} */
    it('Constructor with timeout', function(done) {
      eloqua = new Eloqua(getOptions({timeout: 3000}));
      expect(eloqua.axiosOptions.timeout).to.eql(3000);
      done();
    });
  });

  /** @test {Eloqua} */
  describe('Misc Tests', function() {
    let login;
    let campaigns;
    let syncs;

    beforeEach(function(done) {
      login = idResponse();
      campaigns = assetsCampaignsResponse();
      syncs = bulkSyncsResponse();
      return done();
    });

    afterEach(function(done) {
      login.done();
      campaigns.done();
      syncs.done();
      nock.cleanAll();
      return done();
    });

    /** @test {Eloqua#getBaseURL} */
    it('Constructor with null baseURL', function(done) {
      eloqua = new Eloqua(getOptions({baseURL: null}));

      eloqua.assets.campaigns.get(null, assertSuccessful(done, function() {
        expect(eloqua.axiosOptions.baseURL).to.eql(globalConfig.ELOQUA_BASEURL);
        done();
      }));
    });

    /** @test {Eloqua#getBaseURL} */
    it('Constructor with null baseURL and null username', function(done) {
      eloqua = new Eloqua(getOptions({baseURL: null, password: null}));
      eloqua.assets.campaigns.get(null, assertSuccessful(done, function() {
        expect(eloqua.axiosOptions.baseURL).to.eql('https://secure.p01.eloqua.com');
        done();
      }));
    });

    /** @test {Eloqua#getBaseURL} */
    it('Get baseURL', function(done) {
      eloqua = new Eloqua(getOptions());
      eloqua.getBaseURL(assertSuccessful(done, function() {
        expect(eloqua.axiosOptions.baseURL).to.eql(globalConfig.ELOQUA_BASEURL);
        done();
      }));
    });

    /** @test {Eloqua#getBaseURL} */
    it('Get baseURL with invalid credentials', function(done) {
      eloqua = new Eloqua(getOptions({baseURL: null, password: null}));
      eloqua.getBaseURL(assertSuccessful(done, function() {
        expect(eloqua.axiosOptions.baseURL).to.eql('https://secure.p01.eloqua.com');
        done();
      }));
    });

    /** @test {Eloqua#getBaseURL} */
    it('Set baseURL after init', function(done) {
      eloqua = new Eloqua(getOptions());
      eloqua.axiosOptions.baseURL = null;

      eloqua.assets.campaigns.get(null, assertSuccessful(done, function(err, campaign) {
        expect(eloqua.axiosOptions.baseURL).to.eql('https://secure.p01.eloqua.com');
        done();
      }));
    });

    /** @test {Eloqua#_throwError} */
    it('Set invalid baseURL after init', function(done) {
      eloqua = new Eloqua(getOptions());
      eloqua.axiosOptions.baseURL = '/';

      eloqua.assets.campaigns.get(null, assertFailure(done, function(err) {
        expect(err).to.be.an.error();
        done();
      }));
    });

    /** @test {Eloqua#_request} */
    it('_request with GET', function(done) {
      eloqua = new Eloqua(getOptions());
      eloqua.assets.campaigns.get(null, assertSuccessful(done, function(err, campaign, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/campaigns');
        done();
      }));
    });

    /** @test {Eloqua#_request} */
    it('_request with GET and no auth', function(done) {
      eloqua = new Eloqua(getOptions());
      delete (eloqua.axiosOptions.auth);
      delete (eloqua.axiosOptions.headers.Authorization);
      eloqua.assets.campaigns.get(null, assertSuccessful(done, function(err, campaign, xhr) {
        expect(xhr.config.auth.username).to.eql(globalConfig.ELOQUA_SITENAME + '\\' + globalConfig.ELOQUA_USERNAME);
        expect(xhr.config.auth.password).to.eql(globalConfig.ELOQUA_PASSWORD);
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/campaigns');
        done();
      }));
    });

    /** @test {Eloqua#_request} */
    it('_request with POST', function(done) {
      eloqua = new Eloqua(getOptions());
      eloqua.bulk.syncs.create({syncedInstanceUri: '/activities/exports/1'},
        assertSuccessful(done, function(err, campaign, xhr) {
          expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/syncs');
          expect(xhr.config.data).to.eql('{"syncedInstanceUri":"/activities/exports/1"}');
          done();
        }),
      );
    });

    /** @test {Eloqua#setHeaders} */
    it('Set Headers', function(done) {
      eloqua = new Eloqua(getOptions());
      delete (eloqua.axiosOptions.headers);
      eloqua.setHeaders('Test', 'Test');
      expect(eloqua.axiosOptions.headers.Test).to.eql('Test');
      done();
    });
  });


  /** @test {Eloqua} */
  describe('OAuth Tests', function() {
    let login;
    let campaigns;
    let oauth;

    beforeEach(function(done) {
      login = idResponse();
      campaigns = assetsCampaignsResponse();
      oauth = oauthResponse();
      return done();
    });

    afterEach(function(done) {
      login.done();
      campaigns.done();
      oauth.done();
      nock.cleanAll();
      return done();
    });

    /** @test {Eloqua#setHeaders} */
    it('Constructor with oauth token', function(done) {
      const oauth = {
        token_type: 'bearer',
        access_token: 'testtoken',
      };

      eloqua = new Eloqua(
        getOptions({
          oauth: oauth,
        }),
      );
      eloqua.assets.campaigns.get(null, assertSuccessful(done, function() {
        expect(eloqua.axiosOptions.headers.Authorization).to.eql(oauth.token_type + ' ' + oauth.access_token);
        done();
      }));
    });

    /** @test {Eloqua#getPasswordBearer} */
    it('Constructor with oauth password', function(done) {
      const oauth = {
        client_id: globalConfig.CLIENT_ID,
        client_secret: globalConfig.CLIENT_SECRET,
      };

      eloqua = new Eloqua(
        getOptions({
          oauth: oauth,
        }),
      );
      eloqua.assets.campaigns.get(null, assertSuccessful(done, function() {
        expect(eloqua.axiosOptions.headers.Authorization).to.eql('bearer 123');
        done();
      }));
    });
  });
});
