'use strict';
/**
 * @module
 */

import OpportunitiesImports from './imports';
import OpportunitiesFields from './fields';
import OpportunitiesContacts from './contacts';

/** Campaign Responses Class */
export default class Opportunities {
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
    this.imports = new OpportunitiesImports(options);
    this.fields = new OpportunitiesFields(options);
    this.contacts = new OpportunitiesContacts(options);
  }
}

