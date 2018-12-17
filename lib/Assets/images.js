'use strict';
/**
 * @module
 */

/** Images Class */
export default class Images {
  #parent;
  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Images
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
        uri: '/assets/images',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Image
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
        uri: `/assets/image/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Image
   * @param {string} image
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * //TODO: Create image method
   */
  // async create(image) {
  //
  //   try {
  //     return await this.#parent._request({
  //       api: 'REST',
  //       uri: '/assets/image/content',
  //       method: 'post',
  //       data: data
  //     });
  //   } catch (error) {
  //     return await this.#parent._throwError(error);
  //   }
  // }

  /**
   * Update Image
   * @param {number} id
   * @param {imageFile} imageFile
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, imageFile, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'folderId',
        'fullImageUrl',
        'id',
        'link',
        'name',
        'permissions',
        'scheduledFor',
        'size',
        'source',
        'sourceTemplateId',
        'syncDate',
        'thumbnailUrl',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      imageFile
    );

    return this.#parent._request({
      api: 'REST',
        uri: `/assets/image/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Image
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
        uri: `/assets/image/${id}`,
      method: 'delete',
    }, cb);
  }
}

