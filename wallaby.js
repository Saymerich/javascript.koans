module.exports = function(wallaby) {
  return {
    files: [
      { pattern: 'support/jquery-1.4.1.js', instrument: false, load: true, ignore: false },
      { pattern: 'support/qunit.js', instrument: false, load: true, ignore: false },
      "support/koans.js"
    ],

    tests: [
      "topics/*.js"
    ],

    debug: true,

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    }
  };
};
