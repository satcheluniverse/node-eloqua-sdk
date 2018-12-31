'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class ContentSections {
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
      uri: '/assets/contentSections',
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
      uri: `/assets/contentSection/${id}`,
      qs: qs
    }, cb);
  }

  create(contentSection, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'emailAddressFieldId', 'eventGroupByFieldId', 'fields', 'folderId', 'id', 'name', 'permissions', 'scheduledFor', 'sessionFields', 'sessionFieldValues', 'sessions', 'sourceTemplateId', 'type', 'uniqueCodeFieldId', 'updatedAt', 'updatedBy'], contentSection);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/contentSection',
      method: 'post',
      data: data
    }, cb);
  }

  update(id, contentSection, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'emailAddressFieldId', 'eventGroupByFieldId', 'fields', 'folderId', 'id', 'name', 'permissions', 'scheduledFor', 'sessionFields', 'sessionFieldValues', 'sessions', 'sourceTemplateId', 'type', 'uniqueCodeFieldId', 'updatedAt', 'updatedBy'], contentSection);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/contentSection/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/contentSection/${id}`,
      method: 'delete'
    }, cb);
  }

}

exports.default = ContentSections;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=contentSections.js.map
