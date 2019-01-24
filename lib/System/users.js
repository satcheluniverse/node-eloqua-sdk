'use strict';
/**
 * @module
 */

/** System Users Class */
export default class Users {
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
   * Retrieve Users
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
      uri: '/system/users',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single User
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
      uri: `/system/user/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create User
   * @param {user} user
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  create(user, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'company',
        'createdAt',
        'createdBy',
        'currentStatus',
        'defaultAccountViewId',
        'defaultContactViewId',
        'depth',
        'description',
        'emailAddress',
        'id',
        'loginName',
        'name',
        'permissions',
        'preferences',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      user,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/system/user',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update User
   * @param {number} id ID of segment
   * @param {user} user
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  update(id, user, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'company',
        'createdAt',
        'createdBy',
        'currentStatus',
        'defaultAccountViewId',
        'defaultContactViewId',
        'depth',
        'description',
        'emailAddress',
        'id',
        'loginName',
        'name',
        'permissions',
        'preferences',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      user,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/system/user/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete User
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/system/user/${id}`,
      method: 'delete',
    }, cb);
  }
}

