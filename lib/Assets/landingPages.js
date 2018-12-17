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
        uri: '/assets/landingPages',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Landing Page
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {string} [querystring.noMergeContent]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
      landingPage
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
   * @param {number} id
   * @param {landingPage} landingPage
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
      landingPage
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
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
        uri: `/assets/landingPage/${id}`,
      method: 'delete',
    }, cb);
  }
}

