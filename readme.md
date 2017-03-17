# google-nlp-api
A small wrapper for the google natural language api

# Install
`npm install google-nlp-api`

## Set API-Key with environment variable

**Windows:**
`setx GOOGLE_NLP_API 1234APIKEY`
or you can find the tool from System by typing 'environment' into the search box in start menu.

**Unix:**
`export GOOGLE_NLP_API=1234APIKEY`

**Or:**
Create .env file with the content:
`GOOGLE_NLP_API=1234APIKEY`


# Usage

    // Provide your API-Key as environment variable GOOGLE_NLP_API
    //Create instance of module
    // prefix: Prefix of the API, if in doupt leave empty
    const prefix = 'v1';
    const nlp = new NLP(prefix);

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
    nlp.annotateText('<h1>This is sparta!</h1><p>A short story about 300 half naked men.</p>', 'HTML', 'UTF8' features).then(res => {console.log(res);});

# Test
1. Set environment variable GOOGLE_NLP_API.
2. `npm test`
3. ???
4. Profit!