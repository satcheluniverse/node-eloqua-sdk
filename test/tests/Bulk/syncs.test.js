let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {Syncs} */
describe('Sync Tests', () => {
  /** @test {Syncs#get} */
  it('Sync Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {Syncs#get} */
  it('Sync Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {Syncs#getOne} */
  it('Sync Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.syncs.getOne(results.items[0].uri.replace('/syncs/', '')).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {Syncs#getOne} */
  it('Sync Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.getOne(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {Syncs#create} */
  it('Sync Create', done => {
    let data = {
      syncedInstanceUri: '/contacts/exports/1'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.syncs.create(data).then(onFulfilled);
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

  /** @test {Syncs#create} */
  it('Sync Create with Error', done => {
    let data = {
      syncedInstanceUri: '/contacts/exports/1'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.create(data).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {Syncs#delete} */
  it('Sync Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.syncs.delete(1).then(onFulfilled);
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

  /** @test {Syncs#delete} */
  it('Sync Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.delete(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {Syncs#getLogs} */
  it('Sync Get Logs', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.syncs.getLogs(results.items[0].uri.replace('/syncs/', '')).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {Syncs#getLogs} */
  it('Sync Get Logs with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.getLogs(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {Syncs#getData} */
  it('Sync Get Data', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.syncs.getData(results.items[0].uri.replace('/syncs/', '')).then(result => {
            expect(result).to.eql('410: The requested resource is no longer available.');
          });
        });
      })
      .then(done);
  });

  /** @test {Syncs#getData} */
  it('Sync Get Data with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.syncs.getData(results.items[0].uri.replace('/syncs/', ''), { limit: 1 }).then(result => {
            expect(result).to.eql('410: The requested resource is no longer available.');
          });
        });
      })
      .then(done);
  });

  /** @test {Syncs#getData} */
  it('Sync Get Data with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.getData(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {Syncs#getRejects} */
  it('Sync Get Rejects', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.syncs.getRejects(results.items[0].uri.replace('/syncs/', '')).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {Syncs#getRejects} */
  it('Sync Get Rejects with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.syncs.getRejects(results.items[0].uri.replace('/syncs/', ''), { limit: 1 }).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {Syncs#getRejects} */
  it('Sync Get Rejects with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncs.getRejects(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
