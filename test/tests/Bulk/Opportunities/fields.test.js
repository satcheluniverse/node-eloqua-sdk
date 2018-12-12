let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {OpportunitiesFields} */
describe('Opportunities Field Tests', () => {

  /** @test {OpportunitiesFields#get} */
  it('Opportunities Field Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.fields.get({limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {OpportunitiesFields#get} */
  it('Opportunities Field Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.fields.get().then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {OpportunitiesFields#getOne} */
  it('Opportunities Field Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.fields.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.opportunities.fields.getOne(results.items[0].uri.replace('/opportunities/fields/','')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {OpportunitiesFields#getOne} */
  it('Opportunities Field Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.opportunities.fields.getOne(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
