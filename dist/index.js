'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asString(templateFile, replacements) {
  var template = _fs2.default.readFileSync(templateFile).toString();

  var compiled = _lodash2.default.template(template);
  return compiled(replacements);
}

var asFunction = function asFunction(templateFile, replacements) {
  return eval(scriptAsString(templateFile, replacements));
};

exports.default = {
  asFunction: asFunction,
  asString: asString
};