'use strict';

/**
 * ContentSections Class
 * @class ContentSections
 * @main EloquaApi
 * @exports ContentSections
 */
class ContentSections {

  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Content Sections
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
        uri: '/assets/contentSections',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Content Section
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
        uri: `/assets/contentSection/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Content Section
   * @method create
   * @param {contentSection} contentSection
   * @return {Object|String}
   */
  async create(contentSection) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description',
        'emailAddressFieldId', 'eventGroupByFieldId', 'fields', 'folderId', 'id', 'name', 'permissions',
        'scheduledFor', 'sessionFields', 'sessionFieldValues', 'sessions', 'sourceTemplateId', 'type',
        'uniqueCodeFieldId', 'updatedAt', 'updatedBy'
      ],
      contentSection);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/contentSection',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Content Section
   * @method update
   * @param {number} id
   * @param {contentSection} contentSection
   * @return {Object|String}
   */
  async update(id, contentSection) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description',
        'emailAddressFieldId', 'eventGroupByFieldId', 'fields', 'folderId', 'id', 'name', 'permissions',
        'scheduledFor', 'sessionFields', 'sessionFieldValues', 'sessions', 'sourceTemplateId', 'type',
        'uniqueCodeFieldId', 'updatedAt', 'updatedBy'
      ],
      contentSection);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/contentSection/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Content Section
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/contentSection/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = ContentSections;
