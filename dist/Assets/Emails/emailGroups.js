'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class EmailGroups {
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
      uri: '/assets/email/groups',
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
      uri: `/assets/email/group/${id}`,
      qs: qs
    }, cb);
  }

  create(emailGroup, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'displayName', 'emailFooterId', 'emailHeaderId', 'emailIds', 'id', 'isVisibleInOutlookPlugin', 'isVisibleInPublicSubscriptionList', 'name', 'permissions', 'subscriptionLandingPageId', 'subscriptionListDataLookupId', 'subscriptionListId', 'type', 'unsubscriptionLandingPageId', 'unSubscriptionListDataLookupId', 'unSubscriptionListId', 'updatedAt', 'updatedBy'], emailGroup);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/email/group',
      method: 'post',
      data: data
    }, cb);
  }

  update(id, emailGroup, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'displayName', 'emailFooterId', 'emailHeaderId', 'emailIds', 'id', 'isVisibleInOutlookPlugin', 'isVisibleInPublicSubscriptionList', 'name', 'permissions', 'subscriptionLandingPageId', 'subscriptionListDataLookupId', 'subscriptionListId', 'type', 'unsubscriptionLandingPageId', 'unSubscriptionListDataLookupId', 'unSubscriptionListId', 'updatedAt', 'updatedBy'], emailGroup);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/email/group/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/email/group/${id}`,
      method: 'delete'
    }, cb);
  }

}

exports.default = EmailGroups;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=emailGroups.js.map
