require('babel-core/register');
require('babel-regenerator-runtime')
require('babel-polyfill');

const NLP = require('./dist/nlp').default;
module.exports = NLP;
