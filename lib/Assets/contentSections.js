'use strict';
/**
 * @module
 */

/** ContentSections Class */
export default class ContentSections {
  #parent;

  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Content Sections
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/contentSections',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Content Section
   * @param {number} id ID of segment
   * @param {Object} [querystring] querystring params to include in request
   * @param {string} [querystring.depth] Level of detail to return (minimal, partial, complete)
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  getOne(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['depth'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contentSection/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Content Section
   * @param {contentSection} contentSection
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  create(contentSection, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'emailAddressFieldId',
        'eventGroupByFieldId',
        'fields',
        'folderId',
        'id',
        'name',
        'permissions',
        'scheduledFor',
        'sessionFields',
        'sessionFieldValues',
        'sessions',
        'sourceTemplateId',
        'type',
        'uniqueCodeFieldId',
        'updatedAt',
        'updatedBy',
      ],
      contentSection,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/contentSection',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Content Section
   * @param {number} id ID of segment
   * @param {contentSection} contentSection
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  update(id, contentSection, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'emailAddressFieldId',
        'eventGroupByFieldId',
        'fields',
        'folderId',
        'id',
        'name',
        'permissions',
        'scheduledFor',
        'sessionFields',
        'sessionFieldValues',
        'sessions',
        'sourceTemplateId',
        'type',
        'uniqueCodeFieldId',
        'updatedAt',
        'updatedBy',
      ],
      contentSection,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contentSection/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Content Section
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contentSection/${id}`,
      method: 'delete',
    }, cb);
  }
}

