let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {CampaignResponsesExports} */
describe('Campaign Responses Export Tests', () => {
  /** @test {CampaignResponsesExports#get} */
  it('Campaign Responses Export Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.exports.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesExports#get} */
  it('Campaign Responses Export Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.exports.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesExports#getOne} */
  it.skip('Campaign Responses Export Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.exports.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.campaignResponses.exports
            .getOne(results.items[0].uri.replace('/campaignResponses/exports/', ''))
            .then(result => {
              expect(result).to.be.an('Object');
            });
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesExports#getOne} */
  it('Campaign Responses Export Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.exports.getOne(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesExports#create} */
  it('Campaign Responses Export Create', done => {
    let data = {
      name: 'Test',
      fields: {
        CampaignResponseId: '{{CampaignResponse.Id}}',
        MemberStatus: '{{CampaignResponse.Field(MemberStatus)}}',
        CampaignMembershipId: '{{CampaignResponse.Field(IntegrationReturnValue)}}',
        EloquaCampaignId: '{{CampaignResponse.Campaign.Id}}'
      },
      filter: 'STATUS(\'{{ActionInstance(7BE704D3AF604775AD416E8D0A5AB212).Execution[12345]}}\') = \'pending\''
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.campaignResponses.exports.create(data).then(onFulfilled);
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

  /** @test {CampaignResponsesExports#create} */
  it('Campaign Responses Export Create with Error', done => {
    let data = {
      name: 'Test',
      fields: {
        CampaignResponseId: '{{CampaignResponse.Id}}',
        MemberStatus: '{{CampaignResponse.Field(MemberStatus)}}',
        CampaignMembershipId: '{{CampaignResponse.Field(IntegrationReturnValue)}}',
        EloquaCampaignId: '{{CampaignResponse.Campaign.Id}}'
      },
      filter: 'STATUS(\'{{ActionInstance(7BE704D3AF604775AD416E8D0A5AB212).Execution[12345]}}\') = \'pending\''
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.exports.create(data).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesExports#update} */
  it('Campaign Responses Export Update', done => {
    let data = {
      name: 'Test',
      fields: {
        CampaignResponseId: '{{CampaignResponse.Id}}',
        MemberStatus: '{{CampaignResponse.Field(MemberStatus)}}',
        CampaignMembershipId: '{{CampaignResponse.Field(IntegrationReturnValue)}}',
        EloquaCampaignId: '{{CampaignResponse.Campaign.Id}}'
      },
      filter: 'STATUS(\'{{ActionInstance(7BE704D3AF604775AD416E8D0A5AB212).Execution[12345]}}\') = \'pending\''
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.campaignResponses.exports.update(1, data).then(onFulfilled);
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

  /** @test {CampaignResponsesExports#update} */
  it('Campaign Responses Export Update with Error', done => {
    let data = {
      name: 'Test',
      fields: {
        CampaignResponseId: '{{CampaignResponse.Id}}',
        MemberStatus: '{{CampaignResponse.Field(MemberStatus)}}',
        CampaignMembershipId: '{{CampaignResponse.Field(IntegrationReturnValue)}}',
        EloquaCampaignId: '{{CampaignResponse.Campaign.Id}}'
      },
      filter: 'STATUS(\'{{ActionInstance(7BE704D3AF604775AD416E8D0A5AB212).Execution[12345]}}\') = \'pending\''
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.exports.update(1, data).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesExports#delete} */
  it('Campaign Responses Export Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.campaignResponses.exports.delete(1).then(onFulfilled);
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

  /** @test {CampaignResponsesExports#delete} */
  it('Campaign Responses Export Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.exports.delete(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesExports#getData} */
  it.skip('Campaign Responses Export Get Data', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.exports.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.campaignResponses.exports
            .getData(results.items[0].uri.replace('/campaignResponses/exports/', ''))
            .then(result => {
              expect(result).to.be.an('Object');
            });
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesExports#getData} */
  it.skip('Campaign Responses Export Get Data with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.exports.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.campaignResponses.exports
            .getData(results.items[0].uri.replace('/campaignResponses/exports/', ''), { limit: 1 })
            .then(result => {
              expect(result).to.be.an('Object');
            });
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesExports#getData} */
  it('Campaign Responses Export Get Data with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.exports.getData(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesExports#getData} */
  it('Campaign Responses Export Get Data with Error with Querystring', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.exports.getData(1, { limit: 1 }).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesExports#deleteData} */
  it('Campaign Responses Export Delete Data', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.campaignResponses.exports.deleteData(1).then(onFulfilled);
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

  /** @test {CampaignResponsesExports#deleteData} */
  it('Campaign Responses Export Delete Data with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.exports.deleteData(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
