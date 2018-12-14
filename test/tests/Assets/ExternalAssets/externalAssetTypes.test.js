let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {ExternalAssetTypes} */
describe('External Asset Type Tests', () => {

  /** @test {ExternalAssetTypes#get} */
  it('External Asset Type Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.externalAssets.types.get({count: 1}).then((externalAssetType) => {
        expect(externalAssetType).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {ExternalAssetTypes#get} */
  it('External Asset Type Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.assets.externalAssets.types.get().then((externalAssetType) => {
        expect(externalAssetType).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {ExternalAssetTypes#getOne} */
  it('External Asset Type Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.externalAssets.types.get({count: 1}).then((externalAssetTypes) => {
        expect(externalAssetTypes).to.be.an('Object');
        eloqua.assets.externalAssets.types.getOne(externalAssetTypes.elements[0].id).then((externalAssetType) => {
          expect(externalAssetType).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {ExternalAssetTypes#getOne} */
  it('External Asset Type Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.externalAssets.types.get({count: 1}).then((externalAssetTypes) => {
        expect(externalAssetTypes).to.be.an('Object');
        eloqua.assets.externalAssets.types.getOne(externalAssetTypes.elements[0].id, {depth: 'minimal'}).then((externalAssetType) => {
          expect(externalAssetType).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {ExternalAssetTypes#getOne} */
  it('External Asset Type Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.externalAssets.types.getOne(1).then((externalAssetType) => {
        expect(externalAssetType).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {ExternalAssetTypes#create} */
  it('External Asset Type Create', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.externalAssets.types.create(data).then(onFulfilled);
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

  /** @test {ExternalAssetTypes#create} */
  it('External Asset Type Create with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.externalAssets.types.create(data).then((externalAssetType) => {
        expect(externalAssetType).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {ExternalAssetTypes#update} */
  it('External Asset Type Update', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.externalAssets.types.update(1, data).then(onFulfilled);
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

  /** @test {ExternalAssetTypes#update} */
  it('External Asset Type Update with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.externalAssets.types.update(1, data).then((externalAssetType) => {
        expect(externalAssetType).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {ExternalAssetTypes#delete} */
  it('External Asset Type Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.externalAssets.types.delete(1).then(onFulfilled);
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

  /** @test {ExternalAssetTypes#delete} */
  it('External Asset Type Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.externalAssets.types.delete(1).then((externalAssetType) => {
        expect(externalAssetType).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
