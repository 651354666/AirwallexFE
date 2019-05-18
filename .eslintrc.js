module.exports = {
  "extends": "airbnb",
  "root": true, 
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": 'module'
  },
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-console": "error",
    "arrow-parens": 0
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack/webpack.build.config.js'
      },
    },
  }
}