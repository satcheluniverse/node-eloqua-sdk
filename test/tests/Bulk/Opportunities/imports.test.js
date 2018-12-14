let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {OpportunitiesImports} */
describe('Opportunities Import Tests', () => {

  /** @test {OpportunitiesImports#get} */
  it('Opportunities Import Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.imports.get({limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {OpportunitiesImports#get} */
  it('Opportunities Import Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.imports.get().then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {OpportunitiesImports#getOne} */
  it('Opportunities Import Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.imports.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.opportunities.imports.getOne(results.items[0].uri.replace('/opportunities/imports/','')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {OpportunitiesImports#getOne} */
  it('Opportunities Import Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.imports.getOne(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {OpportunitiesImports#create} */
  it('Opportunities Import Create', (done) => {
    let data = {
      name: 'Test',
      fields: {
        OpportunityID: '{{Opportunity.Id}}',
        OpportunityName: '{{Opportunity.Field(Name)}}',
        Amount: '{{Opportunity.Field(Amount)}}',
        Stage: '{{Opportunity.Field(Stage)}}'
      },
      identifierFieldName: 'OpportunityID'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.opportunities.imports.create(data).then(onFulfilled);
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

  /** @test {OpportunitiesImports#create} */
  it('Opportunities Import Create with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        OpportunityID: '{{Opportunity.Id}}',
        OpportunityName: '{{Opportunity.Field(Name)}}',
        Amount: '{{Opportunity.Field(Amount)}}',
        Stage: '{{Opportunity.Field(Stage)}}'
      },
      identifierFieldName: 'OpportunityID'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.imports.create(data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {OpportunitiesImports#update} */
  it('Opportunities Import Update', (done) => {
    let data = {
      name: 'Test',
      fields: {
        OpportunityID: '{{Opportunity.Id}}',
        OpportunityName: '{{Opportunity.Field(Name)}}',
        Amount: '{{Opportunity.Field(Amount)}}',
        Stage: '{{Opportunity.Field(Stage)}}'
      },
      identifierFieldName: 'OpportunityID'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.opportunities.imports.update(1, data).then(onFulfilled);
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

  /** @test {OpportunitiesImports#update} */
  it('Opportunities Import Update with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        OpportunityID: '{{Opportunity.Id}}',
        OpportunityName: '{{Opportunity.Field(Name)}}',
        Amount: '{{Opportunity.Field(Amount)}}',
        Stage: '{{Opportunity.Field(Stage)}}'
      },
      identifierFieldName: 'OpportunityID'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.imports.update(1, data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {OpportunitiesImports#delete} */
  it('Opportunities Import Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.opportunities.imports.delete(1).then(onFulfilled);
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

  /** @test {OpportunitiesImports#delete} */
  it('Opportunities Import Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.imports.delete(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {OpportunitiesImports#uploadData} */
  it('Opportunities Import Upload Data with Querystring', (done) => {
    let data = [{
      OpportunityID: 1,
      OpportunityName: 'Test',
      Amount: 1,
      Stage: 'Closed'
    }];
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.opportunities.imports.uploadData(1, data).then(onFulfilled);
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

  /** @test {OpportunitiesImports#uploadData} */
  it('Opportunities Import Upload Data with Error', (done) => {
    let data = [{
      OpportunityID: 1,
      OpportunityName: 'Test',
      Amount: 1,
      Stage: 'Closed'
    }];
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.imports.uploadData(1,data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {OpportunitiesImports#deleteData} */
  it('Opportunities Import Delete Data', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.opportunities.imports.deleteData(1).then(onFulfilled);
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

  /** @test {OpportunitiesImports#deleteData} */
  it('Opportunities Import Delete Data with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.imports.deleteData(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
