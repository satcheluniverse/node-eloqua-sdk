'use strict';
/**
 * @module
 */

import Accounts from './Bulk/Accounts/accounts';
import Activities from './Bulk/Activities/activites';
import CampaignFields from './Bulk/Campaigns/campaignFields';
import CampaignResponses from './Bulk/Campaigns/campaignResponses';
import Contacts from './Bulk/Contacts/contacts';
import CustomObjects from './Bulk/CustomObjects/customObjects';
import EmailAddresses from './Bulk/EmailAddresses/emailAddresses';
import EmailGroups from './Bulk/emailGroups';
import Events from './Bulk/Events/events';
import Opportunities from './Bulk/Opportunities/opportunities';
import Exports from './Bulk/exports';
import Imports from './Bulk/Imports/imports';
import SyncActions from './Bulk/syncActions';
import Syncs from './Bulk/syncs';

/** Bulk Class */
export default class Bulk {
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
    /**
     * @member {module:Accounts}
     */
    this.accounts = new Accounts(options);
    /**
     * @member {module:Activities}
     */
    this.activities = new Activities(options);
    /**
     * @member {module:CampaignFields}
     */
    this.campaignFields = new CampaignFields(options);
    /**
     * @member {module:CampaignResponses}
     */
    this.campaignResponses = new CampaignResponses(options);
    /**
     * @member {module:Contacts}
     */
    this.contacts = new Contacts(options);
    /**
     * @member {module:CustomObjects}
     */
    this.customObjects = new CustomObjects(options);
    /**
     * @member {module:EmailAddresses}
     */
    this.emailAddresses = new EmailAddresses(options);
    /**
     * @member {module:EmailGroups}
     */
    this.emailGroups = new EmailGroups(options);
    /**
     * @member {module:Events}
     */
    this.events = new Events(options);
    /**
     * @member {module:Opportunities}
     */
    this.opportunities = new Opportunities(options);
    /**
     * @member {module:Exports}
     */
    this.exports = new Exports(options);
    /**
     * @member {module:Imports}
     */
    this.imports = new Imports(options);
    /**
     * @member {module:SyncActions}
     */
    this.syncActions = new SyncActions(options);
    /**
     * @member {module:Syncs}
     */
    this.syncs = new Syncs(options);
  }
}

