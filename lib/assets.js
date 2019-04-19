'use strict';
/**
 * @module
 */

import Accounts from './Assets/Accounts/accounts';
import Campaigns from './Assets/campaigns';
import Contacts from './Assets/Contacts/contacts';
import ContentSections from './Assets/contentSections';
import CustomObjects from './Assets/customObjects';
import Emails from './Assets/Emails/emails';
import Events from './Assets/events';
import ExternalAssets from './Assets/ExternalAssets/externalAssets';
import Favorites from './Assets/favorites';
import Folders from './Assets/folders';
import Forms from './Assets/Forms/forms';
import Images from './Assets/images';
import LandingPages from './Assets/landingPages';
import Microsites from './Assets/microsites';
import OptionLists from './Assets/optionLists';
import Programs from './Assets/programs';
import TrackedURLs from './Assets/trackedUrls';
import Visitors from './Assets/visitors';

/** Assets Class */
export default class Assets {
  /**
   * Parent Object
   * @member {Eloqua}
   */
  #parent;

  /**
   * Standard constructor
   * @param {Eloqua} options Parent object
   */
  constructor(options) {
    /**
     * @member {module:Assets/Accounts}
     */
    this.accounts = new Accounts(options);
    /**
     * @member {module:Assets/Campaigns}
     */
    this.campaigns = new Campaigns(options);
    /**
     * @member {module:Assets/Contacts}
     */
    this.contacts = new Contacts(options);
    /**
     * @member {module:Assets/ContentSections}
     */
    this.contentSections = new ContentSections(options);
    /**
     * @member {module:Assets/CustomObjects}
     */
    this.customObjects = new CustomObjects(options);
    /**
     * @member {module:Assets/Emails}
     */
    this.emails = new Emails(options);
    /**
     * @member {module:Assets/Events}
     */
    this.events = new Events(options);
    /**
     * @member {module:Assets/ExternalAssets}
     */
    this.externalAssets = new ExternalAssets(options);
    /**
     * @member {module:Assets/Favorites}
     */
    this.favorites = new Favorites(options);
    /**
     * @member {module:Assets/Folders}
     */
    this.folders = new Folders(options);
    /**
     * @member {module:Assets/Forms}
     */
    this.forms = new Forms(options);
    /**
     * @member {module:Assets/Images}
     */
    this.images = new Images(options);
    /**
     * @member {module:Assets/LandingPages}
     */
    this.landingPages = new LandingPages(options);
    /**
     * @member {module:Assets/Microsites}
     */
    this.microsites = new Microsites(options);
    /**
     * @member {module:Assets/OptionLists}
     */
    this.optionLists = new OptionLists(options);
    /**
     * @member {module:Assets/Programs}
     */
    this.programs = new Programs(options);
    /**
     * @member {module:Assets/TrackedURLs}
     */
    this.trackedUrls = new TrackedURLs(options);
    /**
     * @member {module:Assets/Visitors}
     */
    this.visitors = new Visitors(options);
  }
}

