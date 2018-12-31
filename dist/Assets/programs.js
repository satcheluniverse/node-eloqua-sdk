'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class Programs {
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
      uri: '/assets/programs',
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
      uri: `/assets/program/${id}`,
      qs: qs
    }, cb);
  }

  create(program, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'defaultEntityId', 'defaultEntityType', 'depth', 'description', 'elements', 'folderId', 'id', 'isMemberAllowedDuplicates', 'isReadOnly', 'name', 'permissions', 'runAsUserId', 'scheduledFor', 'sourceTemplateId', 'type', 'updatedAt', 'updatedBy'], program);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/program',
      method: 'post',
      data: data
    }, cb);
  }

  update(id, program, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'defaultEntityId', 'defaultEntityType', 'depth', 'description', 'elements', 'folderId', 'id', 'isMemberAllowedDuplicates', 'isReadOnly', 'name', 'permissions', 'runAsUserId', 'scheduledFor', 'sourceTemplateId', 'type', 'updatedAt', 'updatedBy'], program);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/program/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/program/${id}`,
      method: 'delete'
    }, cb);
  }

  activate(id, querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['runAsUserId', 'scheduledFor'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/program/active/${id}`,
      qs: qs,
      method: 'post'
    }, cb);
  }

  deactivate(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/program/draft/${id}`,
      method: 'post'
    }, cb);
  }

  pause(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/program/pause/${id}`,
      method: 'post'
    }, cb);
  }

}

exports.default = Programs;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=programs.js.map
