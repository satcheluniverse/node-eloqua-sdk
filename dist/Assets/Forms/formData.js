'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class FormData {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _parent)[_parent] = options;
  }

  get(id, querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['count', 'endAt', 'page', 'startAt'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/data/form/${id}`,
      qs: qs
    }, cb);
  }

  create(id, form, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['currentStatus', 'fieldValues', 'id', 'processingStepErrors', 'submittedAt', 'submittedByContactId', 'type'], form);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/data/form/${id}`,
      method: 'post',
      data: data
    }, cb);
  }

  delete(id, rowId, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/data/form/${id}/datarow/${rowId}`,
      method: 'delete'
    }, cb);
  }

}

exports.default = FormData;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=formData.js.map
