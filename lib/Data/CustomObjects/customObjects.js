'use strict';
/**
 * @module
 */

import CustomObjectData from './customObjectData';

/** CustomObjects Class */
export default class CustomObjects {
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
    this.data = new CustomObjectData(this.#parent);
  }

  /**
   * Retrieve Custom Objects
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
        uri: '/assets/customObjects',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Custom Object
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
        uri: `/assets/customObject/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Custom Object
   * @param {customObject} customObject
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(customObject, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'displayNameFieldId',
        'emailAddressFieldId',
        'fields',
        'folderId',
        'id',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'uniqueCodeFieldId',
        'updatedAt',
        'updatedBy',
      ],
      customObject
    );

    return this.#parent._request({
      api: 'REST',
        uri: '/assets/customObject',
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Custom Object
   * @param {number} id
   * @param {customObject} customObject
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, customObject, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'displayNameFieldId',
        'emailAddressFieldId',
        'fields',
        'folderId',
        'id',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'uniqueCodeFieldId',
        'updatedAt',
        'updatedBy',
      ],
      customObject
    );

    return this.#parent._request({
      api: 'REST',
        uri: `/assets/customObject/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Custom Object
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
        uri: `/assets/customObject/${id}`,
      method: 'delete',
    }, cb);
  }
}

