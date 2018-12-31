'use strict';
/**
 * @module
 */

/** Contact Sync Actions Class */
export default class ContactSyncActions {
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
   * Retrieve a list of contact sync action definitions
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
        uri: '/contacts/syncActions',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve a contact sync action definition
   * @param {Number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-id-get.html
   */
  getOne(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/contacts/syncActions/${id}`,
    }, cb);
  }

  /**
   * Create a contact sync action definition
   * @param {contactSyncAction} contactSyncAction
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-post.html
   */
  create(contactSyncAction, cb) {
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
      contactSyncAction
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: '/contacts/syncActions',
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update a contact sync action definition
   * @param {number} id
   * @param {contactSyncAction} contactSyncAction
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-id-put.html
   */
  update(id, contactSyncAction, cb) {
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
      contactSyncAction
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: `/contacts/syncActions/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete a contact sync action definition
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-id-delete.html
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/contacts/syncActions/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Upload contact sync action data
   * @param {Number} id
   * @param {Array} data
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-id-data-post.html
   */
  uploadData(id, data, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/contacts/syncActions/${id}/data`,
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Delete sync data for a contact sync action definition
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-id-data-delete.html
   */
  deleteData(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/contacts/syncActions/${id}/data`,
      method: 'delete',
    }, cb);
  }
}

