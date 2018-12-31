'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class ContactFields {
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
      uri: '/assets/contact/fields',
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
      uri: `/assets/contact/field/${id}`,
      qs: qs
    }, cb);
  }

  create(contactField, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'checkedValue', 'createdAt', 'createdBy', 'currentStatus', 'dataType', 'defaultValue', 'depth', 'description', 'displayType', 'id', 'internalName', 'isPopulatedInOutlookPlugin', 'isReadOnly', 'isRequired', 'isStandard', 'name', 'optionListId', 'outputFormatId', 'permissions', 'showTrustedVisitorsOnly', 'type', 'uncheckedValue', 'updatedAt', 'updatedBy', 'updateType'], contactField);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/contact/field',
      method: 'post',
      data: data
    }, cb);
  }

  update(id, contactField, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'checkedValue', 'createdAt', 'createdBy', 'currentStatus', 'dataType', 'defaultValue', 'depth', 'description', 'displayType', 'id', 'internalName', 'isPopulatedInOutlookPlugin', 'isReadOnly', 'isRequired', 'isStandard', 'name', 'optionListId', 'outputFormatId', 'permissions', 'showTrustedVisitorsOnly', 'type', 'uncheckedValue', 'updatedAt', 'updatedBy', 'updateType'], contactField);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/contact/field/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/contact/field/${id}`,
      method: 'delete'
    }, cb);
  }

}

exports.default = ContactFields;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=contactFields.js.map
