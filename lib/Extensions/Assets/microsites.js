'use strict';

/**
 * Microsites Class
 * @class Microsites
 * @main EloquaApi
 * @exports Microsites
 */
class Microsites {

  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Microsites
   * @method get
   * @param {querystring} [querystring]
   * @return {Object|String}
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/microsites',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Microsite
   * @method getOne
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @return {Object|String}
   */
  async getOne(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['depth'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/microsite/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Microsite
   * @method create
   * @param {microsite} microsite
   * @return {Object|String}
   */
  async create(microsite) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'defaultLandingPageId', 'depth',
        'description', 'domains', 'id', 'isAllowedInFrame', 'name', 'permissions', 'scheduledFor',
        'sourceTemplateId', 'type', 'updatedAt', 'updatedBy'
      ],
      microsite);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/microsite',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Microsite
   * @method update
   * @param {number} id
   * @param {microsite} microsite
   * @return {Object|String}
   */
  async update(id, microsite) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'defaultLandingPageId', 'depth',
        'description', 'domains', 'id', 'isAllowedInFrame', 'name', 'permissions', 'scheduledFor',
        'sourceTemplateId', 'type', 'updatedAt', 'updatedBy'
      ],
      microsite);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/microsite/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Microsite
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/microsite/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = Microsites;
