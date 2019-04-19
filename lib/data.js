'use strict';
/**
 * @module
 */

import Accounts from './Data/accounts';
import Activities from './Data/activities';
import Contacts from './Data/Contacts/contacts';
import CustomObjects from './Data/CustomObjects/customObjects';
import Events from './Data/Events/events';
import ExternalActivities from './Data/externalActivities';
import Forms from './Data/Forms/forms';
import Visitors from './Data/visitors';

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
     * @member {module:Data/Accounts}
     */
    this.accounts = new Accounts(options);
    /**
     * @member {module:Data/Activities}
     */
    this.activities = new Activities(options);
    /**
     * @member {module:Data/Contacts}
     */
    this.contacts = new Contacts(options);
    /**
     * @member {module:Data/CustomObjects}
     */
    this.customObjects = new CustomObjects(options);
    /**
     * @member {module:Data/Events}
     */
    this.events = new Events(options);
    /**
     * @member {module:Data/ExternalActivities}
     */
    this.externalActivities = new ExternalActivities(options);
    /**
     * @member {module:Data/Forms}
     */
    this.forms = new Forms(options);
    /**
     * @member {module:Data/Visitors}
     */
    this.visitors = new Visitors(options);

  }
}

