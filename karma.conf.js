module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-coverage-istanbul-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require("path").join(__dirname, "coverage"), // Directory where the coverage report will be saved
      reports: ["html", "lcovonly", "text-summary"], // Reports to generate
      fixWebpackSourcePaths: true,
    },
    reporters: ["progress", "coverage-istanbul"], // Add coverage-istanbul to the reporters array
    browsers: ["Chrome"], // You can change it to the browser you use
    singleRun: false,
    restartOnFileChange: true,
  });
};
