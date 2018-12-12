'use strict';

/**
 * Images Class
 * @class Images
 * @main EloquaApi
 * @exports Images
 */
class Images {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Images
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
        uri: '/assets/images',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Image
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
        uri: `/assets/image/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Image
   * @method create
   * @param {string} image
   * @return {Object|String}
   * //TODO: Create image method
   */
  // async create(image) {
  //
  //   try {
  //     return await this._parent._request({
  //       api: 'REST',
  //       uri: '/assets/image/content',
  //       method: 'post',
  //       data: data
  //     });
  //   } catch (error) {
  //     return await this._parent._throwError(error);
  //   }
  // }

  /**
   * Update Image
   * @method update
   * @param {number} id
   * @param {imageFile} imageFile
   * @return {Object|String}
   */
  async update(id, imageFile) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'folderId',
        'fullImageUrl', 'id', 'link', 'name', 'permissions', 'scheduledFor', 'size', 'source',
        'sourceTemplateId', 'syncDate', 'thumbnailUrl', 'type', 'updatedAt', 'updatedBy'
      ],
      imageFile);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/image/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Image
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/image/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = Images;
