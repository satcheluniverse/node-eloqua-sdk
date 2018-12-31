'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _eventRegistrants = _interopRequireDefault(require("./eventRegistrants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class Events {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _parent)[_parent] = options;
    this.registrants = new _eventRegistrants.default(_classPrivateFieldLooseBase(this, _parent)[_parent]);
  }

  get(querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/eventRegistrations',
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
      uri: `/assets/eventRegistration/${id}`,
      qs: qs
    }, cb);
  }

  create(event, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'emailAddressFieldId', 'eventGroupByFieldId', 'fields', 'folderId', 'id', 'name', 'permissions', 'scheduledFor', 'sessionFields', 'sessionFieldValues', 'sessions', 'sourceTemplateId', 'type', 'uniqueCodeFieldId', 'updatedAt', 'updatedBy'], event);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/eventRegistration',
      method: 'post',
      data: data
    }, cb);
  }

  update(id, event, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'emailAddressFieldId', 'eventGroupByFieldId', 'fields', 'folderId', 'id', 'name', 'permissions', 'scheduledFor', 'sessionFields', 'sessionFieldValues', 'sessions', 'sourceTemplateId', 'type', 'uniqueCodeFieldId', 'updatedAt', 'updatedBy'], event);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/eventRegistration/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/eventRegistration/${id}`,
      method: 'delete'
    }, cb);
  }

}

exports.default = Events;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=events.js.map
