'use strict';
/**
 * @module
 */

import AccountGroups from './accountGroups';

/** Data Accounts Class */
export default class Accounts {
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
    this.groups = new AccountGroups(this.#parent);
  }

  /**
   * Retrieve Accounts
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number} [querystring.viewId]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(
        ['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search', 'viewId'],
        querystring,
      );
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/data/accounts',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Account
   * @param {number} id ID of segment
   * @param {Object} [querystring] querystring params to include in request
   * @param {string} [querystring.depth] Level of detail to return (minimal, partial, complete)
   * @param {number} [querystring.viewId]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  getOne(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['depth', 'viewId'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/data/account/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Account
   * @param {account} account
   * @param {Eloqua.callback} cb Callback to be returned
* @return {Object|String
   */
  create(account, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'address1',
        'address2',
        'address3',
        'businessPhone',
        'city',
        'country',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'fieldValues',
        'id',
        'name',
        'permissions',
        'postalCode',
        'province',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      account,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/data/account',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Account
   * @param {number} id ID of segment
   * @param {account} account
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  update(id, account, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'address1',
        'address2',
        'address3',
        'businessPhone',
        'city',
        'country',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'fieldValues',
        'id',
        'name',
        'permissions',
        'postalCode',
        'province',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      account,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/data/account/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Account
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/data/account/${id}`,
      method: 'delete',
    }, cb);
  }
}

