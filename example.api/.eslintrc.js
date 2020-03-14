/**
 * ESLint Configuration
 * http://eslint.org/docs/user-guide/configuring
 * https://github.com/babel/babel-eslint
 * https://prettier.io/docs/en/integrating-with-linters.html#eslint
 */

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module"
  },
  plugins: ["babel"],
  rules: {}
};
