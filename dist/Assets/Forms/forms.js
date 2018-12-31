'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formData = _interopRequireDefault(require("./formData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class Forms {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _parent)[_parent] = options;
    this.data = new _formData.default(_classPrivateFieldLooseBase(this, _parent)[_parent]);
  }

  get(querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/forms',
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
      uri: `/assets/form/${id}`,
      qs: qs
    }, cb);
  }

  create(form, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'customCSS', 'defaultKeyFieldMapping', 'depth', 'description', 'elements', 'externalIntegrationUrl', 'folderId', 'formJson', 'html', 'htmlName', 'id', 'isHidden', 'name', 'permissions', 'processingSteps', 'processingType', 'scheduledFor', 'size', 'sourceTemplateId', 'style', 'submitFailedLandingPageId', 'type', 'updatedAt', 'updatedBy'], form);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/form',
      method: 'post',
      data: data
    }, cb);
  }

  partial(id, form, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'customCSS', 'defaultKeyFieldMapping', 'depth', 'description', 'elements', 'externalIntegrationUrl', 'folderId', 'formJson', 'html', 'htmlName', 'id', 'isHidden', 'name', 'permissions', 'processingSteps', 'processingType', 'scheduledFor', 'size', 'sourceTemplateId', 'style', 'submitFailedLandingPageId', 'type', 'updatedAt', 'updatedBy'], form);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/form/${id}`,
      method: 'patch',
      data: data
    }, cb);
  }

  update(id, form, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'customCSS', 'defaultKeyFieldMapping', 'depth', 'description', 'elements', 'externalIntegrationUrl', 'folderId', 'formJson', 'html', 'htmlName', 'id', 'isHidden', 'name', 'permissions', 'processingSteps', 'processingType', 'scheduledFor', 'size', 'sourceTemplateId', 'style', 'submitFailedLandingPageId', 'type', 'updatedAt', 'updatedBy'], form);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/form/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/form/${id}`,
      method: 'delete'
    }, cb);
  }

}

exports.default = Forms;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=forms.js.map
