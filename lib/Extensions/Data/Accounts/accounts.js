'use strict';

/**
 * @ignore
 * @type {AccountGroups}
 */
let AccountGroups = require('./accountGroups');

/**
 * Data Accounts Class
 * @class Accounts
 * @main EloquaApi
 * @exports Accounts
 */
class Accounts {
  constructor(options) {
    this._parent = options;
    this.groups = new AccountGroups(this._parent);
  }

  /**
   * Retrieve Accounts
   * @method get
   * @param {querystring} [querystring]
   * @param {number} [querystring.viewId]
   * @return {Object|String}
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search', 'viewId'],
        querystring
      );
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/data/accounts',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Account
   * @method getOne
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {number} [querystring.viewId]
   * @return {Object|String}
   */
  async getOne(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['depth', 'viewId'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/account/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Account
   * @method create
   * @param {account} account
   * @return {Object|String
   */
  async create(account) {
    let data = this._parent._validate(
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
        'updatedBy'
      ],
      account
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/data/account',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Account
   * @method update
   * @param {number} id
   * @param {account} account
   * @return {Object|String}
   */
  async update(id, account) {
    let data = this._parent._validate(
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
        'updatedBy'
      ],
      account
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/account/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Account
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/account/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = Accounts;
