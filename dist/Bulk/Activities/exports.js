'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class ActivitiesExports {
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
      uri: '/activities/exports',
      qs: qs
    }, cb);
  }

  getOne(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/activities/exports/${id}`
    }, cb);
  }

  create(activityExport, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['areSystemTimestampsInUTC', 'autoDeleteDuration', 'createdAt', 'createdBy', 'dataRetentionDuration', 'fields', 'filter', 'kbUsed', 'maxRecords', 'name', 'updatedAt', 'updatedBy', 'uri'], activityExport);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: '/activities/exports',
      method: 'post',
      data: data
    }, cb);
  }

  update(id, activityExport, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['areSystemTimestampsInUTC', 'autoDeleteDuration', 'createdAt', 'createdBy', 'dataRetentionDuration', 'fields', 'filter', 'kbUsed', 'maxRecords', 'name', 'updatedAt', 'updatedBy', 'uri'], activityExport);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/activities/exports/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/activities/exports/${id}`,
      method: 'delete'
    }, cb);
  }

  getData(id, querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['limit', 'links', 'offset', 'totalResults'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/activities/exports/${id}/data`,
      qs: qs
    }, cb);
  }

  deleteData(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'Bulk',
      uri: `/activities/exports/${id}/data`,
      method: 'delete'
    }, cb);
  }

}

exports.default = ActivitiesExports;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=exports.js.map
