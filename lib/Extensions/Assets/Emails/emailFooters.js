'use strict';

/**
 * EmailFooters Class
 * @class EmailFooters
 * @main EloquaApi
 * @exports EmailFooters
 */
class EmailFooters {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Email Footers
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
        uri: '/assets/email/footers',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Email Footer
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
        uri: `/assets/email/footer/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Email Footer
   * @method create
   * @param {emailFooter} emailFooter
   * @return {Object|String}
   */
  async create(emailFooter) {
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
      emailFooter
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/email/footer',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Email Footer
   * @method update
   * @param {number} id
   * @param {emailFooter} emailFooter
   * @return {Object|String}
   */
  async update(id, emailFooter) {
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
      emailFooter
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/email/footer/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Email Footer
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/email/footer/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = EmailFooters;
