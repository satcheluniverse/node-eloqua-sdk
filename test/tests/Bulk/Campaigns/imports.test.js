let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {CampaignResponsesImports} */
describe('Campaign Responses Import Tests', () => {

  /** @test {CampaignResponsesImports#get} */
  it('Campaign Responses Import Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.campaignResponses.imports.get({limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {CampaignResponsesImports#get} */
  it('Campaign Responses Import Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.campaignResponses.imports.get().then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CampaignResponsesImports#getOne} */
  it.skip('Campaign Responses Import Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.campaignResponses.imports.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.campaignResponses.imports.getOne(results.items[0].uri.replace('/campaignResponses/imports/','')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {CampaignResponsesImports#getOne} */
  it('Campaign Responses Import Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.campaignResponses.imports.getOne(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CampaignResponsesImports#create} */
  it('Campaign Responses Import Create', (done) => {
    let data = {
      name: 'Test',
      fields: {
        CampaignResponseId: '{{CampaignResponse.Id}}',
        CampaignMembershipId: '{{CampaignResponse.Field(IntegrationReturnValue)}}'
      },
      identifierFieldName: 'CampaignResponseId',
      serviceInstanceId: '7BE704D3-AF60-4775-AD41-6E8D0A5AB212'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.campaignResponses.imports.create(data).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: data
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql(data);
          }).then(done);
        });
      });
    });
  });

  /** @test {CampaignResponsesImports#create} */
  it('Campaign Responses Import Create with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        CampaignResponseId: '{{CampaignResponse.Id}}',
        CampaignMembershipId: '{{CampaignResponse.Field(IntegrationReturnValue)}}'
      },
      identifierFieldName: 'CampaignResponseId',
      serviceInstanceId: '7BE704D3-AF60-4775-AD41-6E8D0A5AB212'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.campaignResponses.imports.create(data).then((result) => {
        expect(result).to.eql('400: There was a validation error.');
      });
    }).then(done);
  });

  /** @test {CampaignResponsesImports#update} */
  it('Campaign Responses Import Update', (done) => {
    let data = {
      name: 'Test',
      fields: {
        CampaignResponseId: '{{CampaignResponse.Id}}',
        CampaignMembershipId: '{{CampaignResponse.Field(IntegrationReturnValue)}}'
      },
      identifierFieldName: 'CampaignResponseId',
      serviceInstanceId: '7BE704D3-AF60-4775-AD41-6E8D0A5AB212'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.campaignResponses.imports.update(1, data).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: data
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql(data);
          }).then(done);
        });
      });
    });
  });

  /** @test {CampaignResponsesImports#update} */
  it('Campaign Responses Import Update with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        CampaignResponseId: '{{CampaignResponse.Id}}',
        CampaignMembershipId: '{{CampaignResponse.Field(IntegrationReturnValue)}}'
      },
      identifierFieldName: 'CampaignResponseId',
      serviceInstanceId: '7BE704D3-AF60-4775-AD41-6E8D0A5AB212'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.campaignResponses.imports.update(1, data).then((result) => {
        expect(result).to.eql('400: There was a validation error.');
      });
    }).then(done);
  });

  /** @test {CampaignResponsesImports#delete} */
  it('Campaign Responses Import Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.campaignResponses.imports.delete(1).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: 'Deleted.'
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql('Deleted.');
          }).then(done);
        });
      });
    });
  });

  /** @test {CampaignResponsesImports#delete} */
  it('Campaign Responses Import Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.campaignResponses.imports.delete(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CampaignResponsesImports#uploadData} */
  it('Campaign Responses Import Upload Data with Querystring', (done) => {
    let data = [{
      CampaignResponseId: 1,
      CampaignMembershipId: 1
    }];
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.campaignResponses.imports.uploadData(1, data).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: 'Deleted.'
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql('Deleted.');
          }).then(done);
        });
      });
    });
  });

  /** @test {CampaignResponsesImports#uploadData} */
  it('Campaign Responses Import Upload Data with Error', (done) => {
    let data = [{
      CampaignResponseId: 1,
      CampaignMembershipId: 1
    }];
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.campaignResponses.imports.uploadData(1, data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CampaignResponsesImports#deleteData} */
  it('Campaign Responses Import Delete Data', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.campaignResponses.imports.deleteData(1).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: 'Deleted.'
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql('Deleted.');
          }).then(done);
        });
      });
    });
  });

  /** @test {CampaignResponsesImports#deleteData} */
  it('Campaign Responses Import Delete Data with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.campaignResponses.imports.deleteData(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
