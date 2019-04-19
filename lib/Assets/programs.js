'use strict';
/**
 * @module
 */

/** Assets Programs Class */

export default class Programs {
  #parent;

  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Programs
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
      uri: '/assets/programs',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Program
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
      uri: `/assets/program/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Program
   * @param {program} program
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  create(program, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'defaultEntityId',
        'defaultEntityType',
        'depth',
        'description',
        'elements',
        'folderId',
        'id',
        'isMemberAllowedDuplicates',
        'isReadOnly',
        'name',
        'permissions',
        'runAsUserId',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      program,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/program',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Program
   * @param {number} id ID of segment
   * @param {program} program
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  update(id, program, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'defaultEntityId',
        'defaultEntityType',
        'depth',
        'description',
        'elements',
        'folderId',
        'id',
        'isMemberAllowedDuplicates',
        'isReadOnly',
        'name',
        'permissions',
        'runAsUserId',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      program,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/program/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Program
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/program/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Activate Program
   * @param {number} id ID of segment
   * @param {Object} querystring
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  activate(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['runAsUserId', 'scheduledFor'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/program/active/${id}`,
      qs: qs,
      method: 'post',
    }, cb);
  }

  /**
   * Deactivate Program
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  deactivate(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/program/draft/${id}`,
      method: 'post',
    }, cb);
  }

  /**
   * Deactivate Program
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  pause(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/program/pause/${id}`,
      method: 'post',
    }, cb);
  }

  /**
   * Retrieve Recent Programs
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  recent(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/programs/recent',
      qs: qs,
    }, cb);
  }
}

