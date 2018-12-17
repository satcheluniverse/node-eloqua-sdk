'use strict';

/**
 * Account Imports Class
 * @class AccountImports
 * @main EloquaApi
 * @exports AccountImports
 * @constructor
 */
class AccountImports {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of account import definitions
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-imports-get.html
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/accounts/imports',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve an account import definition
   * @method getOne
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-imports-id-get.html
   */
  async getOne(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/accounts/imports/${id}`
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create an account import definition
   * @method create
   * @param {accountImport} accountImport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-imports-post.html
   */
  async create(accountImport) {
    let data = this._parent._validate(
      [
        'autoDeleteDuration',
        'createdAt',
        'createdBy',
        'dataRetentionDuration',
        'fields',
        'identifierFieldName',
        'importPriorityUri',
        'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords',
        'kbUsed',
        'name',
        'updatedAt',
        'updatedBy',
        'updateRule',
        'uri'
      ],
      accountImport
    );

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/accounts/imports',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update an account import definition
   * @method update
   * @param {number} id
   * @param {accountImport} accountImport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-imports-id-put.html
   */
  async update(id, accountImport) {
    let data = this._parent._validate(
      [
        'autoDeleteDuration',
        'createdAt',
        'createdBy',
        'dataRetentionDuration',
        'fields',
        'identifierFieldName',
        'importPriorityUri',
        'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords',
        'kbUsed',
        'name',
        'updatedAt',
        'updatedBy',
        'updateRule',
        'uri'
      ],
      accountImport
    );

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/accounts/imports/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete an account import definition
   * @method delete
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-imports-id-delete.html
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/accounts/imports/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Upload data for a specified account import definition
   * @method uploadData
   * @param {Number} id
   * @param {Array} data
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-imports-id-data-post.html
   */
  async uploadData(id, data) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/accounts/imports/${id}/data`,
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete an account import definition's data
   * @method deleteData
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-imports-id-data-delete.html
   */
  async deleteData(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/accounts/imports/${id}/data`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = AccountImports;
