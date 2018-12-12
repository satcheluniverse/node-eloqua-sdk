let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {EmailDeployments} */
describe('Email Deployment Tests', () => {

  /** @test {EmailDeployments#getOne} */
  it('Email Deployment Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.deployments.getOne(1).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailDeployments#getOne} */
  it('Email Deployment Get One with invalid Id and querystring', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.deployments.getOne(1, {depth: 'complete'}).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailDeployments#create} */
  it('Email Deployment Create with querystring', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.emails.deployments.create(data, {preMerge: 'true'}).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: data
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql(data);
          }).then(done);
        });
      });
    });
  });

  /** @test {EmailDeployments#create} */
  it('Email Deployment Create with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.deployments.create(data).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
