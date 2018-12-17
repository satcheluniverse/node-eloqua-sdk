'use strict';
/**
 * @module
 */

/** Account Sync Action Class */
export default class AccountSyncActions {
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
   * Retrieve a list of account sync action definitions
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-syncactions-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
        uri: '/accounts/syncActions',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve an account sync action definition
   * @param {Number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-syncactions-id-get.html
   */
  getOne(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/accounts/syncActions/${id}`,
    }, cb);
  }

  /**
   * Create an account sync action definition
   * @param {accountSyncAction} accountSyncAction
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-syncactions-post.html
   */
  create(accountSyncAction, cb) {
    const data = this.#parent._validate(
      [
        'createdAt',
        'createdBy',
        'fields',
        'identifierFieldName',
        'isSyncTriggeredOnImport',
        'kbUsed',
        'name',
        'syncActions',
        'updatedAt',
        'updatedBy',
        'uri',
      ],
      accountSyncAction
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: '/accounts/syncActions',
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update an account sync action definition
   * @param {number} id
   * @param {accountSyncAction} accountSyncAction
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-syncactions-id-put.html
   */
  update(id, accountSyncAction, cb) {
    const data = this.#parent._validate(
      [
        'createdAt',
        'createdBy',
        'fields',
        'identifierFieldName',
        'isSyncTriggeredOnImport',
        'kbUsed',
        'name',
        'syncActions',
        'updatedAt',
        'updatedBy',
        'uri',
      ],
      accountSyncAction
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: `/accounts/syncActions/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete an account sync action definition
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-syncactions-id-delete.html
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/accounts/syncActions/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Upload account sync action data
   * @param {Number} id
   * @param {Array} data
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-syncactions-id-data-post.html
   */
  uploadData(id, data, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/accounts/syncActions/${id}/data`,
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Delete sync data for an account sync action definition
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-syncactions-id-data-delete.html
   */
  deleteData(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/accounts/syncActions/${id}/data`,
      method: 'delete',
    }, cb);
  }
}

