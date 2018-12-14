let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {CampaignFields} */
describe('Campaign Field Tests', () => {

  /** @test {CampaignFields#get} */
  it('Account Field Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.campaignFields.get({limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {CampaignFields#get} */
  it('Account Field Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.campaignFields.get().then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CampaignFields#getOne} */
  it('Account Field Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.campaignFields.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.campaignFields.getOne(results.items[0].uri.replace('/campaign/fields/','')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {CampaignFields#getOne} */
  it('Account Field Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.campaignFields.getOne(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
