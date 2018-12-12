'use strict';

/**
 * Opportunities Contacts Imports Class
 * @class OpportunitiesContacts
 * @main EloquaApi
 * @exports OpportunitiesContacts
 * @constructor
 */
class OpportunitiesContacts {

  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of opportunity contact linkage import definitions
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-get.html
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
        uri: '/opportunities/contacts/imports',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve an opportunity contact linkage import definition
   * @method getOne
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-id-get.html
   */
  async getOne(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/opportunities/contacts/imports/${id}`,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create an opportunity contact linkage import definition
   * @method create
   * @param {contactImport} contactImport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-post.html
   */
  async create(contactImport) {
    let data = this._parent._validate(
      [
        'autoDeleteDuration', 'createdAt', 'createdBy', 'dataRetentionDuration', 'fields',
        'identifierFieldName', 'importPriorityUri', 'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords', 'kbUsed', 'linkOpportunitiesCaseSensitiveMatchField',
        'linkOpportunitiesCaseSensitiveSourceField', 'linkOpportunitiesEntityType',
        'linkOpportunitiesMatchFieldName', 'linkOpportunitiesMultipleSourceMatches',
        'linkOpportunitiesSourceField', 'name', 'nullIdentifierFieldName', 'updatedAt', 'updatedBy',
        'updateRule', 'uri'
      ],
      contactImport);

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/opportunities/contacts/imports',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update an opportunity contact linkage import definition
   * @method update
   * @param {number} id
   * @param {contactImport} contactImport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-id-put.html
   */
  async update(id, contactImport) {
    let data = this._parent._validate(
      [
        'autoDeleteDuration', 'createdAt', 'createdBy', 'dataRetentionDuration', 'fields',
        'identifierFieldName', 'importPriorityUri', 'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords', 'kbUsed', 'linkOpportunitiesCaseSensitiveMatchField',
        'linkOpportunitiesCaseSensitiveSourceField', 'linkOpportunitiesEntityType',
        'linkOpportunitiesMatchFieldName', 'linkOpportunitiesMultipleSourceMatches',
        'linkOpportunitiesSourceField', 'name', 'nullIdentifierFieldName', 'updatedAt', 'updatedBy',
        'updateRule', 'uri'
      ],
      contactImport);

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/opportunities/contacts/imports/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete an opportunity contact linkage import definition
   * @method delete
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-id-delete.html
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/opportunities/contacts/imports/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Upload data for an opportunity contact linkage import definition
   * @method uploadData
   * @param {Number} id
   * @param {Array} data
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-id-data-post.html
   */
  async uploadData(id, data) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/opportunities/contacts/imports/${id}/data`,
        method: 'post',
        data: data,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete the synced data for an opportunity contact linkage import definition
   * @method deleteData
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-id-data-delete.html
   */
  async deleteData(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/opportunities/contacts/imports/${id}/data`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = OpportunitiesContacts;
