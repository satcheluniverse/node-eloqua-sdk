let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {ContentSections} */
describe('Content Section Tests', () => {
  /** @test {ContentSections#get} */
  it('Content Section Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.assets.contentSections.get({ count: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {ContentSections#get} */
  it('Content Section Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.contentSections.get().then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ContentSections#getOne} */
  it('Content Section Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.assets.contentSections.get({ count: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.assets.contentSections.getOne(results.elements[0].id).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {ContentSections#getOne} */
  it('Content Section Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.assets.contentSections.get({ count: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.assets.contentSections.getOne(results.elements[0].id, { depth: 'minimal' }).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {ContentSections#getOne} */
  it('Content Section Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.contentSections.getOne(1).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ContentSections#create} */
  it('Content Section Create', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.contentSections.create(data).then(onFulfilled);
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

  /** @test {ContentSections#create} */
  it('Content Section Create with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.contentSections.create(data).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ContentSections#update} */
  it('Content Section Update', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.contentSections.update(1, data).then(onFulfilled);
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

  /** @test {ContentSections#update} */
  it('Content Section Update with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.contentSections.update(1, data).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ContentSections#delete} */
  it('Content Section Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.contentSections.delete(1).then(onFulfilled);
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

  /** @test {ContentSections#delete} */
  it('Content Section Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.contentSections.delete(1).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });
});
