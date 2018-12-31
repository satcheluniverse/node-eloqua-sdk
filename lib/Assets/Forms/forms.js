'use strict';
/**
 * @module
 */

import FormData from './formData';

/** Forms Class */
export default class Forms {
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
    this.data = new FormData(this.#parent);
  }

  /**
   * Retrieve Forms
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
        uri: '/assets/forms',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Form
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  getOne(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['depth'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
        uri: `/assets/form/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Form
   * @param {form} form
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(form, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'customCSS',
        'defaultKeyFieldMapping',
        'depth',
        'description',
        'elements',
        'externalIntegrationUrl',
        'folderId',
        'formJson',
        'html',
        'htmlName',
        'id',
        'isHidden',
        'name',
        'permissions',
        'processingSteps',
        'processingType',
        'scheduledFor',
        'size',
        'sourceTemplateId',
        'style',
        'submitFailedLandingPageId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      form
    );

    return this.#parent._request({
      api: 'REST',
        uri: '/assets/form',
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Partially Update Form
   * @param {number} id
   * @param {form} form
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  partial(id, form, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'customCSS',
        'defaultKeyFieldMapping',
        'depth',
        'description',
        'elements',
        'externalIntegrationUrl',
        'folderId',
        'formJson',
        'html',
        'htmlName',
        'id',
        'isHidden',
        'name',
        'permissions',
        'processingSteps',
        'processingType',
        'scheduledFor',
        'size',
        'sourceTemplateId',
        'style',
        'submitFailedLandingPageId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      form
    );

    return this.#parent._request({
      api: 'REST',
        uri: `/assets/form/${id}`,
        method: 'patch',
      data: data,
    }, cb);
  }

  /**
   * Update Form
   * @param {number} id
   * @param {form} form
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, form, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'customCSS',
        'defaultKeyFieldMapping',
        'depth',
        'description',
        'elements',
        'externalIntegrationUrl',
        'folderId',
        'formJson',
        'html',
        'htmlName',
        'id',
        'isHidden',
        'name',
        'permissions',
        'processingSteps',
        'processingType',
        'scheduledFor',
        'size',
        'sourceTemplateId',
        'style',
        'submitFailedLandingPageId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      form
    );

    return this.#parent._request({
      api: 'REST',
        uri: `/assets/form/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Form
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
        uri: `/assets/form/${id}`,
      method: 'delete',
    }, cb);
  }
}

