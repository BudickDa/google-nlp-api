/**
 * Created by Daniel Budick on 17 Mär 2017.
 * Copyright 2017 Daniel Budick All rights reserved.
 * Contact: daniel@budick.eu / http://budick.eu
 *
 * This file is part of google-nlp-api
 *  is free software: you can redistribute it and/or modify
 * it under the terms of the MIT License
 *
 * google-nlp-api is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * MIT License for more details.
 *
 * You should have received a copy of the MIT License
 * along with google-nlp-api.
 */

import request from 'request';
import process from 'process';

export default class NLP {
	constructor(prefix = 'v1') {
		this.prefix = prefix;
		if (process.env.GOOGLE_NLP_API) {
			this.apiKey = process.env.GOOGLE_NLP_API;
		} else {
			throw new Error('No Google NLP Api key specefied.');
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

	annotateText(text, type = 'PLAIN_TEXT', encodingType = 'UTF8', features = {
		extractSyntax: true,
		extractEntities: true,
		extractDocumentSentiment: true
	}) {
		return this.fetch(`https://language.googleapis.com/${this.prefix}/documents:annotateText?key=${this.apiKey}`, this.request(text, type, encodingType, features));
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
		return new Promise(function(resolve, reject) {
			request.post({
				url: url,
				body: data,
				json: true
			}, function(err, response, body) {
				if (err) {
					return reject(err);
				}
				if (response.statusCode === 400) {
                    return reject(body);
				}
				if (response.statusCode === 200) {
					return resolve(body);
				}
				return reject(new Error(response.statusCode, body));
			});
		});
	}
}
module.exports = NLP;
