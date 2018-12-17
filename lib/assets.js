'use strict';
/**
 * @module
 */

import Campaigns from './Assets/campaigns';
import Programs from './Assets/programs';
import Emails from './Assets/Emails/emails';
import LandingPages from './Assets/landingPages';
import Forms from './Assets/Forms/forms';
import ExternalAssets from './Assets/ExternalAssets/externalAssets';
import ContentSections from './Assets/contentSections';
import Images from './Assets/images';
import Microsites from './Assets/microsites';
import OptionLists from './Assets/optionLists';

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
     * @member {module:Assets/Campaigns}
     */
    this.campaigns = new Campaigns(options);
    /**
     * @member {module:Assets/Programs}
     */
    this.programs = new Programs(options);
    /**
     * @member {module:Assets/Emails}
     */
    this.emails = new Emails(options);
    /**
     * @member {module:Assets/LandingPages}
     */
    this.landingPages = new LandingPages(options);
    /**
     * @member {module:Assets/Forms}
     */
    this.forms = new Forms(options);
    /**
     * @member {module:Assets/ExternalAssets}
     */
    this.externalAssets = new ExternalAssets(options);
    /**
     * @member {module:Assets/ContentSections}
     */
    this.contentSections = new ContentSections(options);
    /**
     * @member {module:Assets/Images}
     */
    this.images = new Images(options);
    /**
     * @member {module:Assets/Microsites}
     */
    this.microsites = new Microsites(options);
    /**
     * @member {module:Assets/OptionLists}
     */
    this.optionLists = new OptionLists(options);
  }
}

