'use strict';
/**
 * @module
 */

/** ContactSegments Class */
export default class ContactSegments {
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
  }

  /**
   * Retrieve Contact Segments
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
      uri: '/assets/contact/segments',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Contact Segment
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
      uri: `/assets/contact/segment/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Contact Segment
   * @param {contactSegment} contactSegment
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(contactSegment, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'count',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'elements',
        'folderId',
        'id',
        'isStale',
        'lastCalculatedAt',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      contactSegment,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/contact/segment',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Contact Segment
   * @param {number} id
   * @param {contactSegment} contactSegment
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, contactSegment, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'count',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'elements',
        'folderId',
        'id',
        'isStale',
        'lastCalculatedAt',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      contactSegment,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contact/segment/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Contact Segment
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contact/segment/${id}`,
      method: 'delete',
    }, cb);
  }
}

