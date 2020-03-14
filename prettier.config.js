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
  trailingComma: "none",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "avoid",
  requirePragma: false,
  insertPragma: false,
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: false,
  endOfLine: "auto"

  // https://github.com/prettier/prettier/issues/2334
  // overrides: [
  //   {
  //     files: "*.ts",
  //     options: {
  //       parser: "babel"
  //     }
  //   }
  // ]
};
