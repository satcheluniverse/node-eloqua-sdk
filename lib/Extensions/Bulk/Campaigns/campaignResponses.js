'use strict';

/**
 * @ignore
 * @type {CampaignResponsesExports}
 */
let CampaignResponsesExports = require('./exports');
/**
 * @ignore
 * @type {CampaignResponsesImport}
 */
let CampaignResponsesImports = require('./imports');
/**
 * @ignore
 * @type {CampaignResponsesFields}
 */
let CampaignResponsesFields = require('./fields');

/**
 * Campaign Responses Class
 * @class CampaignResponses
 * @main EloquaApi
 * @exports CampaignResponses
 * @constructor
 */
class CampaignResponses {

  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {

    this.export = new CampaignResponsesExports(options);
    this.import = new CampaignResponsesImports(options);
    this.fields = new CampaignResponsesFields(options);
  }
}

module.exports = CampaignResponses;
