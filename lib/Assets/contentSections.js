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
      uri: '/assets/contentSections',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Content Section
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
      uri: `/assets/contentSection/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Content Section
   * @param {contentSection} contentSection
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {contentSection} contentSection
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contentSection/${id}`,
      method: 'delete',
    }, cb);
  }
}

