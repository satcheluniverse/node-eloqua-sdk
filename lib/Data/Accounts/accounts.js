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
   * @param {querystring} [querystring]
   * @param {number} [querystring.viewId]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {number} [querystring.viewId]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {Eloqua.callback} cb
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
   * @param {number} id
   * @param {account} account
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/data/account/${id}`,
      method: 'delete',
    }, cb);
  }
}

