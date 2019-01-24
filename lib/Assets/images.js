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
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
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
   * @param {number} id ID of segment
   * @param {Object} [querystring] querystring params to include in request
   * @param {string} [querystring.depth] Level of detail to return (minimal, partial, complete)
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
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
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
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
   * @param {number} id ID of segment
   * @param {imageFile} imageFile
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
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
      imageFile,
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
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/image/${id}`,
      method: 'delete',
    }, cb);
  }
}

