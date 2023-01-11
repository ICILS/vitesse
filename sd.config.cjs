const coreAndSemanticTokens = ['color']
const componentTokens = ['button']

const tokenFilter = cat => (token) => {
  const { category, type } = token.attributes
  return ['core', 'semantic'].includes(category)
    ? type === cat
    : category === cat
}

const generateFilesArr = (tokensCategories, ext, format) => {
  return tokensCategories.map((cat) => {
    return {
      filter: tokenFilter(cat),
      destination: `tokens/out/${cat}/src/${cat}.tokens.${ext}`,
      format,
    }
  })
}
// NOTE: Style Dictionary recommends using the Category/Type/Item (CTI) structure for our tokens.
module.exports = {
  source: ['tokens/in/**/*.tokens.json'],
  format: {
    /**
     * Add your custom formats here and
     * use them in the platforms below, e.g.
     *
     * exampleFormat: (opts) => {
     *   const { dictionary, file } = opts;
     *   let output = '';
     *   // do something with the dictionary, file
     *   // and output and return it
     *   return output;
     * }
     */
  },
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'starter',
      // TODO: Set up packages to build to dist
      buildPath: 'tokens/dist/',
      files: generateFilesArr(
        [...coreAndSemanticTokens, ...componentTokens],
        'css',
        'css/variables',
      ),
    },
    scss: {
      transformGroup: 'css',
      prefix: 'starter',
      buildPath: 'tokens/dist/',
      files: generateFilesArr(coreAndSemanticTokens, 'scss', 'scss/variables'),
    },
    sass: {
      transformGroup: 'css',
      prefix: 'starter',
      buildPath: 'tokens/dist/',
      files: generateFilesArr(coreAndSemanticTokens, 'sass', 'sass/variables'),
    },
    js: {
      transformGroup: 'js',
      prefix: 'starter',
      buildPath: 'tokens/dist/',
      files: generateFilesArr(coreAndSemanticTokens, 'js', 'javascript/es6'),
    },
    componentTokens: {
      transformGroup: 'component',
      prefix: 'starter',
      buildPath: 'tokens/dist/',
      files: generateFilesArr(componentTokens, 'js', 'javascript/es6'),
    },
  },
}
