'use strict';
/**
 * @module
 */

/** ExternalActivities Class */
export default class ExternalActivities {
  /**
   * Parent Object
   * @member {Eloqua}
   */
  #parent;

  /**
   * Constructor
   * @param {Eloqua} options Parent object
   */
  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Single External Activity
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  getOne(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/data/activity/${id}`,
    }, cb);
  }

  /**
   * Create External Activity
   * @param {externalActivity} externalActivity
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  create(externalActivity, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'activityDate',
        'activityType',
        'assetName',
        'assetType',
        'campaignId',
        'contactId',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'fieldValues',
        'folderId',
        'id',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      externalActivity,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/data/activity',
      method: 'post',
      data: data,
    }, cb);
  }
}

