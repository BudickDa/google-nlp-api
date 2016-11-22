const {assert} = require('mocha');
const NLP = require('./../index');
const util = require('util');

describe('NLP', function() {
  const nlp = new NLP();

  describe('#analyzeEntities()', function() {
    it('should return the entitites in this text', function(done) {
      this.timeout(5000);
      nlp.analyzeEntities('Michelangelo Caravaggio, Italian painter, is known for\'The Calling of Saint Matthew\'.').then(res => {
        console.log(util.inspect(res, {depth: null}));
        done();
      }).catch(err => {
        console.error(util.inspect(err, {depth: null}));
        done();
      });
    });
  });

  describe('#analyzeSentiment()', function() {
    it('should return the sentiement of this text', function(done) {
      this.timeout(5000);
      nlp.analyzeSentiment('Eric, didn\'t I tell you to wash up for dinner. I know, it\'s difficult to hear with your head up your ass.').then(res => {
        console.log(util.inspect(res, {depth: null}));
        done();
      }).catch(err => {
        console.error(util.inspect(err, {depth: null}));
        done();
      });
    });
  });

  describe('#analyzeSyntax()', function() {
    it('should return the syntax of this text', function(done) {
      this.timeout(5000);
      nlp.analyzeSyntax('Michelangelo Caravaggio, Italian painter, is known for\'The Calling of Saint Matthew\'.').then(res => {
        console.log(util.inspect(res, {depth: null}));
        done();
      }).catch(err => {
        console.error(util.inspect(err, {depth: null}));
        done();
      });
    });
  });

  describe('#annotateText()', function() {
    it('should return the entitites in this text', function(done) {
      this.timeout(5000);
      nlp.analyzeEntities('Michelangelo Caravaggio, Italian painter, is known for\'The Calling of Saint Matthew\'.').then(res => {
        console.log(util.inspect(res, {depth: null}));
        done();
      }).catch(err => {
        console.error(util.inspect(err, {depth: null}));
        done();
      });
    });
  });
});

