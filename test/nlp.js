const {assert} = require('mocha');
const NLP = require('./../index');

describe('NLP', function() {
  const nlp = new NLP();

  describe('#analyzeEntities()', function() {
    it('should return the entitites in this text', function(done) {
      nlp.analyzeEntities('Michelangelo Caravaggio, Italian painter, is known for\'The Calling of Saint Matthew\'.').then(res => {
        console.log(res);
        done();
      }).catch(err => {
        console.error(err);
        done();
      });
    });
  });
});
