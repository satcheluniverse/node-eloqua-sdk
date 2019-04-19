'use strict';
/**
 * @module
 */

/** ContactLists Class */
export default class ContactLists {
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
   * Retrieve Contact Lists
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/contact/lists',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Contact List
   * @param {number} id ID of segment
   * @param {Object} [querystring] querystring params to include in request
   * @param {string} [querystring.depth] Level of detail to return (minimal, partial, complete)
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  getOne(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['depth'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contact/list/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Contact List
   * @param {contactList} contactList
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  create(contactList, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'count',
        'createdAt',
        'createdBy',
        'currentStatus',
        'dataLookupId',
        'depth',
        'description',
        'id',
        'membershipAdditions',
        'membershipDeletions',
        'name',
        'permissions',
        'scope',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      contactList,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/contact/list',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Contact List
   * @param {number} id ID of segment
   * @param {contactList} contactList
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  update(id, contactList, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'count',
        'createdAt',
        'createdBy',
        'currentStatus',
        'dataLookupId',
        'depth',
        'description',
        'id',
        'membershipAdditions',
        'membershipDeletions',
        'name',
        'permissions',
        'scope',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      contactList,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contact/list/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Contact List
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contact/list/${id}`,
      method: 'delete',
    }, cb);
  }
}

