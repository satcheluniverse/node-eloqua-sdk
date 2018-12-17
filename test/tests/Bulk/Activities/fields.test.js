let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {ActivitiesFields} */
describe('Activities Field Tests', () => {
  /** @test {ActivitiesFields#get} */
  it('Activities Field Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.activities.fields.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {ActivitiesFields#get} */
  it('Activities Field Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.activities.fields.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ActivitiesFields#getOne} */
  it('Activities Field Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.activities.fields.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.activities.fields.getOne(results.items[0].uri.replace('/activities/fields/', '')).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {ActivitiesFields#getOne} */
  it('Activities Field Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.activities.fields.getOne(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
