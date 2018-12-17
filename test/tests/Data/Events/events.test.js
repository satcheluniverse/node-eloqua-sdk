let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {Events} */
describe('Event Tests', () => {
  /** @test {Events#get} */
  it('Event Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.data.events.get({ count: 1 }).then(event => {
          expect(event).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {Events#get} */
  it('Event Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.events.get().then(event => {
          expect(event).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {Events#getOne} */
  it('Event Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.data.events.get({ count: 1 }).then(events => {
          expect(events).to.be.an('Object');
          eloqua.data.events.getOne(events.elements[0].id).then(event => {
            expect(event).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {Events#getOne} */
  it('Event Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.data.events.get({ count: 1 }).then(events => {
          expect(events).to.be.an('Object');
          eloqua.data.events.getOne(events.elements[0].id, { depth: 'minimal' }).then(event => {
            expect(event).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {Events#getOne} */
  it('Event Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.events.getOne(1).then(event => {
          expect(event).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {Events#create} */
  it('Event Create', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.events.create(data).then(onFulfilled);
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

  /** @test {Events#create} */
  it('Event Create with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.events.create(data).then(event => {
          expect(event).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {Events#update} */
  it('Event Update', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.events.update(1, data).then(onFulfilled);
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

  /** @test {Events#update} */
  it('Event Update with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.events.update(1, data).then(event => {
          expect(event).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {Events#delete} */
  it('Event Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.events.delete(1).then(onFulfilled);
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

  /** @test {Events#delete} */
  it('Event Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.events.delete(1).then(event => {
          expect(event).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  require('./eventRegistrants.test');
});
