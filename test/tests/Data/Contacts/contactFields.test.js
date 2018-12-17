let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {ContactFields} */
describe('Contact Field Tests', () => {
  /** @test {ContactFields#get} */
  it('Contact Field Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.fields.get({ count: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {ContactFields#get} */
  it('Contact Field Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.fields.get().then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ContactFields#getOne} */
  it('Contact Field Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.fields.get({ count: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.data.contacts.fields.getOne(results.elements[0].id).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {ContactFields#getOne} */
  it('Contact Field Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.fields.get({ count: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.data.contacts.fields.getOne(results.elements[0].id, { depth: 'minimal' }).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {ContactFields#getOne} */
  it('Contact Field Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.fields.getOne(1).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ContactFields#create} */
  it('Contact Field Create', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.contacts.fields.create(data).then(onFulfilled);
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

  /** @test {ContactFields#create} */
  it('Contact Field Create with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.fields.create(data).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ContactFields#update} */
  it('Contact Field Update', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.contacts.fields.update(1, data).then(onFulfilled);
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

  /** @test {ContactFields#update} */
  it('Contact Field Update with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.fields.update(1, data).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ContactFields#delete} */
  it('Contact Field Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.contacts.fields.delete(1).then(onFulfilled);
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

  /** @test {ContactFields#delete} */
  it('Contact Field Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.fields.delete(1).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });
});
