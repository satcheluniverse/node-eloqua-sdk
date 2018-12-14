let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {ExternalActivities} */
describe('External Activities Tests', () => {

  /** @test {ExternalActivities#getOne} */
  it('External Activities Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.externalActivities.getOne(1).then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {ExternalActivities#create} */
  it('External Activities Create', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.externalActivities.create(data).then(onFulfilled);
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

  /** @test {ExternalActivities#create} */
  it('External Activities Create with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.externalActivities.create(data).then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
