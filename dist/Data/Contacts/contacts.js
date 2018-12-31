'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _contactFields = _interopRequireDefault(require("./contactFields"));

var _contactLists = _interopRequireDefault(require("./contactLists"));

var _contactSegments = _interopRequireDefault(require("./contactSegments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class Contacts {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _parent)[_parent] = options;
    this.fields = new _contactFields.default(_classPrivateFieldLooseBase(this, _parent)[_parent]);
    this.lists = new _contactLists.default(_classPrivateFieldLooseBase(this, _parent)[_parent]);
    this.segments = new _contactSegments.default(_classPrivateFieldLooseBase(this, _parent)[_parent]);
  }

  get(querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search', 'viewId'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/data/contacts',
      qs: qs
    }, cb);
  }

  getOne(id, querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['depth', 'viewId'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/data/contact/${id}`,
      qs: qs
    }, cb);
  }

  create(contact, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'accountId', 'accountname', 'address1', 'address2', 'address3', 'bouncebackDate', 'businessPhone', 'city', 'country', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'emailAddress', 'emailFormatPreference', 'fax', 'fieldValues', 'firstName', 'id', 'isBounceback', 'isSubscribed', 'lastName', 'mobilePhone', 'name', 'permissions', 'postalCode', 'province', 'salesPerson', 'subscriptionDate', 'title', 'type', 'unsubscriptionDate', 'updatedAt', 'updatedBy'], contact);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/data/contact',
      method: 'post',
      data: data
    }, cb);
  }

  update(id, contact, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'accountId', 'accountname', 'address1', 'address2', 'address3', 'bouncebackDate', 'businessPhone', 'city', 'country', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'emailAddress', 'emailFormatPreference', 'fax', 'fieldValues', 'firstName', 'id', 'isBounceback', 'isSubscribed', 'lastName', 'mobilePhone', 'name', 'permissions', 'postalCode', 'province', 'salesPerson', 'subscriptionDate', 'title', 'type', 'unsubscriptionDate', 'updatedAt', 'updatedBy'], contact);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/data/contact/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/data/contact/${id}`,
      method: 'delete'
    }, cb);
  }

}

exports.default = Contacts;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=contacts.js.map
