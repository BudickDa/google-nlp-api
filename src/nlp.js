import request from 'request';
import process from 'process';
import URL from 'url';
import _ from 'underscore';

export default class NLP {
    constructor(apiKey, prefix = 'v1beta1') {
        this.prefix = prefix;
        if (apiKey) {
            this.apiKey = apiKey;
        } else if (process.env.apiKey) {
            this.apiKey = process.env.apiKey;
        }
    }

    analyzeEntities(text, type = 'PLAIN_TEXT', encodingType = 'UTF8') {
        return this.fetch(`https://language.googleapis.com/${this.prefix}/documents:analyzeEntities?key=${this.apiKey}`, this.request(text, type, encodingType));
    }

    analyzeSentiment(text, type = 'PLAIN_TEXT', encodingType = 'UTF8') {
        return this.fetch(`https://language.googleapis.com/${this.prefix}/documents:analyzeSentiment?key=${this.apiKey}`, this.request(text, type, encodingType));
    }

    analyzeSyntax(text, type = 'PLAIN_TEXT', encodingType = 'UTF8') {
        return this.fetch(`https://language.googleapis.com/${this.prefix}/documents:analyzeSyntax?key=${this.apiKey}`, this.request(text, type, encodingType));
    }

    annotateText(text, features = [
        {extractSyntax: true},
        {extractEntities: true},
        {extractDocumentSentiment: true}
    ], type = 'PLAIN_TEXT', encodingType = 'UTF8') {
        return this.fetch(`https://language.googleapis.com/${this.prefix}/documents:annotateText?key=${this.apiKey}`, this.request(text, type, encodingType));
    }

    request(text, type, encodingType, features) {
        const request = {
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

    fetch(url, data) {
        return new Promise(function (resolve, reject) {
            request.post({
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
}
