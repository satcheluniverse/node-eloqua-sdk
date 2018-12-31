'use strict';
/**
 * @module
 */

/** Syncs Class */
export default class Syncs {
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
   * Retrieve a list of syncs
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-syncs-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
        uri: '/syncs',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve a sync
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-syncs-id-get.html
   */
  getOne(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/syncs/${id}`,
    }, cb);
  }

  /**
   * Create an import or export sync
   * @param {SyncIndividual} SyncIndividual
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-syncs-post.html
   */
  create(SyncIndividual, cb) {
    const data = this.#parent._validate(
      ['callbackUrl', 'createdAt', 'createdBy', 'status', 'syncedInstanceUri', 'syncEndedAt', 'syncStartedAt', 'uri'],
      SyncIndividual,
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: '/syncs',
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Delete sync data
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-syncs-id-data-delete.html
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/syncs/${id}/data`,
      method: 'delete',
    }, cb);
  }

  /**
   * Retrieve a sync's logs
   * @param {Number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-syncs-id-logs-get.html
   */
  getLogs(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/syncs/${id}/logs`,
    }, cb);
  }

  /**
   * Retrieve an export sync's data
   * @param {Number} id
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-syncs-id-data-get.html
   */
  getData(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
        uri: `/syncs/${id}/data`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve import sync failure data
   * @param {Number} id
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {Stream} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-syncs-id-rejects-get.html
   */
  getRejects(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
        uri: `/syncs/${id}/rejects`,
      qs: qs,
    }, cb);
  }
}

