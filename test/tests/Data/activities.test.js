let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {Activities} */
describe('Activities Tests', () => {
  /** @test {Activities#get} */
  it('Activities Get', done => {
    let eloqua = new EloquaApi(getOptions({ restVersion: '1.0' }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.activities
          .get(4848544, { endDate: 1583228800, startDate: 1483228800, type: 'campaignMembership' })
          .then(result => {
            expect(result).to.be.an('Array');
          });
      })
      .then(done);
  });

  /** @test {Activities#get} */
  it('Activities Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ restVersion: '1.0', baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.data.activities.get(1).then(result => {
          expect(result).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });
});
