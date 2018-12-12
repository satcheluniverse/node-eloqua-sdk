'use strict';

/**
 * LandingPages Class
 * @class LandingPages
 * @main EloquaApi
 * @exports LandingPages
 */
class LandingPages {

  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Landing Pages
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
        uri: '/assets/landingPages',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Landing Page
   * @method getOne
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {string} [querystring.noMergeContent]
   * @return {Object|String}
   */
  async getOne(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['depth', 'noMergeContent'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/landingPage/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Landing Page
   * @method create
   * @param {landingPage} landingPage
   * @return {Object|String}
   */
  async create(landingPage) {
    let data = this._parent._validate(
      [
        'accessedAt', 'autoCloseWaitFor', 'autoRedirectUrl', 'autoRedirectWaitFor', 'contentSections',
        'contentServiceInstances', 'createdAt', 'createdBy', 'currentStatus', 'deployedAt', 'depth',
        'description', 'dynamicContents', 'excludeFromAuthentication', 'files', 'folderId', 'forms',
        'htmlContent', 'hyperlinks', 'id', 'images', 'isContentProtected', 'isHidden', 'layout',
        'micrositeId', 'name', 'permissions', 'refreshedAt', 'relativePath', 'scheduledFor',
        'sourceTemplateId', 'style', 'type', 'updatedAt', 'updatedBy'
      ],
      landingPage);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/landingPage',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Landing Page
   * @method update
   * @param {number} id
   * @param {landingPage} landingPage
   * @return {Object|String}
   */
  async update(id, landingPage) {
    let data = this._parent._validate(
      [
        'accessedAt', 'autoCloseWaitFor', 'autoRedirectUrl', 'autoRedirectWaitFor', 'contentSections',
        'contentServiceInstances', 'createdAt', 'createdBy', 'currentStatus', 'deployedAt', 'depth',
        'description', 'dynamicContents', 'excludeFromAuthentication', 'files', 'folderId', 'forms',
        'htmlContent', 'hyperlinks', 'id', 'images', 'isContentProtected', 'isHidden', 'layout',
        'micrositeId', 'name', 'permissions', 'refreshedAt', 'relativePath', 'scheduledFor',
        'sourceTemplateId', 'style', 'type', 'updatedAt', 'updatedBy'
      ],
      landingPage);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/landingPage/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Landing Page
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/landingPage/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = LandingPages;
