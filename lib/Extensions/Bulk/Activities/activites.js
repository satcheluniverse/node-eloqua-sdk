'use strict';

/**
 * @ignore
 * @type {ActivitiesExports}
 */
let ActivitiesExports = require('./exports');
/**
 * @ignore
 * @type {ActivitiesImports}
 */
let ActivitiesImports = require('./imports');
/**
 * @ignore
 * @type {ActivitiesFields}
 */
let ActivitiesFields = require('./fields');

/**
 * Activities Class
 * @class Activities
 * @main EloquaApi
 * @exports Activities
 * @constructor
 */
class Activities {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this.exports = new ActivitiesExports(options);
    this.imports = new ActivitiesImports(options);
    this.fields = new ActivitiesFields(options);
  }
}

module.exports = Activities;
