let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {CampaignResponsesFields} */
describe('Campaign Responses Field Tests', () => {
  /** @test {CampaignResponsesFields#get} */
  it('Campaign Responses Field Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.fields.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesFields#get} */
  it('Campaign Responses Field Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.fields.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesFields#getOne} */
  it('Campaign Responses Field Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.fields.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.campaignResponses.fields
            .getOne(results.items[0].uri.replace('/campaignResponses/fields/', ''))
            .then(result => {
              expect(result).to.be.an('Object');
            });
        });
      })
      .then(done);
  });

  /** @test {CampaignResponsesFields#getOne} */
  it('Campaign Responses Field Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.campaignResponses.fields.getOne(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
