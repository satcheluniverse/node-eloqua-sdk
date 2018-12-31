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
   * @param {querystring} [querystring]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {contactList} contactList
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contact/list/${id}`,
      method: 'delete',
    }, cb);
  }
}

