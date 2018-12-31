'use strict';
/**
 * @module
 */

import ActivitiesExports from './exports';
import ActivitiesImports from './imports';
import ActivitiesFields from './fields';

/** Activities Class */
export default class Activities {
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
    this.exports = new ActivitiesExports(options);
    this.imports = new ActivitiesImports(options);
    this.fields = new ActivitiesFields(options);
  }
}

