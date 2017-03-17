const assert = require('assert');
const NLP = require('./../index');
const util = require('util');
const _ = require('underscore');

describe('NLP', function() {
	const nlp = new NLP();

	/**
	 * Plain text
	 */
	describe('#analyzeEntities()', function() {
		it('should return the entitites in this text', function(done) {
			this.timeout(5000);
			nlp.analyzeEntities('Michelangelo Caravaggio, Italian painter, is known for\'The Calling of Saint Matthew\'.').then(res => {
				assert(_.where(res.entities, {name: 'Michelangelo Caravaggio', type: 'PERSON'}).length === 1);
				done();
			}).catch(err => {
				console.error(err);
				assert.fail();
				done();
			});
		});
	});

	describe('#analyzeSentiment()', function() {
		it('should return the sentiement of this text', function(done) {
			this.timeout(5000);
			nlp.analyzeSentiment('Go fuck yourself!').then(res => {
				assert(res.documentSentiment.score < 0);
				done();
			}).catch(err => {
				console.error(err);
				assert.fail();
				done();
			});
		});
	});

	describe('#analyzeSyntax()', function() {
		it('should return the syntax of this text', function(done) {
			this.timeout(5000);
			nlp.analyzeSyntax('Michelangelo Caravaggio, Italian painter, is known for\'The Calling of Saint Matthew\'.').then(res => {
				assert.deepEqual(res, {
					sentences: [{
						text: {
							content: 'Michelangelo Caravaggio, Italian painter, is known for\'The Calling of Saint Matthew\'.',
							beginOffset: 0
						}
					}],
					tokens: [{
						text: {content: 'Michelangelo', beginOffset: 0},
						partOfSpeech: {
							tag: 'NOUN',
							aspect: 'ASPECT_UNKNOWN',
							case: 'CASE_UNKNOWN',
							form: 'FORM_UNKNOWN',
							gender: 'GENDER_UNKNOWN',
							mood: 'MOOD_UNKNOWN',
							number: 'SINGULAR',
							person: 'PERSON_UNKNOWN',
							proper: 'PROPER',
							reciprocity: 'RECIPROCITY_UNKNOWN',
							tense: 'TENSE_UNKNOWN',
							voice: 'VOICE_UNKNOWN'
						},
						dependencyEdge: {headTokenIndex: 1, label: 'NN'},
						lemma: 'Michelangelo'
					},
						{
							text: {content: 'Caravaggio', beginOffset: 13},
							partOfSpeech: {
								tag: 'NOUN',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'SINGULAR',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 7, label: 'NSUBJPASS'},
							lemma: 'Caravaggio'
						},
						{
							text: {content: ',', beginOffset: 23},
							partOfSpeech: {
								tag: 'PUNCT',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 1, label: 'P'},
							lemma: ','
						},
						{
							text: {content: 'Italian', beginOffset: 25},
							partOfSpeech: {
								tag: 'ADJ',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 4, label: 'AMOD'},
							lemma: 'Italian'
						},
						{
							text: {content: 'painter', beginOffset: 33},
							partOfSpeech: {
								tag: 'NOUN',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'SINGULAR',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 1, label: 'APPOS'},
							lemma: 'painter'
						},
						{
							text: {content: ',', beginOffset: 40},
							partOfSpeech: {
								tag: 'PUNCT',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 1, label: 'P'},
							lemma: ','
						},
						{
							text: {content: 'is', beginOffset: 42},
							partOfSpeech: {
								tag: 'VERB',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'INDICATIVE',
								number: 'SINGULAR',
								person: 'THIRD',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'PRESENT',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 7, label: 'AUXPASS'},
							lemma: 'be'
						},
						{
							text: {content: 'known', beginOffset: 45},
							partOfSpeech: {
								tag: 'VERB',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'PAST',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 7, label: 'ROOT'},
							lemma: 'know'
						},
						{
							text: {content: 'for\'The', beginOffset: 51},
							partOfSpeech: {
								tag: 'NOUN',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'SINGULAR',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 9, label: 'NN'},
							lemma: 'for\'The'
						},
						{
							text: {content: 'Calling', beginOffset: 59},
							partOfSpeech: {
								tag: 'NOUN',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'SINGULAR',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 7, label: 'DOBJ'},
							lemma: 'Calling'
						},
						{
							text: {content: 'of', beginOffset: 67},
							partOfSpeech: {
								tag: 'ADP',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 9, label: 'PREP'},
							lemma: 'of'
						},
						{
							text: {content: 'Saint', beginOffset: 70},
							partOfSpeech: {
								tag: 'NOUN',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'SINGULAR',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 12, label: 'NN'},
							lemma: 'Saint'
						},
						{
							text: {content: 'Matthew', beginOffset: 76},
							partOfSpeech: {
								tag: 'NOUN',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'SINGULAR',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 10, label: 'POBJ'},
							lemma: 'Matthew'
						},
						{
							text: {content: '\'', beginOffset: 83},
							partOfSpeech: {
								tag: 'PUNCT',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 12, label: 'P'},
							lemma: '\''
						},
						{
							text: {content: '.', beginOffset: 84},
							partOfSpeech: {
								tag: 'PUNCT',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 7, label: 'P'},
							lemma: '.'
						}],
					language: 'en'
				});
				done();
			}).catch(err => {
				console.error(err);
				assert.fail();
				done();
			});
		});
	});

	describe('#annotateText()', function() {
		it('should return the entitites in this text', function(done) {
			this.timeout(5000);
			nlp.annotateText('Michelangelo Caravaggio Italian painter, is known for \'The Calling of Saint Matthew\'.', {
				extractSyntax: false,
				extractEntities: true,
				extractDocumentSentiment: false
			}).then(res => {
				assert(_.where(res.entities, {name: 'Michelangelo Caravaggio', type: 'PERSON'}).length === 1);
				done();
			}).catch(err => {
				console.error(err);
				assert.fail();
				done();
			});
		});
	});

	/**
	 * Analyse HTML
	 */

	describe('#analyzeEntities() with HTML', function() {
		it('should return the entitites in this text', function(done) {
			this.timeout(5000);
			nlp.analyzeEntities('<h2>Michelangelo Caravaggio</h2> Italian painter, is known for <a>\'The Calling of Saint Matthew\'</a>.', 'HTML').then(res => {
				assert(_.where(res.entities, {name: 'Michelangelo caravaggio', type: 'PERSON'}).length === 1);
				done();
			}).catch(err => {
				console.error(err);
				assert.fail();
				done();
			});
		});
	});

	describe('#analyzeSentiment() with HTML', function() {
		it('should return the sentiement of this text', function(done) {
			this.timeout(5000);
			nlp.analyzeSentiment('<bold>Go fuck yourself!</bold>', 'HTML').then(res => {
				assert(res.documentSentiment.score < 0);
				done();
			}).catch(err => {
				console.error(err);
				assert.fail();
				done();
			});
		});
	});

	describe('#analyzeSyntax() with HTML', function() {
		it('should return the syntax of this text', function(done) {
			this.timeout(5000);
			nlp.analyzeSyntax('<h2>Michelangelo Caravaggio</h2> Italian painter, is known for <a>\'The Calling of Saint Matthew\'</a>.', 'HTML').then(res => {
				assert.deepEqual(res, {
					sentences: [{text: {content: 'Michelangelo Caravaggio', beginOffset: 4}},
						{
							text: {
								content: 'Italian painter, is known for <a>\'The Calling of Saint Matthew\'</a>.',
								beginOffset: 33
							}
						}],
					tokens: [{
						text: {content: 'Michelangelo', beginOffset: 4},
						partOfSpeech: {
							tag: 'NOUN',
							aspect: 'ASPECT_UNKNOWN',
							case: 'CASE_UNKNOWN',
							form: 'FORM_UNKNOWN',
							gender: 'GENDER_UNKNOWN',
							mood: 'MOOD_UNKNOWN',
							number: 'SINGULAR',
							person: 'PERSON_UNKNOWN',
							proper: 'PROPER',
							reciprocity: 'RECIPROCITY_UNKNOWN',
							tense: 'TENSE_UNKNOWN',
							voice: 'VOICE_UNKNOWN'
						},
						dependencyEdge: {headTokenIndex: 1, label: 'NN'},
						lemma: 'Michelangelo'
					},
						{
							text: {content: 'Caravaggio', beginOffset: 17},
							partOfSpeech: {
								tag: 'NOUN',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'SINGULAR',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 1, label: 'ROOT'},
							lemma: 'Caravaggio'
						},
						{
							text: {content: 'Italian', beginOffset: 33},
							partOfSpeech: {
								tag: 'ADJ',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 3, label: 'AMOD'},
							lemma: 'Italian'
						},
						{
							text: {content: 'painter', beginOffset: 41},
							partOfSpeech: {
								tag: 'NOUN',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'SINGULAR',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 6, label: 'NSUBJPASS'},
							lemma: 'painter'
						},
						{
							text: {content: ',', beginOffset: 48},
							partOfSpeech: {
								tag: 'PUNCT',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 3, label: 'P'},
							lemma: ','
						},
						{
							text: {content: 'is', beginOffset: 50},
							partOfSpeech: {
								tag: 'VERB',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'INDICATIVE',
								number: 'SINGULAR',
								person: 'THIRD',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'PRESENT',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 6, label: 'AUXPASS'},
							lemma: 'be'
						},
						{
							text: {content: 'known', beginOffset: 53},
							partOfSpeech: {
								tag: 'VERB',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'PAST',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 6, label: 'ROOT'},
							lemma: 'know'
						},
						{
							text: {content: 'for', beginOffset: 59},
							partOfSpeech: {
								tag: 'ADP',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 6, label: 'PREP'},
							lemma: 'for'
						},
						{
							text: {content: '\'', beginOffset: 66},
							partOfSpeech: {
								tag: 'PUNCT',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 7, label: 'P'},
							lemma: '\''
						},
						{
							text: {content: 'The', beginOffset: 67},
							partOfSpeech: {
								tag: 'DET',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 10, label: 'DET'},
							lemma: 'The'
						},
						{
							text: {content: 'Calling', beginOffset: 71},
							partOfSpeech: {
								tag: 'NOUN',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'SINGULAR',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 7, label: 'POBJ'},
							lemma: 'Calling'
						},
						{
							text: {content: 'of', beginOffset: 79},
							partOfSpeech: {
								tag: 'ADP',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 10, label: 'PREP'},
							lemma: 'of'
						},
						{
							text: {content: 'Saint', beginOffset: 82},
							partOfSpeech: {
								tag: 'NOUN',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'SINGULAR',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 13, label: 'NN'},
							lemma: 'Saint'
						},
						{
							text: {content: 'Matthew', beginOffset: 88},
							partOfSpeech: {
								tag: 'NOUN',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'SINGULAR',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 11, label: 'POBJ'},
							lemma: 'Matthew'
						},
						{
							text: {content: '\'', beginOffset: 95},
							partOfSpeech: {
								tag: 'PUNCT',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 13, label: 'P'},
							lemma: '\''
						},
						{
							text: {content: '.', beginOffset: 100},
							partOfSpeech: {
								tag: 'PUNCT',
								aspect: 'ASPECT_UNKNOWN',
								case: 'CASE_UNKNOWN',
								form: 'FORM_UNKNOWN',
								gender: 'GENDER_UNKNOWN',
								mood: 'MOOD_UNKNOWN',
								number: 'NUMBER_UNKNOWN',
								person: 'PERSON_UNKNOWN',
								proper: 'PROPER_UNKNOWN',
								reciprocity: 'RECIPROCITY_UNKNOWN',
								tense: 'TENSE_UNKNOWN',
								voice: 'VOICE_UNKNOWN'
							},
							dependencyEdge: {headTokenIndex: 6, label: 'P'},
							lemma: '.'
						}],
					language: 'en'
				})
				done();
			}).catch(err => {
				console.error(err);
				assert.fail();
				done();
			});
		});
	});

	describe('#annotateText() with HTML', function() {
		it('should return the entitites in this text', function(done) {
			this.timeout(5000);
			nlp.annotateText('<h2>Michelangelo Caravaggio</h2> Italian painter, is known for <a>\'The Calling of Saint Matthew\'</a>.', {
				extractSyntax: false,
				extractEntities: true,
				extractDocumentSentiment: false
			}, 'HTML').then(res => {
				assert(_.where(res.entities, {name: 'Michelangelo caravaggio', type: 'PERSON'}).length === 1);
				done();
			}).catch(err => {
				console.error(err);
				assert.fail();
				done();
			});
		});
	});
});
