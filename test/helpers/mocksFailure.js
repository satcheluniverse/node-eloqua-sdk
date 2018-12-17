import nock from 'nock';

export function loginResponse() {
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

export function oauthResponse() {
  let oauth;
  oauth = nock('https://login.eloqua.com')
    .post('/auth/oauth2/token')
    .optionally()
    .reply(200, {
      'access_token': '123',
      'token_type': 'bearer',
      'expires_in': 28800,
      'refresh_token': '456',
    });
  return oauth;
}

export function campaignsResponse() {
  let campaigns;
  campaigns = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/campaigns')
    .optionally()
    .reply(200);
  return campaigns;
}

export function syncsResponse() {
  let syncs;
  syncs = nock('https://secure.p01.eloqua.com')
    .post('/API/Bulk/2.0/syncs')
    .optionally()
    .reply(201);
  return syncs;
}

