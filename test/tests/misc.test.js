let common = require('../common');
let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let globals = common.globals;

/** @test {EloquaApi} */
describe('Misc Tests', () => {
  /** @test {EloquaApi#setHeaders} */
  it('Set Headers', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.setHeaders('Test', 'Test');
        expect(eloqua.request.defaults.headers['Test']).to.eql('Test');
      })
      .then(done);
  });

  /** @test {EloquaApi#getBaseURL} */
  it('Get baseURL', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.getBaseURL().then(() => {
          expect(eloqua.request.defaults.baseURL).to.eql(globals.ELOQUA_BASEURL);
        });
      })
      .then(done);
  });

  /** @test {EloquaApi#getBaseURL} */
  it('Get baseURL with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.getBaseURL().then(() => {
          expect(eloqua.request.defaults.baseURL).to.eql('https://secure.eloqua.com');
        });
      })
      .then(done);
  });

  /** @test {EloquaApi#getBaseURL} */
  it('Set baseURL after init', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.request.defaults.baseURL = null;

        eloqua.assets.campaigns.get().then(campaign => {
          expect(campaign).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {EloquaApi#_throwError} */
  it('Set invalid baseURL after init', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.request.defaults.baseURL = '/';

        eloqua.assets.campaigns.get().then(campaign => {
          expect(campaign).to.eql('Error in request');
        });
      })
      .then(done);
  });

  /** @test {EloquaApi#_throwError} */
  it('Set invalid request after init', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.request = null;

        eloqua.assets.campaigns.get().then(campaign => {
          expect(campaign).to.eql('Cannot read property \'defaults\' of null');
        });
      })
      .then(done);
  });

  /** @test {EloquaApi#_request} */
  it('Set invalid request after init', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.create({ syncedInstanceUri: '/activities/exports/232' }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });
});
