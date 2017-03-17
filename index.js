require('babel-core/register');
require('babel-regenerator-runtime')
require('babel-polyfill');
require('dotenv').load();

const NLP = require('./dist/nlp').default;
module.exports = NLP;
