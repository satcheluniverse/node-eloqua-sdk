'use strict';
/**
 * @module
 */

import CustomObjects from './Data/CustomObjects/customObjects';
import Events from './Data/Events/events';
import Accounts from './Data/Accounts/accounts';
import Contacts from './Data/Contacts/contacts';
import ExternalActivities from './Data/externalActivities';
import Visitors from './Data/visitors';
import Activities from './Data/activities';

/** Data Class */
export default class Data {
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
     * @member {module:CustomObjects}
     */
    this.customObjects = new CustomObjects(options);
    /**
     * @member {module:Events}
     */
    this.events = new Events(options);
    /**
     * @member {module:Accounts}
     */
    this.accounts = new Accounts(options);
    /**
     * @member {module:Contacts}
     */
    this.contacts = new Contacts(options);
    /**
     * @member {module:ExternalActivities}
     */
    this.externalActivities = new ExternalActivities(options);
    /**
     * @member {module:Visitors}
     */
    this.visitors = new Visitors(options);
    /**
     * @member {module:Activities}
     */
    this.activities = new Activities(options);
  }
}

