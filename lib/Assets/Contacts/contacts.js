'use strict';
/**
 * @module
 */


import ContactFields from './contactFields';
import ContactLists from './contactLists';
import ContactSegments from './contactSegments';

/** Contacts Class */
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
    this.#parent = options;
    this.fields = new ContactFields(this.#parent);
    this.lists = new ContactLists(this.#parent);
    this.segments = new ContactSegments(this.#parent);
  }

}

