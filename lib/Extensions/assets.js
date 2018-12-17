'use strict';

/**
 * @ignore
 * @type {Campaigns}
 */
let Campaigns = require('./Assets/campaigns');
/**
 * @ignore
 * @type {Programs}
 */
let Programs = require('./Assets/programs');
/**
 * @ignore
 * @type {Emails}
 */
let Emails = require('./Assets/Emails/emails');
/**
 * @ignore
 * @type {LandingPages}
 */
let LandingPages = require('./Assets/landingPages');
/**
 * @ignore
 * @type {Forms}
 */
let Forms = require('./Assets/Forms/forms');
/**
 * @ignore
 * @type {ExternalAssets}
 */
let ExternalAssets = require('./Assets/ExternalAssets/externalAssets');
/**
 * @ignore
 * @type {ContentSections}
 */
let ContentSections = require('./Assets/contentSections');
/**
 * @ignore
 * @type {Images}
 */
let Images = require('./Assets/images');
/**
 * @ignore
 * @type {Microsites}
 */
let Microsites = require('./Assets/microsites');
/**
 * @ignore
 * @type {OptionLists}
 */
let OptionLists = require('./Assets/optionLists');

/**
 * Assets Class
 * @class Assets
 * @main EloquaApi
 * @exports Assets
 * @constructor
 */
class Assets {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    /**
     * @property campaigns
     * @type {Campaigns}
     */
    this.campaigns = new Campaigns(options);
    /**
     * @property programs
     * @type {Programs}
     */
    this.programs = new Programs(options);
    /**
     * @property emails
     * @type {Emails}
     */
    this.emails = new Emails(options);
    /**
     * @property landingPages
     * @type {LandingPages}
     */
    this.landingPages = new LandingPages(options);
    /**
     * @property forms
     * @type {Forms}
     */
    this.forms = new Forms(options);
    /**
     * @property externalAssets
     * @type {ExternalAssets}
     */
    this.externalAssets = new ExternalAssets(options);
    /**
     * @property contentSections
     * @type {ContentSections}
     */
    this.contentSections = new ContentSections(options);
    /**
     * @property images
     * @type {Images}
     */
    this.images = new Images(options);
    /**
     * @property microsites
     * @type {Microsites}
     */
    this.microsites = new Microsites(options);
    /**
     * @property optionLists
     * @type {OptionLists}
     */
    this.optionLists = new OptionLists(options);
  }
}

module.exports = Assets;
