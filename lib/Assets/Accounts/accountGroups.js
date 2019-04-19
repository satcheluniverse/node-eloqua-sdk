'use strict';
/**
 * @module
 */

/** Data Account Groups Class */
export default class AccountGroups {
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
   * Retrieve Account Groups
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
      uri: '/assets/account/groups',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Account Group
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
      uri: `/assets/account/group/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Account Group
   * @param {accountGroup} accountGroup
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  create(accountGroup, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'count',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'folderId',
        'id',
        'isArchived',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      accountGroup,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/account/group',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Account Group
   * @param {number} id ID of segment
   * @param {accountGroup} accountGroup
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  update(id, accountGroup, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'count',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'folderId',
        'id',
        'isArchived',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      accountGroup,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/account/group/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Account Group
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/account/group/${id}`,
      method: 'delete',
    }, cb);
  }
}

