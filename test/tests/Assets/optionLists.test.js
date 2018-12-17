let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {OptionLists} */
describe('Option List Tests', () => {
  /** @test {OptionLists#get} */
  it('Option List Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.assets.optionLists.get({ count: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {OptionLists#get} */
  it('Option List Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.optionLists.get().then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {OptionLists#getOne} */
  it('Option List Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.assets.optionLists.get({ count: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.assets.optionLists.getOne(results.elements[0].id).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {OptionLists#getOne} */
  it('Option List Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.assets.optionLists.get({ count: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.assets.optionLists.getOne(results.elements[0].id, { depth: 'minimal' }).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {OptionLists#getOne} */
  it('Option List Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.optionLists.getOne(1).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {OptionLists#create} */
  it('Option List Create', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.optionLists.create(data).then(onFulfilled);
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

  /** @test {OptionLists#create} */
  it('Option List Create with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.optionLists.create(data).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {OptionLists#update} */
  it('Option List Update', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.optionLists.update(1, data).then(onFulfilled);
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

  /** @test {OptionLists#update} */
  it('Option List Update with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.optionLists.update(1, data).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {OptionLists#delete} */
  it('Option List Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.optionLists.delete(1).then(onFulfilled);
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

  /** @test {OptionLists#delete} */
  it('Option List Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.optionLists.delete(1).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });
});
