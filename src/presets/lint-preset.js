const eslint = require('neutrino-middleware-eslint');
const neutrino = require('neutrino');

module.exports = (neutrino) => {
  // Usage shows default values
  neutrino.use(eslint, {
    test: /\.(js|jsx)$/,
    include: [], /* Should specify either include or exclude */
    exclude: [], /* Should specify either include or exclude */
    eslint: {
      failOnError: process.env.NODE_ENV !== 'development',
      emitWarning: process.env.NODE_ENV !== 'development',
      emitError: process.env.NODE_ENV !== 'development',
      cwd: neutrino.options.root,
      useEslintrc: false,
      root: true,
      plugins: ['babel'],
      baseConfig: {},
      envs: ['es6'],
      parser: 'babel-eslint',
      parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
          objectLiteralDuplicateProperties: false,
          generators: true,
          impliedStrict: true
        }
      },
      settings: {},
      globals: ['process'],
      rules: {
        // Don't require () for single argument arrow functions
        'arrow-parens': 'off',
        // Don't require trailing commas
        'comma-dangle': 'off',
        // Don't require file extensions on imports
        'import/extensions': 'off',
        // Don't mark as unresolved without extensions
        'import/no-unresolved': 'off',
        // Don't let ESLint tell us how to use whitespace for imports
        'padded-blocks': 'off',
        // Hold off on propTypes for now
        'react/prop-types': 'off',
        // Change linebreak style depending which OS is being used
        "linebreak-style": ["error", process.env.OS === 'windows' ? "windows" : "unix"]
      }
    }
  });
};
