'use strict';

/**
 * @ignore
 * @type {FormData}
 */
let FormData = require('./formData');

/**
 * Forms Class
 * @class Forms
 * @main EloquaApi
 * @exports Forms
 * @constructor
 */
class Forms {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
    this.data = new FormData(this._parent);
  }

  /**
   * Retrieve Forms
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
        uri: '/assets/forms',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Form
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
        uri: `/assets/form/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Form
   * @method create
   * @param {form} form
   * @return {Object|String}
   */
  async create(form) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'customCSS',
        'defaultKeyFieldMapping',
        'depth',
        'description',
        'elements',
        'externalIntegrationUrl',
        'folderId',
        'formJson',
        'html',
        'htmlName',
        'id',
        'isHidden',
        'name',
        'permissions',
        'processingSteps',
        'processingType',
        'scheduledFor',
        'size',
        'sourceTemplateId',
        'style',
        'submitFailedLandingPageId',
        'type',
        'updatedAt',
        'updatedBy'
      ],
      form
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/form',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Partially Update Form
   * @method partial
   * @param {number} id
   * @param {form} form
   * @return {Object|String}
   */
  async partial(id, form) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'customCSS',
        'defaultKeyFieldMapping',
        'depth',
        'description',
        'elements',
        'externalIntegrationUrl',
        'folderId',
        'formJson',
        'html',
        'htmlName',
        'id',
        'isHidden',
        'name',
        'permissions',
        'processingSteps',
        'processingType',
        'scheduledFor',
        'size',
        'sourceTemplateId',
        'style',
        'submitFailedLandingPageId',
        'type',
        'updatedAt',
        'updatedBy'
      ],
      form
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/form/${id}`,
        method: 'patch',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Form
   * @method update
   * @param {number} id
   * @param {form} form
   * @return {Object|String}
   */
  async update(id, form) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'customCSS',
        'defaultKeyFieldMapping',
        'depth',
        'description',
        'elements',
        'externalIntegrationUrl',
        'folderId',
        'formJson',
        'html',
        'htmlName',
        'id',
        'isHidden',
        'name',
        'permissions',
        'processingSteps',
        'processingType',
        'scheduledFor',
        'size',
        'sourceTemplateId',
        'style',
        'submitFailedLandingPageId',
        'type',
        'updatedAt',
        'updatedBy'
      ],
      form
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/form/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Form
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/form/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = Forms;
