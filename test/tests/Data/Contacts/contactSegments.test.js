let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {ContactSegmnets} */
describe('Contact Segmnet Tests', () => {
  /** @test {ContactSegmnets#get} */
  it('Contact Segmnet Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.segments.get({ count: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {ContactSegmnets#get} */
  it('Contact Segmnet Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.segments.get().then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ContactSegmnets#getOne} */
  it('Contact Segmnet Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.segments.get({ count: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.data.contacts.segments.getOne(results.elements[0].id).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {ContactSegmnets#getOne} */
  it('Contact Segmnet Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.segments.get({ count: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.data.contacts.segments.getOne(results.elements[0].id, { depth: 'minimal' }).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {ContactSegmnets#getOne} */
  it('Contact Segmnet Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.segments.getOne(1).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ContactSegmnets#create} */
  it('Contact Segmnet Create', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.contacts.segments.create(data).then(onFulfilled);
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

  /** @test {ContactSegmnets#create} */
  it('Contact Segmnet Create with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.segments.create(data).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ContactSegmnets#update} */
  it('Contact Segmnet Update', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.contacts.segments.update(1, data).then(onFulfilled);
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

  /** @test {ContactSegmnets#update} */
  it('Contact Segmnet Update with Error', done => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.segments.update(1, data).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {ContactSegmnets#delete} */
  it('Contact Segmnet Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.contacts.segments.delete(1).then(onFulfilled);
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

  /** @test {ContactSegmnets#delete} */
  it('Contact Segmnet Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.contacts.segments.delete(1).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });
});
