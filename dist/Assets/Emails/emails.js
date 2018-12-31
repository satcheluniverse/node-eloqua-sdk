'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emailFooters = _interopRequireDefault(require("./emailFooters"));

var _emailHeaders = _interopRequireDefault(require("./emailHeaders"));

var _emailGroups = _interopRequireDefault(require("./emailGroups"));

var _emailDeployments = _interopRequireDefault(require("./emailDeployments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class Emails {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldLooseBase(this, _parent)[_parent] = options;
    this.footers = new _emailFooters.default(_classPrivateFieldLooseBase(this, _parent)[_parent]);
    this.headers = new _emailHeaders.default(_classPrivateFieldLooseBase(this, _parent)[_parent]);
    this.groups = new _emailGroups.default(_classPrivateFieldLooseBase(this, _parent)[_parent]);
    this.deployments = new _emailDeployments.default(_classPrivateFieldLooseBase(this, _parent)[_parent]);
  }

  get(querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/emails',
      qs: qs
    }, cb);
  }

  getOne(id, querystring, cb) {
    let qs = {};

    if (querystring) {
      qs = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['depth', 'noMergeContent', 'preMerge'], querystring);
    }

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/email/${id}`,
      qs: qs
    }, cb);
  }

  create(email, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'archive', 'attachments', 'bounceBackEmail', 'contentSections', 'contentServiceInstances', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'dynamicContents', 'emailFooterId', 'emailGroupId', 'emailHeaderId', 'encodingId', 'fieldMerges', 'files', 'folderId', 'forms', 'htmlContent', 'hyperlinks', 'id', 'images', 'isContentProtected', 'isPlainTextEditable', 'isPrivate', 'isTracked', 'layout', 'name', 'permissions', 'plainText', 'renderMode', 'replyToEmail', 'replyToName', 'scheduledFor', 'senderEmail', 'senderName', 'sendPlainTextOnly', 'sourceTemplateId', 'style', 'subject', 'type', 'updatedAt', 'updatedBy', 'virtualMTAId'], email);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: '/assets/email',
      method: 'post',
      data: data
    }, cb);
  }

  update(id, email, cb) {
    const data = _classPrivateFieldLooseBase(this, _parent)[_parent]._validate(['accessedAt', 'archive', 'attachments', 'bounceBackEmail', 'contentSections', 'contentServiceInstances', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'dynamicContents', 'emailFooterId', 'emailGroupId', 'emailHeaderId', 'encodingId', 'fieldMerges', 'files', 'folderId', 'forms', 'htmlContent', 'hyperlinks', 'id', 'images', 'isContentProtected', 'isPlainTextEditable', 'isPrivate', 'isTracked', 'layout', 'name', 'permissions', 'plainText', 'renderMode', 'replyToEmail', 'replyToName', 'scheduledFor', 'senderEmail', 'senderName', 'sendPlainTextOnly', 'sourceTemplateId', 'style', 'subject', 'type', 'updatedAt', 'updatedBy', 'virtualMTAId'], email);

    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/email/${id}`,
      method: 'put',
      data: data
    }, cb);
  }

  delete(id, cb) {
    return _classPrivateFieldLooseBase(this, _parent)[_parent]._request({
      api: 'REST',
      uri: `/assets/email/${id}`,
      method: 'delete'
    }, cb);
  }

}

exports.default = Emails;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=emails.js.map
