'use strict';

/**
 * OptionLists Class
 * @class OptionLists
 * @main EloquaApi
 * @exports OptionLists
 */
class OptionLists {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Option Lists
   * @method get
   * @param {querystring} [querystring]
   * @return {Object|String}
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/optionLists',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Option List
   * @method getOne
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @return {Object|String}
   */
  async getOne(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['depth'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/optionList/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Option List
   * @method create
   * @param {optionList} optionList
   * @return {Object|String}
   */
  async create(optionList) {
    let data = this._parent._validate(
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
        'updatedBy'
      ],
      optionList
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/optionList',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Option List
   * @method update
   * @param {number} id
   * @param {optionList} optionList
   * @return {Object|String}
   */
  async update(id, optionList) {
    let data = this._parent._validate(
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
        'updatedBy'
      ],
      optionList
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/optionList/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Option List
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/optionList/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = OptionLists;
