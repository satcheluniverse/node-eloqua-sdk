let common = require('../common');
let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let globals = common.globals;

/** @test {EloquaApi} */
describe('Constructor Tests', () => {
  /** @test {EloquaApi#init} */
  it('Constructor functions properly', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        expect(eloqua.request.defaults.baseURL).to.eql(globals.ELOQUA_BASEURL);
        expect(eloqua.baseOptions.baseURL).to.eql(globals.ELOQUA_BASEURL);
        expect(eloqua.baseOptions.auth.username).to.eql(globals.ELOQUA_SITENAME + '\\' + globals.ELOQUA_USERNAME);
        expect(eloqua.baseOptions.auth.password).to.eql(globals.ELOQUA_PASSWORD);
        expect(eloqua.restVersion).to.eql('2.0');
        expect(eloqua.bulkVersion).to.eql('2.0');
        expect(eloqua.request).to.be.a('function');
        expect(eloqua.apiCalls).to.eql(0);
      })
      .then(done);
  });

  /** @test {EloquaApi#getBaseURL} */
  it('Constructor with null baseURL', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null }));
    eloqua
      .init()
      .then(() => {
        expect(eloqua.baseOptions.baseURL).to.eql(globals.ELOQUA_BASEURL);
        expect(eloqua.request.defaults.baseURL).to.eql(globals.ELOQUA_BASEURL);
      })
      .then(done);
  });

  /** @test {EloquaApi#getBaseURL} */
  it('Constructor with null baseURL and null username', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        expect(eloqua.baseOptions.baseURL).to.eql('https://secure.eloqua.com');
        expect(eloqua.request.defaults.baseURL).to.eql('https://secure.eloqua.com');
      })
      .then(done);
  });

  /** @test {EloquaApi#constructor} */
  it('Constructor with 1.0 versions', done => {
    let eloqua = new EloquaApi(getOptions({ restVersion: '1.0', bulkVersion: '1.0' }));
    eloqua
      .init()
      .then(() => {
        expect(eloqua.restVersion).to.eql('1.0');
        expect(eloqua.bulkVersion).to.eql('1.0');
      })
      .then(done);
  });

  /** @test {EloquaApi#init} */
  it('Constructor with timeout', done => {
    let eloqua = new EloquaApi(getOptions({ timeout: 3000 }));
    eloqua
      .init()
      .then(() => {
        expect(eloqua.request.defaults.timeout).to.eql(3000);
      })
      .then(done);
  });

  /** @test {EloquaApi#setHeaders} */
  it('Constructor with oauth token', done => {
    const oauth = {
      token_type: 'bearer',
      access_token: 'testtoken'
    };

    let eloqua = new EloquaApi(
      getOptions({
        oauth: oauth
      })
    );
    eloqua
      .init()
      .then(() => {
        expect(eloqua.request.defaults.headers['Authorization']).to.eql(oauth.token_type + ' ' + oauth.access_token);
      })
      .then(done);
  });

  /** @test {EloquaApi#getPasswordBearer} */
  it('Constructor with oauth password', function(done) {
    this.timeout(240000);
    this.slow(180000);
    const oauth = {
      client_id: globals.CLIENT_ID,
      client_secret: globals.CLIENT_SECRET
    };

    let eloqua = new EloquaApi(
      getOptions({
        oauth: oauth
      })
    );
    eloqua
      .init()
      .then(() => {
        expect(eloqua.request.defaults.headers['Authorization']).to.be.a('string');
      })
      .then(done);
  });

  /** @test {EloquaApi#getPasswordBearer} */
  it('Constructor with oauth password with delay', function(done) {
    this.timeout(240000);
    this.slow(180000);
    const oauth = {
      client_id: globals.CLIENT_ID,
      client_secret: globals.CLIENT_SECRET
    };

    let eloqua = new EloquaApi(
      getOptions({
        oauth: oauth
      })
    );
    eloqua
      .init()
      .then(() => {
        expect(eloqua.request.defaults.headers['Authorization']).to.be.a('string');
        expect(eloqua.lastError.response.status).to.eql(429);
      })
      .then(done);
  });

  /** @test {EloquaApi#getPasswordBearer} */
  it('Constructor with invalid oauth password', done => {
    const oauth = {
      client_id: globals.CLIENT_ID,
      client_secret: globals.CLIENT_SECRET
    };

    let eloqua = new EloquaApi(
      getOptions({
        oauth: oauth,
        sitename: 'test'
      })
    );
    eloqua
      .init()
      .then(() => {
        expect(eloqua.request.defaults.headers['Authorization']).to.be.a('undefined');
      })
      .then(done);
  });
});
