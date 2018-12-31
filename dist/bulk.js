'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _accounts = _interopRequireDefault(require("./Bulk/Accounts/accounts"));

var _activites = _interopRequireDefault(require("./Bulk/Activities/activites"));

var _campaignFields = _interopRequireDefault(require("./Bulk/Campaigns/campaignFields"));

var _campaignResponses = _interopRequireDefault(require("./Bulk/Campaigns/campaignResponses"));

var _contacts = _interopRequireDefault(require("./Bulk/Contacts/contacts"));

var _customObjects = _interopRequireDefault(require("./Bulk/CustomObjects/customObjects"));

var _emailAddresses = _interopRequireDefault(require("./Bulk/EmailAddresses/emailAddresses"));

var _emailGroups = _interopRequireDefault(require("./Bulk/emailGroups"));

var _events = _interopRequireDefault(require("./Bulk/Events/events"));

var _opportunities = _interopRequireDefault(require("./Bulk/Opportunities/opportunities"));

var _exports = _interopRequireDefault(require("./Bulk/exports"));

var _imports = _interopRequireDefault(require("./Bulk/Imports/imports"));

var _syncActions = _interopRequireDefault(require("./Bulk/syncActions"));

var _syncs = _interopRequireDefault(require("./Bulk/syncs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class Bulk {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    this.accounts = new _accounts.default(options);
    this.activities = new _activites.default(options);
    this.campaignFields = new _campaignFields.default(options);
    this.campaignResponses = new _campaignResponses.default(options);
    this.contacts = new _contacts.default(options);
    this.customObjects = new _customObjects.default(options);
    this.emailAddresses = new _emailAddresses.default(options);
    this.emailGroups = new _emailGroups.default(options);
    this.events = new _events.default(options);
    this.opportunities = new _opportunities.default(options);
    this.exports = new _exports.default(options);
    this.imports = new _imports.default(options);
    this.syncActions = new _syncActions.default(options);
    this.syncs = new _syncs.default(options);
  }

}

exports.default = Bulk;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=bulk.js.map
