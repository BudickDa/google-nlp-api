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

            return this.fetch('https://language.googleapis.com/' + this.prefix + '/documents:analyzeEntities?key=' + this.apiKey, this.request(text, type, encodingType));
        }
    }, {
        key: 'analyzeSentiment',
        value: function analyzeSentiment(text) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'PLAIN_TEXT';
            var encodingType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'UTF8';

            return this.fetch('https://language.googleapis.com/' + this.prefix + '/documents:analyzeSentiment?key=' + this.apiKey, this.request(text, type, encodingType));
        }
    }, {
        key: 'analyzeSyntax',
        value: function analyzeSyntax(text) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'PLAIN_TEXT';
            var encodingType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'UTF8';

            return this.fetch('https://language.googleapis.com/' + this.prefix + '/documents:analyzeSyntax?key=' + this.apiKey, this.request(text, type, encodingType));
        }
    }, {
        key: 'annotateText',
        value: function annotateText(text) {
            var features = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [{ extractSyntax: true }, { extractEntities: true }, { extractDocumentSentiment: true }];
            var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'PLAIN_TEXT';
            var encodingType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'UTF8';

            return this.fetch('https://language.googleapis.com/' + this.prefix + '/documents:annotateText?key=' + this.apiKey, this.request(text, type, encodingType, features));
        }
    }, {
        key: 'request',
        value: function request(text, type, encodingType, features) {
            var request = {
                document: {
                    type: type,
                    content: text
                },
                encodingType: encodingType
            };
            if (features) {
                request.features = features;
            }
            return request;
        }
    }, {
        key: 'fetch',
        value: function fetch(url, data) {
            return new Promise(function (resolve, reject) {
                _request2.default.post({
                    url: url,
                    body: data,
                    json: true
                }, function (err, response, body) {
                    if (err) {
                        reject(err);
                    }
                    resolve(body);
                });
            });
        }
    }]);

    return NLP;
}();

exports.default = NLP;