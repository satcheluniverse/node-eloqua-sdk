'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class EmailDeployments {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _parent)[_parent] = options;
  }

  getOne(id, querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['depth'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/email/deployment/${id}`,
      qs: qs
    }, cb);
  }

  create(emailDeployment, querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['preMerge'], querystring);
    }

    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'email', 'endAt', 'failedSendCount', 'folderId', 'id', 'name', 'permissions', 'scheduledFor', 'sentContent', 'sentSubject', 'sourceTemplatedId', 'successfulSendCount', 'type', 'updatedAt', 'updatedBy'], emailDeployment);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/email/deployment',
      qs: qs,
      method: 'post',
      data: data
    }, cb);
  }

}

exports.default = EmailDeployments;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=emailDeployments.js.map
