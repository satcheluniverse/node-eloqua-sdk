'use strict';
/**
 * @module
 */

/** Account Exports Class */
export default class AccountExports {
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
   * Retrieve a list of account export definitions
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
      uri: '/accounts/exports',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve an account export definition
   * @param {Number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-id-get.html
   */
  getOne(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/accounts/exports/${id}`,
    }, cb);
  }

  /**
   * Create an account export definition
   * @param {accountExport} accountExport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-post.html
   */
  create(accountExport, cb) {
    const data = this.#parent._validate(
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
        'uri',
      ],
      accountExport,
    );

    return this.#parent._request({
      api: 'Bulk',
      uri: '/accounts/exports',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update an account export definition
   * @param {number} id
   * @param {accountExport} accountExport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-id-put.html
   */
  update(id, accountExport, cb) {
    const data = this.#parent._validate(
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
        'uri',
      ],
      accountExport,
    );

    return this.#parent._request({
      api: 'Bulk',
      uri: `/accounts/exports/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete an account export definition
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-id-delete.html
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/accounts/exports/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Retrieve an account export definition's synced data
   * @param {Number} id
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-id-data-get.html
   */
  getData(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
      uri: `/accounts/exports/${id}/data`,
      qs: qs,
    }, cb);
  }

  /**
   * Delete an account export definition's data
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-exports-id-data-delete.html
   */
  deleteData(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/accounts/exports/${id}/data`,
      method: 'delete',
    }, cb);
  }
}

