import nock from 'nock';

export function idResponse() {
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

export function assetsCampaignsResponse() {
  let campaigns;
  campaigns = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/campaigns')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/campaigns')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/campaign/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/campaign/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/campaign')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/campaign/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/campaign/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/campaign/active/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/campaign/active/1')
    .query({activateNow: true})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/campaign/draft/1')
    .optionally()
    .reply(200, {test: 'test'});
  return campaigns;
}

export function assetsContentSectionsResponse() {
  let contentSections;
  contentSections = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/contentSections')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/contentSections')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/contentSection/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/contentSection/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/contentSection')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/contentSection/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/contentSection/1')
    .optionally()
    .reply(200, {test: 'test'});
  return contentSections;
}

export function assetsImagesResponse() {
  let images;
  images = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/images')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/images')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/image/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/image/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/image')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/image/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/image/1')
    .optionally()
    .reply(200, {test: 'test'});
  return images;
}

export function assetsLandingPagesResponse() {
  let landingPages;
  landingPages = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/landingPages')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/landingPages')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/landingPage/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/landingPage/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/landingPage')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/landingPage/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/landingPage/1')
    .optionally()
    .reply(200, {test: 'test'});
  return landingPages;
}

export function assetsMicrositesResponse() {
  let microsites;
  microsites = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/microsites')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/microsites')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/microsite/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/microsite/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/microsite')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/microsite/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/microsite/1')
    .optionally()
    .reply(200, {test: 'test'});
  return microsites;
}

export function assetsOptionListsResponse() {
  let optionLists;
  optionLists = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/optionLists')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/optionLists')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/optionList/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/optionList/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/optionList')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/optionList/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/optionList/1')
    .optionally()
    .reply(200, {test: 'test'});
  return optionLists;
}

export function assetsProgramsResponse() {
  let programs;
  programs = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/programs')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/programs')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/program/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/program/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/program')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/program/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/program/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/program/active/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/program/active/1')
    .query({runAsUserId: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/program/draft/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/program/pause/1')
    .optionally()
    .reply(200, {test: 'test'});
  return programs;
}

export function assetsFormsResponse() {
  let forms;
  forms = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/forms')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/forms')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/form/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/form/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/form')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/form/1')
    .optionally()
    .reply(200, {test: 'test'})
    .patch('/API/REST/2.0/assets/form/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/form/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/data/form/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/data/form/1')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/data/form/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/data/form/1/datarow/1')
    .optionally()
    .reply(200, {test: 'test'});
  return forms;
}

export function assetsExternalAssestsResponse() {
  let externalAssets;
  externalAssets = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/externals')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/externals')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/external/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/external/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/external')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/external/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/external/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/external/types')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/external/types')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/external/type/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/external/type/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/external/type')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/external/type/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/external/type/1')
    .optionally()
    .reply(200, {test: 'test'});
  return externalAssets;
}

export function assetsEmailsResponse() {
  let emails;
  emails = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/emails')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/emails')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/email/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/email/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/email')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/email/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/email/1')
    .optionally()
    .reply(200, {test: 'test'});
  return emails;
}

export function assetsEmailDeploymentsResponse() {
  let emailDeployments;
  emailDeployments = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/email/deployment/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/email/deployment/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/email/deployment')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/email/deployment')
    .query({preMerge: 'true'})
    .optionally()
    .reply(200, {test: 'test'});
  return emailDeployments;
}

export function assetsEmailFootersResponse() {
  let emailFooters;
  emailFooters = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/email/footers')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/email/footers')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/email/footer/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/email/footer/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/email/footer')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/email/footer/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/email/footer/1')
    .optionally()
    .reply(200, {test: 'test'});
  return emailFooters;
}

export function assetsEmailGroupsResponse() {
  let emailGroups;
  emailGroups = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/email/groups')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/email/groups')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/email/group/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/email/group/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/email/group')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/email/group/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/email/group/1')
    .optionally()
    .reply(200, {test: 'test'});
  return emailGroups;
}

export function assetsEmailHeadersResponse() {
  let emailHeaders;
  emailHeaders = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/email/headers')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/email/headers')
    .query({count: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/email/header/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/REST/2.0/assets/email/header/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/REST/2.0/assets/email/header')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/REST/2.0/assets/email/header/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/REST/2.0/assets/email/header/1')
    .optionally()
    .reply(200, {test: 'test'});
  return emailHeaders;
}

export function dataActivitiesResponse() {
  let activities;
  activities = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/1.0/data/activities/contact/1')
    .query({endDate: 1, startDate: 1, type: 'campaignMembership'})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/1.0/data/activities/contact/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    });
  return activities;
}

export function dataExternalActivitiesResponse() {
  let activities;
  activities = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/data/activity/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .post('/API/REST/2.0/data/activity')
    .optionally()
    .reply(200, {
      'test': 'test',
    });
  return activities;
}

export function dataVisitorsResponse() {
  let visitors;
  visitors = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/data/visitors')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/visitors')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/visitor/fields')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/visitor/fields')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    });
  return visitors;
}

export function dataEventsResponse() {
  let events;
  events = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/eventRegistrations')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/eventRegistrations')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/eventRegistration/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/eventRegistration/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .post('/API/REST/2.0/assets/eventRegistration')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .put('/API/REST/2.0/assets/eventRegistration/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .delete('/API/REST/2.0/assets/eventRegistration/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/eventRegistration/1/instances')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/eventRegistration/1/instances')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/eventRegistration/1/instance/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/eventRegistration/1/instance/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .post('/API/REST/2.0/data/eventRegistration/1/instance')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .put('/API/REST/2.0/data/eventRegistration/1/instance/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .delete('/API/REST/2.0/data/eventRegistration/1/instance/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    });
  return events;
}

export function dataCustomObjectsResponse() {
  let customObjects;
  customObjects = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/customObjects')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/customObjects')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/customObject/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/customObject/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .post('/API/REST/2.0/assets/customObject')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .put('/API/REST/2.0/assets/customObject/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .delete('/API/REST/2.0/assets/customObject/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/customObject/1/instances')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/customObject/1/instances')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/customObject/1/instance/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/customObject/1/instance/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .post('/API/REST/2.0/data/customObject/1/instance')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .put('/API/REST/2.0/data/customObject/1/instance/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .delete('/API/REST/2.0/data/customObject/1/instance/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    });
  return customObjects;
}

export function dataContactsResponse() {
  let contacts;
  contacts = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/data/contacts')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/contacts')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/contact/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/contact/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .post('/API/REST/2.0/data/contact')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .put('/API/REST/2.0/data/contact/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .delete('/API/REST/2.0/data/contact/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    });
  return contacts;
}

export function dataContactsFieldsResponse() {
  let contactFields;
  contactFields = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/contact/fields')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/contact/fields')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/contact/field/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/contact/field/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .post('/API/REST/2.0/assets/contact/field')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .put('/API/REST/2.0/assets/contact/field/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .delete('/API/REST/2.0/assets/contact/field/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    });
  return contactFields;
}

export function dataContactsListsResponse() {
  let contactLists;
  contactLists = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/contact/lists')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/contact/lists')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/contact/list/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/contact/list/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .post('/API/REST/2.0/assets/contact/list')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .put('/API/REST/2.0/assets/contact/list/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .delete('/API/REST/2.0/assets/contact/list/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    });
  return contactLists;
}

export function dataContactsSegmentsResponse() {
  let contactSegments;
  contactSegments = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/contact/segments')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/contact/segments')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/contact/segment/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/contact/segment/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .post('/API/REST/2.0/assets/contact/segment')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .put('/API/REST/2.0/assets/contact/segment/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .delete('/API/REST/2.0/assets/contact/segment/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    });
  return contactSegments;
}

export function dataAccountsResponse() {
  let accounts;
  accounts = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/data/accounts')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/accounts')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/account/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/data/account/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .post('/API/REST/2.0/data/account')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .put('/API/REST/2.0/data/account/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .delete('/API/REST/2.0/data/account/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/account/groups')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/account/groups')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/account/group/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/account/group/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .post('/API/REST/2.0/assets/account/group')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .put('/API/REST/2.0/assets/account/group/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .delete('/API/REST/2.0/assets/account/group/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    });
  return accounts;
}

export function systemUsers() {
  let users;
  users = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/system/users')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/system/users')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/system/user/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/system/user/1')
    .query({depth: 'minimal'})
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .post('/API/REST/2.0/system/user')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .put('/API/REST/2.0/system/user/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .delete('/API/REST/2.0/system/user/1')
    .optionally()
    .reply(200, {
      'test': 'test',
    });
  return users;
}

export function bulkAccountExportsResponse() {
  let exports;
  exports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/accounts/exports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/accounts/exports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/accounts/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/accounts/exports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/accounts/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/accounts/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/accounts/exports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/accounts/exports/1/data')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/accounts/exports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return exports;
}

export function bulkAccountFieldsResponse() {
  let fields;
  fields = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/accounts/fields')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/accounts/fields')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/accounts/fields/1')
    .optionally()
    .reply(200, {test: 'test'});
  return fields;
}

export function bulkAccountImportsResponse() {
  let imports;
  imports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/accounts/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/accounts/imports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/accounts/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/accounts/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/accounts/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/accounts/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/accounts/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/accounts/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return imports;
}

export function bulkAccountListsResponse() {
  let lists;
  lists = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/accounts/lists')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/accounts/lists')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/accounts/lists/1')
    .optionally()
    .reply(200, {test: 'test'});
  return lists;
}

export function bulkAccountSyncActionsResponse() {
  let syncActions;
  syncActions = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/accounts/syncActions')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/accounts/syncActions')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/accounts/syncActions/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/accounts/syncActions')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/accounts/syncActions/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/accounts/syncActions/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/accounts/syncActions/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/accounts/syncActions/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return syncActions;
}

export function bulkActivitiesExportsResponse() {
  let exports;
  exports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/activities/exports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/activities/exports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/activities/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/activities/exports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/activities/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/activities/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/activities/exports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/activities/exports/1/data')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/activities/exports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return exports;
}

export function bulkActivitiesFieldsResponse() {
  let fields;
  fields = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/activities/fields')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/activities/fields')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/activities/fields/1')
    .optionally()
    .reply(200, {test: 'test'});
  return fields;
}

export function bulkActivitiesImportsResponse() {
  let imports;
  imports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/activities/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/activities/imports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/activities/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/activities/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/activities/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/activities/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/activities/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/activities/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return imports;
}

export function bulkCampaignFieldsResponse() {
  let fields;
  fields = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/campaigns/fields')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/campaigns/fields')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/campaigns/fields/1')
    .optionally()
    .reply(200, {test: 'test'});
  return fields;
}

export function bulkCampaignResponsesExportsResponse() {
  let exports;
  exports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/campaignResponses/exports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/campaignResponses/exports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/campaignResponses/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/campaignResponses/exports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/campaignResponses/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/campaignResponses/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/campaignResponses/exports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/campaignResponses/exports/1/data')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/campaignResponses/exports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return exports;
}

export function bulkCampaignResponsesFieldsResponse() {
  let fields;
  fields = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/campaignResponses/fields')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/campaignResponses/fields')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/campaignResponses/fields/1')
    .optionally()
    .reply(200, {test: 'test'});
  return fields;
}

export function bulkCampaignResponsesImportsResponse() {
  let imports;
  imports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/campaignResponses/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/campaignResponses/imports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/campaignResponses/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/campaignResponses/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/campaignResponses/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/campaignResponses/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/campaignResponses/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/campaignResponses/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return imports;
}

export function bulkContactExportsResponse() {
  let exports;
  exports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/contacts/exports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/exports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/contacts/exports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/contacts/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/contacts/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/exports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/exports/1/data')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/contacts/exports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return exports;
}

export function bulkContactFieldsResponse() {
  let fields;
  fields = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/contacts/fields')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/fields')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/fields/1')
    .optionally()
    .reply(200, {test: 'test'});
  return fields;
}

export function bulkContactFiltersResponse() {
  let filters;
  filters = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/contacts/filters')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/filters')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/filters/1')
    .optionally()
    .reply(200, {test: 'test'});
  return filters;
}

export function bulkContactImportsResponse() {
  let imports;
  imports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/contacts/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/imports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/contacts/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/contacts/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/contacts/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/contacts/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/contacts/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return imports;
}

export function bulkContactListsResponse() {
  let lists;
  lists = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/contacts/lists')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/lists')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/lists/1')
    .optionally()
    .reply(200, {test: 'test'});
  return lists;
}

export function bulkContactScoringModelsResponse() {
  let models;
  models = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/contacts/scoring/models')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/scoring/models')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/scoring/models/1')
    .optionally()
    .reply(200, {test: 'test'});
  return models;
}

export function bulkContactSegmentsResponse() {
  let segments;
  segments = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/contacts/segments')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/segments')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/segments/1')
    .optionally()
    .reply(200, {test: 'test'});
  return segments;
}

export function bulkContactSyncActionsResponse() {
  let syncActions;
  syncActions = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/contacts/syncActions')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/syncActions')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/contacts/syncActions/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/contacts/syncActions')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/contacts/syncActions/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/contacts/syncActions/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/contacts/syncActions/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/contacts/syncActions/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return syncActions;
}

export function bulkCustomObjectsResponse() {
  let customObjects;
  customObjects = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/customObjects')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/customObjects')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/customObjects/1')
    .optionally()
    .reply(200, {test: 'test'});
  return customObjects;
}

export function bulkCustomObjectExportsResponse() {
  let exports;
  exports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/customObjects/1/exports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/customObjects/1/exports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/customObjects/1/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/customObjects/1/exports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/customObjects/1/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/customObjects/1/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/customObjects/1/exports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/customObjects/1/exports/1/data')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/customObjects/1/exports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return exports;
}

export function bulkCustomObjectFieldsResponse() {
  let fields;
  fields = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/customObjects/1/fields')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/customObjects/1/fields')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/customObjects/1/fields/1')
    .optionally()
    .reply(200, {test: 'test'});
  return fields;
}

export function bulkCustomObjectImportsResponse() {
  let imports;
  imports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/customObjects/1/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/customObjects/1/imports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/customObjects/1/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/customObjects/1/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/customObjects/1/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/customObjects/1/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/customObjects/1/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/customObjects/1/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return imports;
}

export function bulkCustomObjectSyncActionsResponse() {
  let syncActions;
  syncActions = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/customObjects/1/syncActions')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/customObjects/1/syncActions')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/customObjects/1/syncActions/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/customObjects/1/syncActions')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/customObjects/1/syncActions/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/customObjects/1/syncActions/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/customObjects/1/syncActions/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/customObjects/1/syncActions/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return syncActions;
}

export function bulkEmailAddressesImportsResponse() {
  let imports;
  imports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/emailAddresses/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/emailAddresses/imports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/emailAddresses/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/emailAddresses/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/emailAddresses/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/emailAddresses/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/emailAddresses/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/emailAddresses/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return imports;
}

export function bulkEventsResponse() {
  let events;
  events = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/events')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/events')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/events/1')
    .optionally()
    .reply(200, {test: 'test'});
  return events;
}

export function bulkEventExportsResponse() {
  let exports;
  exports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/events/1/exports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/events/1/exports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/events/1/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/events/1/exports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/events/1/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/events/1/exports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/events/1/exports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/events/1/exports/1/data')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/events/1/exports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return exports;
}

export function bulkEventFieldsResponse() {
  let fields;
  fields = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/events/1/fields')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/events/1/fields')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/events/1/fields/1')
    .optionally()
    .reply(200, {test: 'test'});
  return fields;
}

export function bulkEventImportsResponse() {
  let imports;
  imports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/events/1/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/events/1/imports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/events/1/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/events/1/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/events/1/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/events/1/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/events/1/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/events/1/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return imports;
}

export function bulkImportsResponse() {
  let imports;
  imports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/imports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/imports/data')
    .optionally()
    .reply(200, {test: 'test'});
  return imports;
}

export function bulkImportPrioritiesResponse() {
  let priorities;
  priorities = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/imports/priorities')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/imports/priorities')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/imports/priorities/1')
    .optionally()
    .reply(200, {test: 'test'});
  return priorities;
}

export function bulkOpportunitiesContactsResponse() {
  let contacts;
  contacts = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/opportunities/contacts/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/opportunities/contacts/imports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/opportunities/contacts/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/opportunities/contacts/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/opportunities/contacts/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/opportunities/contacts/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/opportunities/contacts/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/opportunities/contacts/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return contacts;
}

export function bulkOpportunitiesFieldsResponse() {
  let fields;
  fields = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/opportunities/fields')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/opportunities/fields')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/opportunities/fields/1')
    .optionally()
    .reply(200, {test: 'test'});
  return fields;
}

export function bulkOpportunitiesImportsResponse() {
  let imports;
  imports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/opportunities/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/opportunities/imports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/opportunities/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/opportunities/imports')
    .optionally()
    .reply(200, {test: 'test'})
    .put('/API/Bulk/2.0/opportunities/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/opportunities/imports/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/opportunities/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/opportunities/imports/1/data')
    .optionally()
    .reply(200, {test: 'test'});
  return imports;
}

export function bulkEmailGroupsResponse() {
  let emailGroups;
  emailGroups = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/emailGroups')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/emailGroups')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/emailGroups/1')
    .optionally()
    .reply(200, {test: 'test'});
  return emailGroups;
}

export function bulkExportsResponse() {
  let exports;
  exports = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/exports')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/exports')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/exports/data')
    .optionally()
    .reply(200, {test: 'test'});
  return exports;
}

export function bulkSyncActionsResponse() {
  let syncActions;
  syncActions = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/syncActions')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/syncActions')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'});
  return syncActions;
}

export function bulkSyncsResponse() {
  let syncs;
  syncs = nock('https://secure.p01.eloqua.com')
    .get('/API/Bulk/2.0/syncs')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/syncs')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/syncs/1')
    .optionally()
    .reply(200, {test: 'test'})
    .post('/API/Bulk/2.0/syncs')
    .optionally()
    .reply(200, {test: 'test'})
    .delete('/API/Bulk/2.0/syncs/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/syncs/1/data')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/syncs/1/data')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/syncs/1/logs')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/syncs/1/rejects')
    .optionally()
    .reply(200, {test: 'test'})
    .get('/API/Bulk/2.0/syncs/1/rejects')
    .query({limit: 1})
    .optionally()
    .reply(200, {test: 'test'});
  return syncs;
}

export function assetsTrackedURLsResponse() {
  let events;
  events = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/trackedUrls')
    .optionally()
    .reply(200, {
      'test': 'test',
    })
    .get('/API/REST/2.0/assets/trackedUrls')
    .query({count: 1})
    .optionally()
    .reply(200, {
      'test': 'test',
    });
  return events;
}
