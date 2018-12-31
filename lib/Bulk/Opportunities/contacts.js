'use strict';
/**
 * @module
 */

/** Opportunities Contacts Imports Class */
export default class OpportunitiesContacts {
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
   * Retrieve a list of opportunity contact linkage import definitions
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
      uri: '/opportunities/contacts/imports',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve an opportunity contact linkage import definition
   * @param {Number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-id-get.html
   */
  getOne(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/opportunities/contacts/imports/${id}`,
    }, cb);
  }

  /**
   * Create an opportunity contact linkage import definition
   * @param {contactImport} contactImport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-post.html
   */
  create(contactImport, cb) {
    const data = this.#parent._validate(
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
        'linkOpportunitiesCaseSensitiveMatchField',
        'linkOpportunitiesCaseSensitiveSourceField',
        'linkOpportunitiesEntityType',
        'linkOpportunitiesMatchFieldName',
        'linkOpportunitiesMultipleSourceMatches',
        'linkOpportunitiesSourceField',
        'name',
        'nullIdentifierFieldName',
        'updatedAt',
        'updatedBy',
        'updateRule',
        'uri',
      ],
      contactImport,
    );

    return this.#parent._request({
      api: 'Bulk',
      uri: '/opportunities/contacts/imports',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update an opportunity contact linkage import definition
   * @param {number} id
   * @param {contactImport} contactImport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-id-put.html
   */
  update(id, contactImport, cb) {
    const data = this.#parent._validate(
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
        'linkOpportunitiesCaseSensitiveMatchField',
        'linkOpportunitiesCaseSensitiveSourceField',
        'linkOpportunitiesEntityType',
        'linkOpportunitiesMatchFieldName',
        'linkOpportunitiesMultipleSourceMatches',
        'linkOpportunitiesSourceField',
        'name',
        'nullIdentifierFieldName',
        'updatedAt',
        'updatedBy',
        'updateRule',
        'uri',
      ],
      contactImport,
    );

    return this.#parent._request({
      api: 'Bulk',
      uri: `/opportunities/contacts/imports/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete an opportunity contact linkage import definition
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-id-delete.html
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/opportunities/contacts/imports/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Upload data for an opportunity contact linkage import definition
   * @param {Number} id
   * @param {Array} data
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-id-data-post.html
   */
  uploadData(id, data, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/opportunities/contacts/imports/${id}/data`,
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Delete the synced data for an opportunity contact linkage import definition
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-contacts-imports-id-data-delete.html
   */
  deleteData(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/opportunities/contacts/imports/${id}/data`,
      method: 'delete',
    }, cb);
  }
}

