'use strict';

/**
 * Account Exports Class
 * @class AccountExports
 * @main EloquaApi
 * @exports AccountExports
 * @constructor
 */
class AccountExports {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of account export definitions
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-get.html
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/accounts/exports',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve an account export definition
   * @method getOne
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-id-get.html
   */
  async getOne(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/accounts/exports/${id}`
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create an account export definition
   * @method create
   * @param {accountExport} accountExport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-post.html
   */
  async create(accountExport) {
    let data = this._parent._validate(
      [
        'areSystemTimestampsInUTC',
        'autoDeleteDuration',
        'createdAt',
        'createdBy',
        'dataRetentionDuration',
        'fields',
        'filter',
        'kbUsed',
        'maxRecords',
        'name',
        'syncActions',
        'updatedAt',
        'updatedBy',
        'uri'
      ],
      accountExport
    );

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/accounts/exports',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update an account export definition
   * @method update
   * @param {number} id
   * @param {accountExport} accountExport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-id-put.html
   */
  async update(id, accountExport) {
    let data = this._parent._validate(
      [
        'areSystemTimestampsInUTC',
        'autoDeleteDuration',
        'createdAt',
        'createdBy',
        'dataRetentionDuration',
        'fields',
        'filter',
        'kbUsed',
        'maxRecords',
        'name',
        'syncActions',
        'updatedAt',
        'updatedBy',
        'uri'
      ],
      accountExport
    );

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/accounts/exports/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete an account export definition
   * @method delete
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-id-delete.html
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/accounts/exports/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve an account export definition's synced data
   * @method getData
   * @param {Number} id
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-id-data-get.html
   */
  async getData(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['limit', 'links', 'offset', 'totalResults'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/accounts/exports/${id}/data`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete an account export definition's data
   * @method deleteData
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-id-data-delete.html
   */
  async deleteData(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/accounts/exports/${id}/data`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = AccountExports;
