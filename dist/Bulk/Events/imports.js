'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class EventImports {
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
      uri: `/events/${parentId}/imports`,
      qs: qs
    }, cb);
  }

  getOne(parentId, id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/events/${parentId}/imports/${id}`
    }, cb);
  }

  create(parentId, eventImport, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['autoDeleteDuration', 'createdAt', 'createdBy', 'dataRetentionDuration', 'fields', 'id', 'identifierFieldName', 'importPriorityUri', 'isSyncTriggeredOnImport', 'isUpdatingMultipleMatchedRecords', 'kbUsed', 'mapDataCards', 'mapDataCardsCaseSensitiveMatch', 'mapDataCardsEntityField', 'mapDataCardsEntityType', 'mapDataCardsSourceField', 'name', 'nullIdentifierFieldName', 'parentId', 'syncActions', 'updatedAt', 'updatedBy', 'updateRule', 'uri'], eventImport);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/events/${parentId}/imports`,
      method: 'post',
      data: data
    }, cb);
  }

  update(parentId, id, eventImport, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['autoDeleteDuration', 'createdAt', 'createdBy', 'dataRetentionDuration', 'fields', 'id', 'identifierFieldName', 'importPriorityUri', 'isSyncTriggeredOnImport', 'isUpdatingMultipleMatchedRecords', 'kbUsed', 'mapDataCards', 'mapDataCardsCaseSensitiveMatch', 'mapDataCardsEntityField', 'mapDataCardsEntityType', 'mapDataCardsSourceField', 'name', 'nullIdentifierFieldName', 'parentId', 'syncActions', 'updatedAt', 'updatedBy', 'updateRule', 'uri'], eventImport);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/events/${parentId}/imports/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(parentId, id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/events/${parentId}/imports/${id}`,
      method: 'delete'
    }, cb);
  }

  uploadData(parentId, id, data, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/events/${parentId}/imports/${id}/data`,
      method: 'post',
      data: data
    }, cb);
  }

  deleteData(parentId, id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/events/${parentId}/imports/${id}/data`,
      method: 'delete'
    }, cb);
  }

}

exports.default = EventImports;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=imports.js.map
