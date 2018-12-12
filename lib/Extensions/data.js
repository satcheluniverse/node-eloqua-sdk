'use strict';

/**
 * @ignore
 * @type {CustomObjects}
 */
let CustomObjects = require('./Data/CustomObjects/customObjects');
/**
 * @ignore
 * @type {Events}
 */
let Events = require('./Data/Events/events');
/**
 * @ignore
 * @type {Accounts}
 */
let Accounts = require('./Data/Accounts/accounts');
/**
 * @ignore
 * @type {Contacts}
 */
let Contacts = require('./Data/Contacts/contacts');
/**
 * @ignore
 * @type {ExternalActivities}
 */
let ExternalActivities = require('./Data/externalActivities');
/**
 * @ignore
 * @type {Visitors}
 */
let Visitors = require('./Data/visitors');
/**
 * @ignore
 * @type {Activities}
 */
let Activities = require('./Data/activities');

/**
 * Data Class
 * @class Data
 * @main EloquaApi
 * @exports Data
 * @constructor
 */
class Data {

  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    /**
     * @property customObjects
     * @type {CustomObjects}
     */
    this.customObjects = new CustomObjects(options);
    /**
     * @property events
     * @type {Events}
     */
    this.events = new Events(options);
    /**
     * @property accounts
     * @type {Accounts}
     */
    this.accounts = new Accounts(options);
    /**
     * @property contacts
     * @type {Contacts}
     */
    this.contacts = new Contacts(options);
    /**
     * @property externalActivities
     * @type {ExternalActivities}
     */
    this.externalActivities = new ExternalActivities(options);
    /**
     * @property visitors
     * @type {Visitors}
     */
    this.visitors = new Visitors(options);
    /**
     * @property activities
     * @type {Activities}
     */
    this.activities = new Activities(options);
  }
}

module.exports = Data;
