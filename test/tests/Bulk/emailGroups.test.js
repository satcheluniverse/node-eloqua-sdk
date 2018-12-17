let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {EmailGroups} */
describe('Bulk Email Group Tests', () => {
  /** @test {EmailGroups#get} */
  it('Email Group Export Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.emailGroups.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {EmailGroups#get} */
  it('Email Group Export Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.emailGroups.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {EmailGroups#getOne} */
  it('Email Group Export Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.emailGroups.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.emailGroups.getOne(results.items[0].uri.replace('/emailGroups/', '')).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {EmailGroups#getOne} */
  it('Email Group Export Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.emailGroups.getOne(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
