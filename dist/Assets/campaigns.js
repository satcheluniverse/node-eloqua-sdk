'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _debug = _interopRequireDefault(require("debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

const log = (0, _debug.default)('eloqua:assets:campaigns');

class Campaigns {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _parent)[_parent] = options;
  }

  get(querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/campaigns',
      qs: qs
    }, cb);
  }

  getOne(id, querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['depth'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/campaign/${id}`,
      qs: qs
    }, cb);
  }

  create(campaign, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'actualCost', 'badgeId', 'budgetedCost', 'campaignCategory', 'campaignType', 'clrEndDate', 'createdAt', 'createdBy', 'crmId', 'currentStatus', 'depth', 'description', 'elements', 'endAt', 'fieldValues', 'firstActivation', 'folderId', 'id', 'isEmailMarketingCampaign', 'isIncludedInROI', 'isMemberAllowedReEntry', 'isReadOnly', 'isSyncedWithCRM', 'memberCount', 'name', 'permissions', 'product', 'region', 'runAsUserId', 'scheduledFor', 'sourceTemplateId', 'startAt', 'type', 'updatedAt', 'updatedBy'], campaign);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/campaign',
      method: 'post',
      data: data
    }, cb);
  }

  update(id, campaign, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'actualCost', 'badgeId', 'budgetedCost', 'campaignCategory', 'campaignType', 'clrEndDate', 'createdAt', 'createdBy', 'crmId', 'currentStatus', 'depth', 'description', 'elements', 'endAt', 'fieldValues', 'firstActivation', 'folderId', 'id', 'isEmailMarketingCampaign', 'isIncludedInROI', 'isMemberAllowedReEntry', 'isReadOnly', 'isSyncedWithCRM', 'memberCount', 'name', 'permissions', 'product', 'region', 'runAsUserId', 'scheduledFor', 'sourceTemplateId', 'startAt', 'type', 'updatedAt', 'updatedBy'], campaign);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/campaign/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/campaign/${id}`,
      method: 'delete'
    }, cb);
  }

  activate(id, querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['activateNow', 'runAsUserId', 'scheduledFor'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/campaign/active/${id}`,
      qs: qs,
      method: 'post'
    }, cb);
  }

  deactivate(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/campaign/draft/${id}`,
      method: 'post'
    }, cb);
  }

}

exports.default = Campaigns;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=campaigns.js.map
