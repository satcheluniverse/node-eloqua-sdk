'use strict';

/**
 * ContactSegments Class
 * @class ContactSegments
 * @main EloquaApi
 * @exports ContactSegments
 */
class ContactSegments {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Contact Segments
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
        uri: '/assets/contact/segments',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Contact Segment
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
        uri: `/assets/contact/segment/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Contact Segment
   * @method create
   * @param {contactSegment} contactSegment
   * @return {Object|String}
   */
  async create(contactSegment) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'count',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'elements',
        'folderId',
        'id',
        'isStale',
        'lastCalculatedAt',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy'
      ],
      contactSegment
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/contact/segment',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Contact Segment
   * @method update
   * @param {number} id
   * @param {contactSegment} contactSegment
   * @return {Object|String}
   */
  async update(id, contactSegment) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'count',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'elements',
        'folderId',
        'id',
        'isStale',
        'lastCalculatedAt',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy'
      ],
      contactSegment
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/contact/segment/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Contact Segment
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/contact/segment/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = ContactSegments;
