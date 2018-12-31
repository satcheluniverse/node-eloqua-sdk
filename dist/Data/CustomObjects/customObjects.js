'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _customObjectData = _interopRequireDefault(require("./customObjectData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class CustomObjects {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _parent)[_parent] = options;
    this.data = new _customObjectData.default(_classPrivateFieldLooseBase(this, _parent)[_parent]);
  }

  get(querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/customObjects',
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
      uri: `/assets/customObject/${id}`,
      qs: qs
    }, cb);
  }

  create(customObject, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'displayNameFieldId', 'emailAddressFieldId', 'fields', 'folderId', 'id', 'name', 'permissions', 'scheduledFor', 'sourceTemplateId', 'type', 'uniqueCodeFieldId', 'updatedAt', 'updatedBy'], customObject);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/customObject',
      method: 'post',
      data: data
    }, cb);
  }

  update(id, customObject, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'displayNameFieldId', 'emailAddressFieldId', 'fields', 'folderId', 'id', 'name', 'permissions', 'scheduledFor', 'sourceTemplateId', 'type', 'uniqueCodeFieldId', 'updatedAt', 'updatedBy'], customObject);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/customObject/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/customObject/${id}`,
      method: 'delete'
    }, cb);
  }

}

exports.default = CustomObjects;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=customObjects.js.map
