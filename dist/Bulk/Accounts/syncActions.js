'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class AccountSyncActions {
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
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: '/accounts/syncActions',
      qs: qs
    }, cb);
  }

  getOne(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/accounts/syncActions/${id}`
    }, cb);
  }

  create(accountSyncAction, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['createdAt', 'createdBy', 'fields', 'identifierFieldName', 'isSyncTriggeredOnImport', 'kbUsed', 'name', 'syncActions', 'updatedAt', 'updatedBy', 'uri'], accountSyncAction);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: '/accounts/syncActions',
      method: 'post',
      data: data
    }, cb);
  }

  update(id, accountSyncAction, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['createdAt', 'createdBy', 'fields', 'identifierFieldName', 'isSyncTriggeredOnImport', 'kbUsed', 'name', 'syncActions', 'updatedAt', 'updatedBy', 'uri'], accountSyncAction);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/accounts/syncActions/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/accounts/syncActions/${id}`,
      method: 'delete'
    }, cb);
  }

  uploadData(id, data, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/accounts/syncActions/${id}/data`,
      method: 'post',
      data: data
    }, cb);
  }

  deleteData(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/accounts/syncActions/${id}/data`,
      method: 'delete'
    }, cb);
  }

}

exports.default = AccountSyncActions;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=syncActions.js.map
