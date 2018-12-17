import nock from 'nock';

export default function fixture() {
  let campaigns;
  campaigns = nock('https://secure.p01.eloqua.com')
    .get('/API/REST/2.0/assets/campaigns')
    .optionally()
    .reply(200, {
      'elements': [
        {
          'type': 'Campaign',
          'currentStatus': 'Draft',
          'id': '1',
          'createdAt': '1',
          'createdBy': '1',
          'depth': 'minimal',
          'folderId': '1',
          'name': 'Test',
          'permissions': [
            'Retrieve',
            'SetSecurity',
            'Delete',
            'Update',
            'Activate',
          ],
          'updatedAt': '1',
          'updatedBy': '1',
          'campaignCategory': 'contact',
          'isEmailMarketingCampaign': 'false',
        },
      ],
      'page': 1,
      'pageSize': 1,
      'total': 1,
    });
  return campaigns;
}
