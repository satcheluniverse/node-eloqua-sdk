let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {Contacts} */
describe('Contact Tests', () => {
  /** @test {Contacts#get} */
  it('Contact Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.get({ count: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {Contacts#get} */
  it('Contact Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.get().then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {Contacts#getOne} */
  it('Contact Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.get({ count: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.data.contacts.getOne(results.elements[0].id).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {Contacts#getOne} */
  it('Contact Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.get({ count: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.data.contacts.getOne(results.elements[0].id, { depth: 'minimal' }).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {Contacts#getOne} */
  it('Contact Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.getOne(1).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {Contacts#create} */
  it('Contact Create', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.contacts.create(data).then(onFulfilled);
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

  /** @test {Contacts#create} */
  it('Contact Create with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.create(data).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {Contacts#update} */
  it('Contact Update', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.contacts.update(1, data).then(onFulfilled);
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

  /** @test {Contacts#update} */
  it('Contact Update with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.update(1, data).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {Contacts#delete} */
  it('Contact Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.contacts.delete(1).then(onFulfilled);
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

  /** @test {Contacts#delete} */
  it('Contact Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.delete(1).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  require('./contactFields.test');
  require('./contactLists.test');
  require('./contactSegments.test');
});
