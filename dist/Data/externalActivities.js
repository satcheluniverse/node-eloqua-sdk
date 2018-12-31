'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class ExternalActivities {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _parent)[_parent] = options;
  }

  getOne(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/data/activity/${id}`
    }, cb);
  }

  create(externalActivity, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'activityDate', 'activityType', 'assetName', 'assetType', 'campaignId', 'contactId', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'fieldValues', 'folderId', 'id', 'name', 'permissions', 'scheduledFor', 'sourceTemplateId', 'type', 'updatedAt', 'updatedBy'], externalActivity);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/data/activity',
      method: 'post',
      data: data
    }, cb);
  }

}

exports.default = ExternalActivities;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=externalActivities.js.map
