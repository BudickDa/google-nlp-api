# google-nlp-api
A small wrapper for the google natural language api

# Install
`npm install google-nlp-api`

# Usage

    // Provide your API-Key as environment variable apiKey
    // or put it as parameter into the constructor
    //Create instance of module
    // apiKey: if provided as environment variable set null or false or leave empty
    // prefix: Prefix of the API, if in doupt leave empty
    const nlp = new NLP(apiKey, prefix);

    // Text you want to analyse
    const text = 'Michelangelo Caravaggio, Italian painter, is known for\'The Calling of Saint Matthew\'.';

    nlp.analyzeEntities(text).then(res => {console.log(res);});

    nlp.analyzeSentiment(text).then(res => {console.log(res);});

    nlp.analyzeSyntax(text).then(res => {console.log(res);});

    // Features you want to annotate
    // Annotate all the thing! (this is the default, so you could leave it empty)
    const features = [
        {extractSyntax: true},
        {extractEntities: true},
        {extractDocumentSentiment: true}
    ];
    nlp.annotateText(text, features).then(res => {console.log(res);});
