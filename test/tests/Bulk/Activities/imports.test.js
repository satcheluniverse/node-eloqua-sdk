let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {ActivitiesImports} */
describe('Activities Import Tests', () => {
  /** @test {ActivitiesImports#get} */
  it('Activities Import Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.activities.imports.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {ActivitiesImports#get} */
  it('Activities Import Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.activities.imports.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ActivitiesImports#getOne} */
  it('Activities Import Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.activities.imports.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.activities.imports
            .getOne(results.items[0].uri.replace('/activities/imports/', ''))
            .then(result => {
              expect(result).to.be.an('Object');
            });
        });
      })
      .then(done);
  });

  /** @test {ActivitiesImports#getOne} */
  it('Activities Import Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.activities.imports.getOne(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ActivitiesImports#create} */
  it('Activities Import Create', done => {
    let data = {
      name: 'Test',
      fields: {
        C_EmailAddress: '{{Activity.Contact.Field(C_EmailAddress)}}',
        CampaignID: '{{Activity.Campaign.Id}}',
        AssetName: '{{Activity.Asset.Name}}',
        AssetType: '{{Activity.Asset.Type}}',
        AssetDate: '{{Activity.CreatedAt}}',
        ActivityType: '{{Activity.Type}}'
      }
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.activities.imports.create(data).then(onFulfilled);
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

  /** @test {ActivitiesImports#create} */
  it('Activities Import Create with Error', done => {
    let data = {
      name: 'Test',
      fields: {
        C_EmailAddress: '{{Activity.Contact.Field(C_EmailAddress)}}',
        CampaignID: '{{Activity.Campaign.Id}}',
        AssetName: '{{Activity.Asset.Name}}',
        AssetType: '{{Activity.Asset.Type}}',
        AssetDate: '{{Activity.CreatedAt}}',
        ActivityType: '{{Activity.Type}}'
      }
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.activities.imports.create(data).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ActivitiesImports#update} */
  it('Activities Import Update', done => {
    let data = {
      name: 'Test',
      fields: {
        C_EmailAddress: '{{Activity.Contact.Field(C_EmailAddress)}}',
        CampaignID: '{{Activity.Campaign.Id}}',
        AssetName: '{{Activity.Asset.Name}}',
        AssetType: '{{Activity.Asset.Type}}',
        AssetDate: '{{Activity.CreatedAt}}',
        ActivityType: '{{Activity.Type}}'
      }
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.activities.imports.update(1, data).then(onFulfilled);
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

  /** @test {ActivitiesImports#update} */
  it('Activities Import Update with Error', done => {
    let data = {
      name: 'Test',
      fields: {
        C_EmailAddress: '{{Activity.Contact.Field(C_EmailAddress)}}',
        CampaignID: '{{Activity.Campaign.Id}}',
        AssetName: '{{Activity.Asset.Name}}',
        AssetType: '{{Activity.Asset.Type}}',
        AssetDate: '{{Activity.CreatedAt}}',
        ActivityType: '{{Activity.Type}}'
      }
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.activities.imports.update(1, data).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ActivitiesImports#delete} */
  it('Activities Import Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.activities.imports.delete(1).then(onFulfilled);
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

  /** @test {ActivitiesImports#delete} */
  it('Activities Import Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.activities.imports.delete(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ActivitiesImports#uploadData} */
  it('Activities Import Upload Data with Querystring', done => {
    let data = [
      {
        C_EmailAddress: 'test@example.com',
        CampaignID: '1',
        AssetName: 'Test',
        AssetType: 'Campaign',
        AssetDate: '1',
        ActivityType: 'CampaignResponse'
      }
    ];
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.activities.imports.uploadData(1, data).then(onFulfilled);
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

  /** @test {ActivitiesImports#uploadData} */
  it('Activities Import Upload Data with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.activities.imports.uploadData(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ActivitiesImports#deleteData} */
  it('Activities Import Delete Data', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.activities.imports.deleteData(1).then(onFulfilled);
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

  /** @test {ActivitiesImports#deleteData} */
  it('Activities Import Delete Data with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.activities.imports.deleteData(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
