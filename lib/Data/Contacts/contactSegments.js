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
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string Eloqua response object or error string
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
   * @param {number} id ID of segment
   * @param {Object} [querystring] querystring params to include in request
   * @param {string} [querystring.depth] Level of detail to return (minimal, partial, complete)
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string Eloqua response object or error string
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
   * @param {contactSegment} contactSegment Segment object
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
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
   * @param {number} id ID of segment
   * @param {contactSegment} contactSegment Segment object
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
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
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contact/segment/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Refresh Segment elements
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  queue(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contact/segment/queue/${id}`,
      method: 'post',
      data: {},
    }, cb);
  }
}

