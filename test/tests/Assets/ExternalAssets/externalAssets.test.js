let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {ExternalAssets} */
describe('External Asset Tests', () => {
  /** @test {ExternalAssets#get} */
  it('External Asset Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.assets.externalAssets.get({ count: 1 }).then(externalAsset => {
          expect(externalAsset).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {ExternalAssets#get} */
  it('External Asset Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.externalAssets.get().then(externalAsset => {
          expect(externalAsset).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ExternalAssets#getOne} */
  it('External Asset Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.assets.externalAssets.get({ count: 1 }).then(externalAssets => {
          expect(externalAssets).to.be.an('Object');
          eloqua.assets.externalAssets.getOne(externalAssets.elements[0].id).then(externalAsset => {
            expect(externalAsset).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {ExternalAssets#getOne} */
  it('External Asset Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.assets.externalAssets.get({ count: 1 }).then(externalAssets => {
          expect(externalAssets).to.be.an('Object');
          eloqua.assets.externalAssets
            .getOne(externalAssets.elements[0].id, { depth: 'minimal' })
            .then(externalAsset => {
              expect(externalAsset).to.be.an('Object');
            });
        });
      })
      .then(done);
  });

  /** @test {ExternalAssets#getOne} */
  it('External Asset Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.externalAssets.getOne(1).then(externalAsset => {
          expect(externalAsset).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ExternalAssets#create} */
  it('External Asset Create', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.externalAssets.create(data).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request
            .respondWith({
              status: 200,
              response: data
            })
            .then(() => {
              expect(onFulfilled.getCall(0).args[0].data).to.eql(data);
            })
            .then(done);
        });
      });
    });
  });

  /** @test {ExternalAssets#create} */
  it('External Asset Create with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.externalAssets.create(data).then(externalAsset => {
          expect(externalAsset).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ExternalAssets#update} */
  it('External Asset Update', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.externalAssets.update(1, data).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request
            .respondWith({
              status: 200,
              response: data
            })
            .then(() => {
              expect(onFulfilled.getCall(0).args[0].data).to.eql(data);
            })
            .then(done);
        });
      });
    });
  });

  /** @test {ExternalAssets#update} */
  it('External Asset Update with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.externalAssets.update(1, data).then(externalAsset => {
          expect(externalAsset).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ExternalAssets#delete} */
  it('External Asset Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.externalAssets.delete(1).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request
            .respondWith({
              status: 200,
              response: 'Deleted.'
            })
            .then(() => {
              expect(onFulfilled.getCall(0).args[0].data).to.eql('Deleted.');
            })
            .then(done);
        });
      });
    });
  });

  /** @test {ExternalAssets#delete} */
  it('External Asset Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.externalAssets.delete(1).then(externalAsset => {
          expect(externalAsset).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  require('./externalAssetTypes.test');
});
