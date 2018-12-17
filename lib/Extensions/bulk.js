'use strict';

/**
 * @ignore
 * @type {Accounts}
 */
let Accounts = require('./Bulk/Accounts/accounts');
/**
 * @ignore
 * @type {Activities}
 */
let Activities = require('./Bulk/Activities/activites');
/**
 * @ignore
 * @type {CampaignFields}
 */
let CampaignFields = require('./Bulk/Campaigns/campaignFields');
/**
 * @ignore
 * @type {CampaignResponses}
 */
let CampaignResponses = require('./Bulk/Campaigns/campaignResponses');
/**
 * @ignore
 * @type {Contacts}
 */
let Contacts = require('./Bulk/Contacts/contacts');
/**
 * @ignore
 * @type {CustomObjects}
 */
let CustomObjects = require('./Bulk/CustomObjects/customObjects');
/**
 * @ignore
 * @type {EmailAddresses}
 */
let EmailAddresses = require('./Bulk/EmailAddresses/emailAddresses');
/**
 * @ignore
 * @type {EmailGroups}
 */
let EmailGroups = require('./Bulk/emailGroups');
/**
 * @ignore
 * @type {Events}
 */
let Events = require('./Bulk/Events/events');
/**
 * @ignore
 * @type {Opportunities}
 */
let Opportunities = require('./Bulk/Opportunities/opportunities');
/**
 * @ignore
 * @type {Exports}
 */
let Exports = require('./Bulk/exports');
/**
 * @ignore
 * @type {Imports}
 */
let Imports = require('./Bulk/Imports/imports');
/**
 * @ignore
 * @type {SyncActions}
 */
let SyncActions = require('./Bulk/syncActions');
/**
 * @ignore
 * @type {Syncs}
 */
let Syncs = require('./Bulk/syncs');

/**
 * Bulk Class
 * @class Bulk
 * @main EloquaApi
 * @exports Bulk
 * @constructor
 */
class Bulk {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this.accounts = new Accounts(options);
    this.activities = new Activities(options);
    this.campaignFields = new CampaignFields(options);
    this.campaignResponses = new CampaignResponses(options);
    this.contacts = new Contacts(options);
    this.customObjects = new CustomObjects(options);
    this.emailAddresses = new EmailAddresses(options);
    this.emailGroups = new EmailGroups(options);
    this.events = new Events(options);
    this.opportunities = new Opportunities(options);
    this.exports = new Exports(options);
    this.imports = new Imports(options);
    this.syncActions = new SyncActions(options);
    this.syncs = new Syncs(options);
  }
}

module.exports = Bulk;
