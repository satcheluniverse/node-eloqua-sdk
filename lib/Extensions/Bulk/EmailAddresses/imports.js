'use strict';

/**
 * Email Addresses Imports Class
 * @class EmailAddressesImports
 * @main EloquaApi
 * @exports EmailAddressesImports
 * @constructor
 */
class EmailAddressesImports {

  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of email address import definitions
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-get.html
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
        uri: '/emailAddresses/imports',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve an email address import definition
   * @method getOne
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-id-get.html
   */
  async getOne(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/emailAddresses/imports/${id}`,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create an email address import definition
   * @method create
   * @param {emailAddressesImport} emailAddressesImport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-post.html
   */
  async create(emailAddressesImport) {
    let data = this._parent._validate(
      [
        'autoDeleteDuration', 'createdAt', 'createdBy', 'dataRetentionDuration', 'fields',
        'identifierFieldName', 'importPriorityUri', 'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords', 'kbUsed', 'name', 'nullIdentifierFieldName', 'syncActions',
        'updatedAt', 'updatedBy', 'updateRule', 'uri'
      ],
      emailAddressesImport);

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/emailAddresses/imports',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update an email address import definition
   * @method update
   * @param {number} id
   * @param {emailAddressesImport} emailAddressesImport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-id-put.html
   */
  async update(id, emailAddressesImport) {
    let data = this._parent._validate(
      [
        'autoDeleteDuration', 'createdAt', 'createdBy', 'dataRetentionDuration', 'fields',
        'identifierFieldName', 'importPriorityUri', 'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords', 'kbUsed', 'name', 'nullIdentifierFieldName', 'syncActions',
        'updatedAt', 'updatedBy', 'updateRule', 'uri'
      ],
      emailAddressesImport);

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/emailAddresses/imports/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete an email address import definition
   * @method delete
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-id-delete.html
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/emailAddresses/imports/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Submit data for an email address import
   * @method getData
   * @param {Number} id
   * @param {Array} data
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-id-data-post.html
   */
  async getData(id, data) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/emailAddresses/imports/${id}/data`,
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete an email address import definition's synced data
   * @method deleteData
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-id-data-delete.html
   */
  async deleteData(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/emailAddresses/imports/${id}/data`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = EmailAddressesImports;
