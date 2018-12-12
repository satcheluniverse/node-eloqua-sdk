'use strict';

/**
 * Contact Sync Actions Class
 * @class ContactSyncActions
 * @main EloquaApi
 * @exports ContactSyncActions
 * @constructor
 */
class ContactSyncActions {

  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of contact sync action definitions
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-get.html
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/contacts/syncActions',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve a contact sync action definition
   * @method getOne
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-id-get.html
   */
  async getOne(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/contacts/syncActions/${id}`,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create a contact sync action definition
   * @method create
   * @param {contactSyncAction} contactSyncAction
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-post.html
   */
  async create(contactSyncAction) {
    let data = this._parent._validate(
      [
        'createdAt', 'createdBy', 'fields', 'identifierFieldName', 'isSyncTriggeredOnImport', 'kbUsed',
        'name', 'syncActions', 'updatedAt', 'updatedBy', 'uri'
      ],
      contactSyncAction);

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/contacts/syncActions',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update a contact sync action definition
   * @method update
   * @param {number} id
   * @param {contactSyncAction} contactSyncAction
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-id-put.html
   */
  async update(id, contactSyncAction) {
    let data = this._parent._validate(
      [
        'createdAt', 'createdBy', 'fields', 'identifierFieldName', 'isSyncTriggeredOnImport', 'kbUsed',
        'name', 'syncActions', 'updatedAt', 'updatedBy', 'uri'
      ],
      contactSyncAction);

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/contacts/syncActions/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete a contact sync action definition
   * @method delete
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-id-delete.html
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/contacts/syncActions/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Upload contact sync action data
   * @method uploadData
   * @param {Number} id
   * @param {Array} data
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-id-data-post.html
   */
  async uploadData(id, data) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/contacts/syncActions/${id}/data`,
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete sync data for a contact sync action definition
   * @method deleteData
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-syncactions-id-data-delete.html
   */
  async deleteData(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/contacts/syncActions/${id}/data`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = ContactSyncActions;
