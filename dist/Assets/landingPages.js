'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class LandingPages {
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
      uri: '/assets/landingPages',
      qs: qs
    }, cb);
  }

  getOne(id, querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['depth', 'noMergeContent'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/landingPage/${id}`,
      qs: qs
    }, cb);
  }

  create(landingPage, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'autoCloseWaitFor', 'autoRedirectUrl', 'autoRedirectWaitFor', 'contentSections', 'contentServiceInstances', 'createdAt', 'createdBy', 'currentStatus', 'deployedAt', 'depth', 'description', 'dynamicContents', 'excludeFromAuthentication', 'files', 'folderId', 'forms', 'htmlContent', 'hyperlinks', 'id', 'images', 'isContentProtected', 'isHidden', 'layout', 'micrositeId', 'name', 'permissions', 'refreshedAt', 'relativePath', 'scheduledFor', 'sourceTemplateId', 'style', 'type', 'updatedAt', 'updatedBy'], landingPage);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/landingPage',
      method: 'post',
      data: data
    }, cb);
  }

  update(id, landingPage, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'autoCloseWaitFor', 'autoRedirectUrl', 'autoRedirectWaitFor', 'contentSections', 'contentServiceInstances', 'createdAt', 'createdBy', 'currentStatus', 'deployedAt', 'depth', 'description', 'dynamicContents', 'excludeFromAuthentication', 'files', 'folderId', 'forms', 'htmlContent', 'hyperlinks', 'id', 'images', 'isContentProtected', 'isHidden', 'layout', 'micrositeId', 'name', 'permissions', 'refreshedAt', 'relativePath', 'scheduledFor', 'sourceTemplateId', 'style', 'type', 'updatedAt', 'updatedBy'], landingPage);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/landingPage/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/landingPage/${id}`,
      method: 'delete'
    }, cb);
  }

}

exports.default = LandingPages;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=landingPages.js.map
