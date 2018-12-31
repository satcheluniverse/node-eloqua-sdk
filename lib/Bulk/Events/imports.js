'use strict';
/**
 * @module
 */

/** Event Imports Class */
export default class EventImports {
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
   * Retrieve a list of import definitions for an event
   * @param {Number} parentId
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-id-imports-get.html
   */
  get(parentId, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
      uri: `/events/${parentId}/imports`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve an import definition for an event
   * @param {Number} parentId
   * @param {Number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-parentid-imports-id-get.html
   */
  getOne(parentId, id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/events/${parentId}/imports/${id}`,
    }, cb);
  }

  /**
   * Create an import definition for an event
   * @param {Number} parentId
   * @param {eventImport} eventImport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-parentid-imports-post.html
   */
  create(parentId, eventImport, cb) {
    const data = this.#parent._validate(
      [
        'autoDeleteDuration',
        'createdAt',
        'createdBy',
        'dataRetentionDuration',
        'fields',
        'id',
        'identifierFieldName',
        'importPriorityUri',
        'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords',
        'kbUsed',
        'mapDataCards',
        'mapDataCardsCaseSensitiveMatch',
        'mapDataCardsEntityField',
        'mapDataCardsEntityType',
        'mapDataCardsSourceField',
        'name',
        'nullIdentifierFieldName',
        'parentId',
        'syncActions',
        'updatedAt',
        'updatedBy',
        'updateRule',
        'uri',
      ],
      eventImport,
    );

    return this.#parent._request({
      api: 'Bulk',
      uri: `/events/${parentId}/imports`,
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update an import definition for an event
   * @param {Number} parentId
   * @param {number} id
   * @param {eventImport} eventImport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-parentid-imports-id-put.html
   */
  update(parentId, id, eventImport, cb) {
    const data = this.#parent._validate(
      [
        'autoDeleteDuration',
        'createdAt',
        'createdBy',
        'dataRetentionDuration',
        'fields',
        'id',
        'identifierFieldName',
        'importPriorityUri',
        'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords',
        'kbUsed',
        'mapDataCards',
        'mapDataCardsCaseSensitiveMatch',
        'mapDataCardsEntityField',
        'mapDataCardsEntityType',
        'mapDataCardsSourceField',
        'name',
        'nullIdentifierFieldName',
        'parentId',
        'syncActions',
        'updatedAt',
        'updatedBy',
        'updateRule',
        'uri',
      ],
      eventImport,
    );

    return this.#parent._request({
      api: 'Bulk',
      uri: `/events/${parentId}/imports/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete an import definition for an event
   * @param {Number} parentId
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-parentid-imports-id-delete.html
   */
  delete(parentId, id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/events/${parentId}/imports/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Upload data for an event import definition
   * @param {Number} parentId
   * @param {Number} id
   * @param {Array} data
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-parentid-imports-id-data-post.html
   */
  uploadData(parentId, id, data, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/events/${parentId}/imports/${id}/data`,
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Delete the synced data for an event import definition
   * @param {Number} parentId
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-parentid-imports-id-data-delete.html
   */
  deleteData(parentId, id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/events/${parentId}/imports/${id}/data`,
      method: 'delete',
    }, cb);
  }
}

