import request from 'request';
import process from 'process';
import URL from 'url';
import _ from 'underscore';

export default class NLP {
  constructor(apiKey, prefix = 'v1beta1') {
    this.prefix = prefix;
    console.log(process.env.apiKey)
    if (apiKey) {
      this.apiKey = apiKey;
    } else if (process.env.apiKey) {
      this.apiKey = process.env.apiKey;
    }
  }

  analyzeEntities(text, type = 'PLAIN_TEXT', encodingType = 'UTF8') {
    return this.fetch(`https://language.googleapis.com/${this.prefix}/documents:annotateText`, this.request(text, type, encodingType));
  }

  request(text, type, encodingType) {
    return {
      document: {
        type: type,
        content: text
      },
      encodingType: encodingType
    };
  }

  fetch(url, data) {
    const apiKey = this.apiKey;
    return new Promise(function(resolve, reject) {
      request({
        method: 'POST',
        url: url,
        body: JSON.stringify({raw: data}),
        /*headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json; charset=utf-8"
        }*/
        'auth': {
          'bearer': apiKey
        }
      }, function(err, response, body) {
        if (err) {
          reject(err);
        }
        console.log(body);
        resolve(body);
      });
    });
  }
}
