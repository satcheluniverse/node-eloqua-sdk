let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {AccountSyncActions} */
describe('Account Sync Action Tests', () => {
  /** @test {AccountSyncActions#get} */
  it('Account Sync Action Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.accounts.syncActions.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {AccountSyncActions#get} */
  it('Account Sync Action Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.accounts.syncActions.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {AccountSyncActions#getOne} */
  it('Account Sync Action Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.accounts.syncActions.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.accounts.syncActions
            .getOne(results.items[0].uri.replace('/accounts/syncActions/', ''))
            .then(result => {
              expect(result).to.be.an('Object');
            });
        });
      })
      .then(done);
  });

  /** @test {AccountSyncActions#getOne} */
  it('Account Sync Action Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.accounts.syncActions.getOne(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {AccountSyncActions#create} */
  it('Account Sync Action Create', done => {
    let data = {
      name: 'Test',
      fields: {
        CompanyName: '{{Account.Field(M_CompanyName)}}'
      },
      identifierFieldName: 'CompanyName',
      syncActions: [
        {
          destination: '{{AccountList[1]}}',
          action: 'add'
        }
      ],
      isSyncTriggeredOnImport: false
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.accounts.syncActions.create(data).then(onFulfilled);
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

  /** @test {AccountSyncActions#create} */
  it('Account Sync Action Create with Error', done => {
    let data = {
      name: 'Test',
      fields: {
        CompanyName: '{{Account.Field(M_CompanyName)}}'
      },
      identifierFieldName: 'CompanyName',
      syncActions: [
        {
          destination: '{{AccountList[1]}}',
          action: 'add'
        }
      ],
      isSyncTriggeredOnImport: false
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.accounts.syncActions.create(data).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {AccountSyncActions#update} */
  it('Account Sync Action Update', done => {
    let data = {
      name: 'Test',
      fields: {
        CompanyName: '{{Account.Field(M_CompanyName)}}'
      },
      identifierFieldName: 'CompanyName',
      syncActions: [
        {
          destination: '{{AccountList[1]}}',
          action: 'add'
        }
      ],
      isSyncTriggeredOnImport: false
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.accounts.syncActions.update(1, data).then(onFulfilled);
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

  /** @test {AccountSyncActions#update} */
  it('Account Sync Action Update with Error', done => {
    let data = {
      name: 'Test',
      fields: {
        CompanyName: '{{Account.Field(M_CompanyName)}}'
      },
      identifierFieldName: 'CompanyName',
      syncActions: [
        {
          destination: '{{AccountList[1]}}',
          action: 'add'
        }
      ],
      isSyncTriggeredOnImport: false
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.accounts.syncActions.update(1, data).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {AccountSyncActions#delete} */
  it('Account Sync Action Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.accounts.syncActions.delete(1).then(onFulfilled);
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

  /** @test {AccountSyncActions#delete} */
  it('Account Sync Action Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.accounts.syncActions.delete(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {AccountSyncActions#uploadData} */
  it('Account Sync Action Upload Data with Querystring', done => {
    let data = [
      {
        CompanyName: 'Test'
      }
    ];
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.accounts.syncActions.uploadData(1, data).then(onFulfilled);
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

  /** @test {AccountSyncActions#uploadData} */
  it('Account Sync Action Upload Data with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.accounts.syncActions.uploadData(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {AccountSyncActions#deleteData} */
  it('Account Sync Action Delete Data', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.accounts.syncActions.deleteData(1).then(onFulfilled);
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

  /** @test {AccountSyncActions#deleteData} */
  it('Account Sync Action Delete Data with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.accounts.syncActions.deleteData(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
