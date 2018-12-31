'use strict';
/**
 * @module
 */

import CampaignResponsesExports from './exports';
import CampaignResponsesImports from './imports';
import CampaignResponsesFields from './fields';

/** Campaign Responses Class */
export default class CampaignResponses {
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
    this.exports = new CampaignResponsesExports(options);
    this.imports = new CampaignResponsesImports(options);
    this.fields = new CampaignResponsesFields(options);
  }
}

