'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class OpportunitiesContacts {
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
      uri: '/opportunities/contacts/imports',
      qs: qs
    }, cb);
  }

  getOne(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/opportunities/contacts/imports/${id}`
    }, cb);
  }

  create(contactImport, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['autoDeleteDuration', 'createdAt', 'createdBy', 'dataRetentionDuration', 'fields', 'identifierFieldName', 'importPriorityUri', 'isSyncTriggeredOnImport', 'isUpdatingMultipleMatchedRecords', 'kbUsed', 'linkOpportunitiesCaseSensitiveMatchField', 'linkOpportunitiesCaseSensitiveSourceField', 'linkOpportunitiesEntityType', 'linkOpportunitiesMatchFieldName', 'linkOpportunitiesMultipleSourceMatches', 'linkOpportunitiesSourceField', 'name', 'nullIdentifierFieldName', 'updatedAt', 'updatedBy', 'updateRule', 'uri'], contactImport);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: '/opportunities/contacts/imports',
      method: 'post',
      data: data
    }, cb);
  }

  update(id, contactImport, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['autoDeleteDuration', 'createdAt', 'createdBy', 'dataRetentionDuration', 'fields', 'identifierFieldName', 'importPriorityUri', 'isSyncTriggeredOnImport', 'isUpdatingMultipleMatchedRecords', 'kbUsed', 'linkOpportunitiesCaseSensitiveMatchField', 'linkOpportunitiesCaseSensitiveSourceField', 'linkOpportunitiesEntityType', 'linkOpportunitiesMatchFieldName', 'linkOpportunitiesMultipleSourceMatches', 'linkOpportunitiesSourceField', 'name', 'nullIdentifierFieldName', 'updatedAt', 'updatedBy', 'updateRule', 'uri'], contactImport);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/opportunities/contacts/imports/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/opportunities/contacts/imports/${id}`,
      method: 'delete'
    }, cb);
  }

  uploadData(id, data, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/opportunities/contacts/imports/${id}/data`,
      method: 'post',
      data: data
    }, cb);
  }

  deleteData(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/opportunities/contacts/imports/${id}/data`,
      method: 'delete'
    }, cb);
  }

}

exports.default = OpportunitiesContacts;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=contacts.js.map
