'use strict';
/**
 * @module
 */

/** LandingPages Class */
export default class LandingPages {
  #parent;

  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Landing Pages
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
      uri: '/assets/landingPages',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Landing Page
   * @param {number} id ID of segment
   * @param {Object} [querystring] querystring params to include in request
   * @param {string} [querystring.depth] Level of detail to return (minimal, partial, complete)
   * @param {string} [querystring.noMergeContent]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  getOne(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['depth', 'noMergeContent'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/landingPage/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Landing Page
   * @param {landingPage} landingPage
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  create(landingPage, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'autoCloseWaitFor',
        'autoRedirectUrl',
        'autoRedirectWaitFor',
        'contentSections',
        'contentServiceInstances',
        'createdAt',
        'createdBy',
        'currentStatus',
        'deployedAt',
        'depth',
        'description',
        'dynamicContents',
        'excludeFromAuthentication',
        'files',
        'folderId',
        'forms',
        'htmlContent',
        'hyperlinks',
        'id',
        'images',
        'isContentProtected',
        'isHidden',
        'layout',
        'micrositeId',
        'name',
        'permissions',
        'refreshedAt',
        'relativePath',
        'scheduledFor',
        'sourceTemplateId',
        'style',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      landingPage,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/landingPage',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Landing Page
   * @param {number} id ID of segment
   * @param {landingPage} landingPage
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  update(id, landingPage, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'autoCloseWaitFor',
        'autoRedirectUrl',
        'autoRedirectWaitFor',
        'contentSections',
        'contentServiceInstances',
        'createdAt',
        'createdBy',
        'currentStatus',
        'deployedAt',
        'depth',
        'description',
        'dynamicContents',
        'excludeFromAuthentication',
        'files',
        'folderId',
        'forms',
        'htmlContent',
        'hyperlinks',
        'id',
        'images',
        'isContentProtected',
        'isHidden',
        'layout',
        'micrositeId',
        'name',
        'permissions',
        'refreshedAt',
        'relativePath',
        'scheduledFor',
        'sourceTemplateId',
        'style',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      landingPage,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/landingPage/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Landing Page
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/landingPage/${id}`,
      method: 'delete',
    }, cb);
  }
}

