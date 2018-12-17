let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {EventExports} */
describe('Event Export Tests', () => {
  let parentId;

  before(done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.events
        .get({ count: 1 })
        .then(customObject => {
          parentId = customObject.items[0].uri.replace('/events/', '');
        })
        .then(done);
    });
  });

  /** @test {EventExports#get} */
  it('Event Export Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.events.exports.get(parentId, { limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {EventExports#get} */
  it('Event Export Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.events.exports.get(parentId).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {EventExports#getOne} */
  it('Event Export Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.events.exports.get(parentId, { limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.events.exports
            .getOne(parentId, results.items[0].uri.replace(`/events/${parentId}/exports/`, ''))
            .then(result => {
              expect(result).to.be.an('Object');
            });
        });
      })
      .then(done);
  });

  /** @test {EventExports#getOne} */
  it('Event Export Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.events.exports.getOne(parentId, 1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {EventExports#create} */
  it('Event Export Create', done => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{Event[${parentId}].ExternalId}}`
      }
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.events.exports.create(parentId, data).then(onFulfilled);
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

  /** @test {EventExports#create} */
  it('Event Export Create with Error', done => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{Event[${parentId}].ExternalId}}`
      }
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.events.exports.create(parentId, data).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {EventExports#update} */
  it('Event Export Update', done => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{Event[${parentId}].ExternalId}}`
      }
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.events.exports.update(parentId, 1, data).then(onFulfilled);
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

  /** @test {EventExports#update} */
  it('Event Export Update with Error', done => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{Event[${parentId}].ExternalId}}`
      }
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.events.exports.update(parentId, 1, data).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {EventExports#delete} */
  it('Event Export Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.events.exports.delete(parentId, 1).then(onFulfilled);
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

  /** @test {EventExports#delete} */
  it('Event Export Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.events.exports.delete(parentId, 1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {EventExports#getData} */
  it('Event Export Get Data', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.events.exports.get(parentId, { limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.events.exports
            .getData(parentId, results.items[0].uri.replace(`/events/${parentId}/exports/`, ''))
            .then(result => {
              expect(result).to.be.an('Object');
            });
        });
      })
      .then(done);
  });

  /** @test {EventExports#getData} */
  it('Event Export Get Data with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.events.exports.get(parentId, { limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.events.exports
            .getData(parentId, results.items[0].uri.replace(`/events/${parentId}/exports/`, ''), { limit: 1 })
            .then(result => {
              expect(result).to.be.an('Object');
            });
        });
      })
      .then(done);
  });

  /** @test {EventExports#getData} */
  it('Event Export Get Data with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.events.exports.getData(parentId, 1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {EventExports#deleteData} */
  it('Event Export Delete Data', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.events.exports.deleteData(parentId, 1).then(onFulfilled);
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

  /** @test {EventExports#deleteData} */
  it('Event Export Delete Data with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.events.exports.deleteData(parentId, 1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
