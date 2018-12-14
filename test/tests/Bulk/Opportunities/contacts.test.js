let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {OpportunitiesContacts} */
describe('Opportunities Contact Tests', () => {

  /** @test {OpportunitiesContacts#get} */
  it('Opportunities Contact Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.contacts.get({limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {OpportunitiesContacts#get} */
  it('Opportunities Contact Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.contacts.get().then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {OpportunitiesContacts#getOne} */
  it('Opportunities Contact Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.contacts.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.opportunities.contacts.getOne(results.items[0].uri.replace('/opportunities/contacts/imports/','')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {OpportunitiesContacts#getOne} */
  it('Opportunities Contact Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.contacts.getOne(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {OpportunitiesContacts#create} */
  it('Opportunities Contact Create', (done) => {
    let data = {
      name: 'Test',
      fields: {
        EmailAddress: '{{Opportunity.Contact.Field(C_EmailAddress)}}',
        OpportunityID: '{{Opportunity.Id}}'
      },
      linkOpportunitiesCaseSensitiveMatchField: false,
      linkOpportunitiesCaseSensitiveSourceField: false,
      linkOpportunitiesEntityType: 'Contact',
      linkOpportunitiesMatchFieldName: 'OpportunityID',
      linkOpportunitiesMultipleSourceMatches: true,
      linkOpportunitiesSourceField: 'EmailAddress'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.opportunities.contacts.create(data).then(onFulfilled);
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

  /** @test {OpportunitiesContacts#create} */
  it('Opportunities Contact Create with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        EmailAddress: '{{Opportunity.Contact.Field(C_EmailAddress)}}',
        OpportunityID: '{{Opportunity.Id}}'
      },
      linkOpportunitiesCaseSensitiveMatchField: false,
      linkOpportunitiesCaseSensitiveSourceField: false,
      linkOpportunitiesEntityType: 'Contact',
      linkOpportunitiesMatchFieldName: 'OpportunityID',
      linkOpportunitiesMultipleSourceMatches: true,
      linkOpportunitiesSourceField: 'EmailAddress'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.contacts.create(data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {OpportunitiesContacts#update} */
  it('Opportunities Contact Update', (done) => {
    let data = {
      name: 'Test',
      fields: {
        EmailAddress: '{{Opportunity.Contact.Field(C_EmailAddress)}}',
        OpportunityID: '{{Opportunity.Id}}'
      },
      linkOpportunitiesCaseSensitiveMatchField: false,
      linkOpportunitiesCaseSensitiveSourceField: false,
      linkOpportunitiesEntityType: 'Contact',
      linkOpportunitiesMatchFieldName: 'OpportunityID',
      linkOpportunitiesMultipleSourceMatches: true,
      linkOpportunitiesSourceField: 'EmailAddress'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.opportunities.contacts.update(1, data).then(onFulfilled);
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

  /** @test {OpportunitiesContacts#update} */
  it('Opportunities Contact Update with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        EmailAddress: '{{Opportunity.Contact.Field(C_EmailAddress)}}',
        OpportunityID: '{{Opportunity.Id}}'
      },
      linkOpportunitiesCaseSensitiveMatchField: false,
      linkOpportunitiesCaseSensitiveSourceField: false,
      linkOpportunitiesEntityType: 'Contact',
      linkOpportunitiesMatchFieldName: 'OpportunityID',
      linkOpportunitiesMultipleSourceMatches: true,
      linkOpportunitiesSourceField: 'EmailAddress'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.contacts.update(1, data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {OpportunitiesContacts#delete} */
  it('Opportunities Contact Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.opportunities.contacts.delete(1).then(onFulfilled);
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

  /** @test {OpportunitiesContacts#delete} */
  it('Opportunities Contact Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.contacts.delete(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {OpportunitiesContacts#uploadData} */
  it('Opportunities Contact Upload Data with Querystring', (done) => {
    let data = [{
      EmailAddress: 'Test@example.com',
      OpportunityID: 1
    }];
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.opportunities.contacts.uploadData(1, data).then(onFulfilled);
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

  /** @test {OpportunitiesContacts#uploadData} */
  it('Opportunities Contact Upload Data with Error', (done) => {
    let data = [{
      EmailAddress: 'Test@example.com',
      OpportunityID: 1
    }];
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.contacts.uploadData(1,data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {OpportunitiesContacts#deleteData} */
  it('Opportunities Contact Delete Data', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.opportunities.contacts.deleteData(1).then(onFulfilled);
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

  /** @test {OpportunitiesContacts#deleteData} */
  it('Opportunities Contact Delete Data with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.contacts.deleteData(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
