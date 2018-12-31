'use strict';
/**
 * @module
 */

import ContactExports from './exports';
import ContactImports from './imports';
import ContactFields from './fields';
import ContactFilters from './filters';
import ContactLists from './lists';
import ContactScoringModels from './scoringModels';
import ContactSegments from './segments';
import ContactSyncActions from './syncActions';

/** Campaign Responses Class */
export default class Contacts {
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
    this.exports = new ContactExports(options);
    this.imports = new ContactImports(options);
    this.fields = new ContactFields(options);
    this.filters = new ContactFilters(options);
    this.lists = new ContactLists(options);
    this.scoringModels = new ContactScoringModels(options);
    this.segments = new ContactSegments(options);
    this.syncActions = new ContactSyncActions(options);
  }
}

