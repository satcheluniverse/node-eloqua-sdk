'use strict';

/**
 * EmailHeaders Class
 * @class EmailHeaders
 * @main EloquaApi
 * @exports EmailHeaders
 */
class EmailHeaders {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Email Headers
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
        uri: '/assets/email/headers',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Email Header
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
        uri: `/assets/email/header/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Email Header
   * @method create
   * @param {emailHeader} emailHeader
   * @return {Object|String}
   */
  async create(emailHeader) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'body',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'fieldMerges',
        'hyperlinks',
        'id',
        'name',
        'permissions',
        'text',
        'type',
        'updatedAt',
        'updatedBy'
      ],
      emailHeader
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/email/header',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Email Header
   * @method update
   * @param {number} id
   * @param {emailHeader} emailHeader
   * @return {Object|String}
   */
  async update(id, emailHeader) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'body',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'fieldMerges',
        'hyperlinks',
        'id',
        'name',
        'permissions',
        'text',
        'type',
        'updatedAt',
        'updatedBy'
      ],
      emailHeader
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/email/header/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Email Header
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/email/header/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = EmailHeaders;
