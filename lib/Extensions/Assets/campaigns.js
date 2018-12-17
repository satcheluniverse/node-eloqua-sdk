'use strict';

/**
 * Campaigns Class
 * @class Campaigns
 * @main EloquaApi
 * @exports Campaigns
 * @constructor
 */
class Campaigns {
  /**
   * Campaign object
   * @element campaign
   * @type Object
   * @attribute [accessedAt]
   * @attribute [actualCost]
   * @attribute [badgeId]
   * @attribute [budgetedCost]
   * @attribute [campaignCategory]
   * @attribute [campaignType]
   * @attribute [clrEndDate]
   * @attribute [createdAt]
   * @attribute [createdBy]
   * @attribute [crmId]
   * @attribute [currentStatus]
   * @attribute [depth]
   * @attribute [description]
   * @attribute [elements]
   * @attribute [endAt]
   * @attribute [fieldValues]
   * @attribute [firstActivation]
   * @attribute [folderId]
   * @attribute [id]
   * @attribute [isEmailMarketingCampaign]
   * @attribute [isIncludedInROI]
   * @attribute [isMemberAllowedReEntry]
   * @attribute [isReadOnly]
   * @attribute [isSyncedWithCRM]
   * @attribute [memberCount]
   * @attribute [name]
   * @attribute [permissions]
   * @attribute [product]
   * @attribute [region]
   * @attribute [runAsUserId]
   * @attribute [scheduledFor]
   * @attribute [sourceTemplateId]
   * @attribute [startAt]
   * @attribute [type]
   * @attribute [updatedAt]
   * @attribute [updatedBy]
   */

  /**
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Campaigns
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
        uri: '/assets/campaigns',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Campaign
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
        uri: `/assets/campaign/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Campaign
   * @method create
   * @param {campaign} campaign
   * @return {Object|String}
   */
  async create(campaign) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'actualCost',
        'badgeId',
        'budgetedCost',
        'campaignCategory',
        'campaignType',
        'clrEndDate',
        'createdAt',
        'createdBy',
        'crmId',
        'currentStatus',
        'depth',
        'description',
        'elements',
        'endAt',
        'fieldValues',
        'firstActivation',
        'folderId',
        'id',
        'isEmailMarketingCampaign',
        'isIncludedInROI',
        'isMemberAllowedReEntry',
        'isReadOnly',
        'isSyncedWithCRM',
        'memberCount',
        'name',
        'permissions',
        'product',
        'region',
        'runAsUserId',
        'scheduledFor',
        'sourceTemplateId',
        'startAt',
        'type',
        'updatedAt',
        'updatedBy'
      ],
      campaign
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/campaign',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Campaign
   * @method update
   * @param {number} id
   * @param {campaign} campaign
   * @return {Object|String}
   */
  async update(id, campaign) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'actualCost',
        'badgeId',
        'budgetedCost',
        'campaignCategory',
        'campaignType',
        'clrEndDate',
        'createdAt',
        'createdBy',
        'crmId',
        'currentStatus',
        'depth',
        'description',
        'elements',
        'endAt',
        'fieldValues',
        'firstActivation',
        'folderId',
        'id',
        'isEmailMarketingCampaign',
        'isIncludedInROI',
        'isMemberAllowedReEntry',
        'isReadOnly',
        'isSyncedWithCRM',
        'memberCount',
        'name',
        'permissions',
        'product',
        'region',
        'runAsUserId',
        'scheduledFor',
        'sourceTemplateId',
        'startAt',
        'type',
        'updatedAt',
        'updatedBy'
      ],
      campaign
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/campaign/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Campaign
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/campaign/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Activate Campaign
   * @method activate
   * @param {number} id
   * @param {Object} querystring
   * @return {Object|String}
   */
  async activate(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['activateNow', 'runAsUserId', 'scheduledFor'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/campaign/active/${id}`,
        qs: qs,
        method: 'post'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Deactivate Campaign
   * @method deactivate
   * @param {number} id
   * @return {Object|String}
   */
  async deactivate(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/campaign/draft/${id}`,
        method: 'post'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = Campaigns;
