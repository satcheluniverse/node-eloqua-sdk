'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _campaigns = _interopRequireDefault(require("./Assets/campaigns"));

var _programs = _interopRequireDefault(require("./Assets/programs"));

var _emails = _interopRequireDefault(require("./Assets/Emails/emails"));

var _landingPages = _interopRequireDefault(require("./Assets/landingPages"));

var _forms = _interopRequireDefault(require("./Assets/Forms/forms"));

var _externalAssets = _interopRequireDefault(require("./Assets/ExternalAssets/externalAssets"));

var _contentSections = _interopRequireDefault(require("./Assets/contentSections"));

var _images = _interopRequireDefault(require("./Assets/images"));

var _microsites = _interopRequireDefault(require("./Assets/microsites"));

var _optionLists = _interopRequireDefault(require("./Assets/optionLists"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class Assets {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    this.campaigns = new _campaigns.default(options);
    this.programs = new _programs.default(options);
    this.emails = new _emails.default(options);
    this.landingPages = new _landingPages.default(options);
    this.forms = new _forms.default(options);
    this.externalAssets = new _externalAssets.default(options);
    this.contentSections = new _contentSections.default(options);
    this.images = new _images.default(options);
    this.microsites = new _microsites.default(options);
    this.optionLists = new _optionLists.default(options);
  }

}

exports.default = Assets;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=assets.js.map
