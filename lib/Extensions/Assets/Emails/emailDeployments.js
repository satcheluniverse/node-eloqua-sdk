'use strict';

/**
 * EmailDeployments Class
 * @class EmailDeployments
 * @main EloquaApi
 * @exports EmailDeployments
 */
class EmailDeployments {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Single Email Deployment
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
        uri: `/assets/email/deployment/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Email Deployment
   * @method create
   * @param {emailDeployment} emailDeployment
   * @param {Object} [querystring]
   * @param {string} [querystring.preMerge]
   * @return {Object|String}
   */
  async create(emailDeployment, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['preMerge'],
        querystring);
    }

    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description',
        'email', 'endAt', 'failedSendCount', 'folderId', 'id', 'name', 'permissions', 'scheduledFor',
        'sentContent', 'sentSubject', 'sourceTemplatedId', 'successfulSendCount', 'type', 'updatedAt',
        'updatedBy'
      ],
      emailDeployment);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/email/deployment',
        qs: qs,
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = EmailDeployments;
