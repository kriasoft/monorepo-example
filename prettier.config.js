/**
 * Prettier configuration
 * https://prettier.io/docs/en/configuration.html
 * https://prettier.io/docs/en/options.html
 */

module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  requirePragma: false,
  insertPragma: false,
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: false,
  endOfLine: "lf",
  overrides: [
    {
      files: "*.code-workspace",
      options: { parser: "json" },
    },
  ],
};
