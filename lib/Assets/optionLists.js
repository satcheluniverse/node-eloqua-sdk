'use strict';
/**
 * @module
 */

/** OptionLists Class */
export default class OptionLists {
  #parent;

  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Option Lists
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
      uri: '/assets/optionLists',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Option List
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
      uri: `/assets/optionList/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Option List
   * @param {optionList} optionList
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(optionList, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'elements',
        'id',
        'name',
        'permissions',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      optionList,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/optionList',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Option List
   * @param {number} id
   * @param {optionList} optionList
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, optionList, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'elements',
        'id',
        'name',
        'permissions',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      optionList,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/optionList/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Option List
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/optionList/${id}`,
      method: 'delete',
    }, cb);
  }
}

