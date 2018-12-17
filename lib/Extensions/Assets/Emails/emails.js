'use strict';

/**
 * @ignore
 * @type {EmailFooters}
 */
let EmailFooters = require('./emailFooters');
/**
 * @ignore
 * @type {EmailHeaders}
 */
let EmailHeaders = require('./emailHeaders');
/**
 * @ignore
 * @type {EmailGroups}
 */
let EmailGroups = require('./emailGroups');
/**
 * @ignore
 * @type {EmailDeployments}
 */
let EmailDeployments = require('./emailDeployments');

/**
 * Emails Class
 * @class Emails
 * @main EloquaApi
 * @exports Emails
 * @constructor
 */
class Emails {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
    this.footers = new EmailFooters(this._parent);
    this.headers = new EmailHeaders(this._parent);
    this.groups = new EmailGroups(this._parent);
    this.deployments = new EmailDeployments(this._parent);
  }

  /**
   * Retrieve Emails
   * @method get
   * @param {querystring} [querystring]
   * @return {Object|String}
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/emails',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Email
   * @method getOne
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {boolean} [querystring.noMergeContent]
   * @param {boolean} [querystring.preMerge]
   * @return {Object|String}
   */
  async getOne(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['depth', 'noMergeContent', 'preMerge'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/email/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Email
   * @method create
   * @param {email} email
   * @return {Object|String}
   */
  async create(email) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'archive',
        'attachments',
        'bounceBackEmail',
        'contentSections',
        'contentServiceInstances',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'dynamicContents',
        'emailFooterId',
        'emailGroupId',
        'emailHeaderId',
        'encodingId',
        'fieldMerges',
        'files',
        'folderId',
        'forms',
        'htmlContent',
        'hyperlinks',
        'id',
        'images',
        'isContentProtected',
        'isPlainTextEditable',
        'isPrivate',
        'isTracked',
        'layout',
        'name',
        'permissions',
        'plainText',
        'renderMode',
        'replyToEmail',
        'replyToName',
        'scheduledFor',
        'senderEmail',
        'senderName',
        'sendPlainTextOnly',
        'sourceTemplateId',
        'style',
        'subject',
        'type',
        'updatedAt',
        'updatedBy',
        'virtualMTAId'
      ],
      email
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/email',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Email
   * @method update
   * @param {number} id
   * @param {email} email
   * @return {Object|String}
   */
  async update(id, email) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'archive',
        'attachments',
        'bounceBackEmail',
        'contentSections',
        'contentServiceInstances',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'dynamicContents',
        'emailFooterId',
        'emailGroupId',
        'emailHeaderId',
        'encodingId',
        'fieldMerges',
        'files',
        'folderId',
        'forms',
        'htmlContent',
        'hyperlinks',
        'id',
        'images',
        'isContentProtected',
        'isPlainTextEditable',
        'isPrivate',
        'isTracked',
        'layout',
        'name',
        'permissions',
        'plainText',
        'renderMode',
        'replyToEmail',
        'replyToName',
        'scheduledFor',
        'senderEmail',
        'senderName',
        'sendPlainTextOnly',
        'sourceTemplateId',
        'style',
        'subject',
        'type',
        'updatedAt',
        'updatedBy',
        'virtualMTAId'
      ],
      email
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/email/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Email
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/email/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = Emails;
