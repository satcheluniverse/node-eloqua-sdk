'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class CustomObjectSyncActions {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _parent)[_parent] = options;
  }

  get(parentId, querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/customObjects/${parentId}/syncActions`,
      qs: qs
    }, cb);
  }

  getOne(parentId, id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/customObjects/${parentId}/syncActions/${id}`
    }, cb);
  }

  create(parentId, customObjectSyncAction, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['createdAt', 'createdBy', 'fields', 'identifierFieldName', 'isSyncTriggeredOnImport', 'kbUsed', 'name', 'syncActions', 'updatedAt', 'updatedBy', 'uri'], customObjectSyncAction);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/customObjects/${parentId}/syncActions`,
      method: 'post',
      data: data
    }, cb);
  }

  update(parentId, id, customObjectSyncAction, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['createdAt', 'createdBy', 'fields', 'identifierFieldName', 'isSyncTriggeredOnImport', 'kbUsed', 'name', 'syncActions', 'updatedAt', 'updatedBy', 'uri'], customObjectSyncAction);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/customObjects/${parentId}/syncActions/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(parentId, id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/customObjects/${parentId}/syncActions/${id}`,
      method: 'delete'
    }, cb);
  }

  uploadData(parentId, id, data, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/customObjects/${parentId}/syncActions/${id}/data`,
      method: 'post',
      data: data
    }, cb);
  }

  deleteData(parentId, id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/customObjects/${parentId}/syncActions/${id}/data`,
      method: 'delete'
    }, cb);
  }

}

exports.default = CustomObjectSyncActions;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=syncActions.js.map
