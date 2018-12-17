let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {LandingPages} */
describe('Landing Page Tests', () => {
  /** @test {LandingPages#get} */
  it('Landing Page Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.assets.landingPages.get({ count: 1 }).then(landingPage => {
          expect(landingPage).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {LandingPages#get} */
  it('Landing Page Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.landingPages.get().then(landingPage => {
          expect(landingPage).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {LandingPages#getOne} */
  it('Landing Page Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.assets.landingPages.get({ count: 1 }).then(landingPages => {
          expect(landingPages).to.be.an('Object');
          eloqua.assets.landingPages.getOne(landingPages.elements[0].id).then(landingPage => {
            expect(landingPage).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {LandingPages#getOne} */
  it('Landing Page Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.assets.landingPages.get({ count: 1 }).then(landingPages => {
          expect(landingPages).to.be.an('Object');
          eloqua.assets.landingPages.getOne(landingPages.elements[0].id, { depth: 'minimal' }).then(landingPage => {
            expect(landingPage).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {LandingPages#getOne} */
  it('Landing Page Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.landingPages.getOne(1).then(landingPage => {
          expect(landingPage).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {LandingPages#create} */
  it('Landing Page Create', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.landingPages.create(data).then(onFulfilled);
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

  /** @test {LandingPages#create} */
  it('Landing Page Create with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.landingPages.create(data).then(landingPage => {
          expect(landingPage).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {LandingPages#update} */
  it('Landing Page Update', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.landingPages.update(1, data).then(onFulfilled);
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

  /** @test {LandingPages#update} */
  it('Landing Page Update with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.landingPages.update(1, data).then(landingPage => {
          expect(landingPage).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {LandingPages#delete} */
  it('Landing Page Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.landingPages.delete(1).then(onFulfilled);
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

  /** @test {LandingPages#delete} */
  it('Landing Page Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.landingPages.delete(1).then(landingPage => {
          expect(landingPage).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });
});
