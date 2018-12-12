'use strict';

/**
 * ExternalActivities Class
 * @class ExternalActivities
 * @main EloquaApi
 * @exports ExternalActivities
 */
class ExternalActivities {

  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Single External Activity
   * @method getOne
   * @param {number} id
   * @return {Object|String}
   */
  async getOne(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/activity/${id}`
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create External Activity
   * @method create
   * @param {externalActivity} externalActivity
   * @return {Object|String}
   */
  async create(externalActivity) {
    let data = this._parent._validate(
      [
        'accessedAt', 'activityDate', 'activityType', 'assetName', 'assetType', 'campaignId', 'contactId',
        'createdAt', 'createdBy', 'currentStatus', 'depth', 'description', 'fieldValues', 'folderId', 'id',
        'name', 'permissions', 'scheduledFor', 'sourceTemplateId', 'type', 'updatedAt', 'updatedBy'
      ],
      externalActivity);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/data/activity',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = ExternalActivities;

