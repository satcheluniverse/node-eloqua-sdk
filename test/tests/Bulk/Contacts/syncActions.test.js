let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {ContactSyncActions} */
describe('Contact Sync Action Tests', () => {
  /** @test {ContactSyncActions#get} */
  it('Contact Sync Action Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.syncActions.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {ContactSyncActions#get} */
  it('Contact Sync Action Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.syncActions.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ContactSyncActions#getOne} */
  it('Contact Sync Action Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.syncActions.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.contacts.syncActions
            .getOne(results.items[0].uri.replace('/contacts/syncActions/', ''))
            .then(result => {
              expect(result).to.be.an('Object');
            });
        });
      })
      .then(done);
  });

  /** @test {ContactSyncActions#getOne} */
  it('Contact Sync Action Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.syncActions.getOne(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ContactSyncActions#create} */
  it('Contact Sync Action Create', done => {
    let data = {
      name: 'Test',
      fields: {
        Id: '{{Contact.Id}}'
      },
      identifierFieldName: 'Id',
      syncActions: [
        {
          destination: '{{ContactList[1]}}',
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
        eloqua.bulk.contacts.syncActions.create(data).then(onFulfilled);
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

  /** @test {ContactSyncActions#create} */
  it('Contact Sync Action Create with Error', done => {
    let data = {
      name: 'Test',
      fields: {
        Id: '{{Contact.Id}}'
      },
      identifierFieldName: 'Id',
      syncActions: [
        {
          destination: '{{ContactList[1]}}',
          action: 'add'
        }
      ],
      isSyncTriggeredOnImport: false
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.syncActions.create(data).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ContactSyncActions#update} */
  it('Contact Sync Action Update', done => {
    let data = {
      name: 'Test',
      fields: {
        Id: '{{Contact.Id}}'
      },
      identifierFieldName: 'Id',
      syncActions: [
        {
          destination: '{{ContactList[1]}}',
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
        eloqua.bulk.contacts.syncActions.update(1, data).then(onFulfilled);
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

  /** @test {ContactSyncActions#update} */
  it('Contact Sync Action Update with Error', done => {
    let data = {
      name: 'Test',
      fields: {
        Id: '{{Contact.Id}}'
      },
      identifierFieldName: 'Id',
      syncActions: [
        {
          destination: '{{ContactList[1]}}',
          action: 'add'
        }
      ],
      isSyncTriggeredOnImport: false
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.syncActions.update(1, data).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ContactSyncActions#delete} */
  it('Contact Sync Action Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.contacts.syncActions.delete(1).then(onFulfilled);
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

  /** @test {ContactSyncActions#delete} */
  it('Contact Sync Action Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.syncActions.delete(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ContactSyncActions#uploadData} */
  it('Contact Sync Action Upload Data with Querystring', done => {
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
        eloqua.bulk.contacts.syncActions.uploadData(1, data).then(onFulfilled);
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

  /** @test {ContactSyncActions#uploadData} */
  it('Contact Sync Action Upload Data with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.syncActions.uploadData(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ContactSyncActions#deleteData} */
  it('Contact Sync Action Delete Data', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.contacts.syncActions.deleteData(1).then(onFulfilled);
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

  /** @test {ContactSyncActions#deleteData} */
  it('Contact Sync Action Delete Data with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.syncActions.deleteData(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
