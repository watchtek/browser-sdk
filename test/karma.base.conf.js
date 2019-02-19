const webpackConfig = require("../webpack.config")(null, "development");

module.exports = {
  basePath: "..",
  files: ["src/**/*.spec.ts"],
  frameworks: ["mocha", "sinon-chai"],
  preprocessors: {
    "src/**/*.spec.ts": ["webpack"]
  },
  reporters: ["mocha"],
  mochaReporter: {
    output: "minimal",
    showDiff: true
  },
  singleRun: true,
  webpack: {
    mode: "development",
    stats: "minimal",
    module: webpackConfig.module,
    resolve: webpackConfig.resolve
  },
  webpackMiddleware: {
    stats: "errors-only",
    logLevel: "warn"
  }
};
