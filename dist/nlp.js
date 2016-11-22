'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NLP = function () {
  function NLP(apiKey) {
    var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'v1beta1';

    _classCallCheck(this, NLP);

    this.prefix = prefix;
    console.log(_process2.default.env.apiKey);
    if (apiKey) {
      this.apiKey = apiKey;
    } else if (_process2.default.env.apiKey) {
      this.apiKey = _process2.default.env.apiKey;
    }
  }

  _createClass(NLP, [{
    key: 'analyzeEntities',
    value: function analyzeEntities(text) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'PLAIN_TEXT';
      var encodingType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'UTF8';

      return this.fetch('https://language.googleapis.com/' + this.prefix + '/documents:annotateText', this.request(text, type, encodingType));
    }
  }, {
    key: 'request',
    value: function request(text, type, encodingType) {
      return {
        document: {
          type: type,
          content: text
        },
        encodingType: encodingType
      };
    }
  }, {
    key: 'fetch',
    value: function fetch(url, data) {
      var apiKey = this.apiKey;
      return new Promise(function (resolve, reject) {
        (0, _request2.default)({
          method: 'POST',
          url: url,
          body: JSON.stringify({ raw: data }),
          /*headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json; charset=utf-8"
          }*/
          'auth': {
            'bearer': apiKey
          }
        }, function (err, response, body) {
          if (err) {
            reject(err);
          }
          console.log(body);
          resolve(body);
        });
      });
    }
  }]);

  return NLP;
}();

exports.default = NLP;