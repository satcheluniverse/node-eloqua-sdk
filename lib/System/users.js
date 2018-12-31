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
        uri: '/system/users',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single User
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
        uri: `/system/user/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create User
   * @param {user} user
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
      user
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
   * @param {number} id
   * @param {user} user
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
      user
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
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
        uri: `/system/user/${id}`,
      method: 'delete',
    }, cb);
  }
}

