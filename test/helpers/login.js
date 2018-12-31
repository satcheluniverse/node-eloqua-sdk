import nock from 'nock';

export default function fixture() {
  let login;
  login = nock('https://login.eloqua.com')
    .get('/id')
    .optionally()
    .reply(200, {
      'site': {
        'id': 1234,
        'name': 'TestInc',
      },
      'user': {
        'id': 1,
        'username': 'Test.User',
        'displayName': 'Test User',
        'firstName': 'Test',
        'lastName': 'User',
        'emailAddress': 'test@example.com',
      },
      'urls': {
        'base': 'https://secure.p01.eloqua.com',
        'apis': {
          'soap': {
            'standard': 'https://secure.p01.eloqua.com/API/{version}/Service.svc',
            'dataTransfer': 'https://secure.p01.eloqua.com/API/{version}/DataTransferService.svc',
            'email': 'https://secure.p01.eloqua.com/API/{version}/EmailService.svc',
            'externalAction': 'https://secure.p01.eloqua.com/API/{version}/ExternalActionService.svc',
          },
          'rest': {
            'standard': 'https://secure.p01.eloqua.com/API/REST/{version}/',
            'bulk': 'https://secure.p01.eloqua.com/API/Bulk/{version}/',
          },
        },
      },
    });
  return login;
}
