/**
 * Babel configuration
 * https://babeljs.io/docs/en/options
 * https://babeljs.io/docs/en/babel-preset-typescript
 */

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          // https://cloud.google.com/functions/docs/concepts/nodejs-10-runtime
          node: "10.16.2",
        },
        loose: true,
        useBuiltIns: "usage",
        corejs: { version: 3, proposals: true },
        ignoreBrowserslistConfig: true,
      },
    ],
    "@babel/preset-typescript",
  ],

  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
  ],

  sourceMaps: true,
};
