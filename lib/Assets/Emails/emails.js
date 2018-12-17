'use strict';
/**
 * @module
 */

import EmailFooters from './emailFooters';
import EmailHeaders from './emailHeaders';
import EmailGroups from './emailGroups';
import EmailDeployments from './emailDeployments';

/** Emails Class */
export default class Emails {
  /**
   * Parent Object
   * @member {Eloqua}
   */
  #parent;
  /**
   * Constructor
   * @param {Eloqua} options Parent object
   */
  constructor(options) {
    this.#parent = options;
    this.footers = new EmailFooters(this.#parent);
    this.headers = new EmailHeaders(this.#parent);
    this.groups = new EmailGroups(this.#parent);
    this.deployments = new EmailDeployments(this.#parent);
  }

  /**
   * Retrieve Emails
   * @param {querystring} [querystring]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
        uri: '/assets/emails',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Email
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {boolean} [querystring.noMergeContent]
   * @param {boolean} [querystring.preMerge]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  getOne(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['depth', 'noMergeContent', 'preMerge'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
        uri: `/assets/email/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Email
   * @param {email} email
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(email, cb) {
    const data = this.#parent._validate(
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
        'virtualMTAId',
      ],
      email
    );

    return this.#parent._request({
      api: 'REST',
        uri: '/assets/email',
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Email
   * @param {number} id
   * @param {email} email
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, email, cb) {
    const data = this.#parent._validate(
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
        'virtualMTAId',
      ],
      email
    );

    return this.#parent._request({
      api: 'REST',
        uri: `/assets/email/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Email
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
        uri: `/assets/email/${id}`,
      method: 'delete',
    }, cb);
  }
}

