let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {Images} */
describe('Image Tests', () => {

  /** @test {Images#get} */
  it('Image Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.images.get({count: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {Images#get} */
  it('Image Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.assets.images.get().then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Images#getOne} */
  it('Image Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.images.get({count: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.assets.images.getOne(results.elements[0].id).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {Images#getOne} */
  it('Image Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.images.get({count: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.assets.images.getOne(results.elements[0].id, {depth: 'minimal'}).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {Images#getOne} */
  it('Image Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.images.getOne(1).then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Images#update} */
  it('Image Update', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.images.update(1, data).then(onFulfilled);
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

  /** @test {Images#update} */
  it('Image Update with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.images.update(1, data).then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Images#delete} */
  it('Image Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.images.delete(1).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: 'Deleted.'
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql('Deleted.');
          }).then(done);
        });
      });
    });
  });

  /** @test {Images#delete} */
  it('Image Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.images.delete(1).then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
