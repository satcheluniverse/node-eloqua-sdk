let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {ContactScoringModels} */
describe('Contact Scoring Model Tests', () => {
  /** @test {ContactScoringModels#get} */
  it('Contact Scoring Model Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.scoringModels.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {ContactScoringModels#get} */
  it('Contact Scoring Model Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.scoringModels.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ContactScoringModels#getOne} */
  it('Contact Scoring Model Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.scoringModels.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.contacts.scoringModels
            .getOne(results.items[0].uri.replace('/contacts/scoring/models/', ''))
            .then(result => {
              expect(result).to.be.an('Object');
            });
        });
      })
      .then(done);
  });

  /** @test {ContactScoringModels#getOne} */
  it('Contact Scoring Model Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.scoringModels.getOne(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
