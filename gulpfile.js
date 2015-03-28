var few = require( './front-end-workflow/gulpfile.js' );

few.angular = {
  module: 'app'
};

few.globals = {
  angular: false
};

few.files = {
  package: [ __dirname + '/package.json' ],
  node: [ './gulpfile.js' ],
  json: [ './package.json' ],
  browser: [ './app/app.module.js',
              './app/**/*.*.js',
              '!app/**/*.test.js' ],
  css: [ './app/style.less' ],
  html: [ './app/**/*.html' ],
  unit: [
    './node_modules/angular-mocks/angular-mocks.js',
    './app/**/*.html'
  ],
  libraries: {
    '/ramda.js': './node_modules/ramda/dist/ramda.js',
    '/bind.js':
      './node_modules/polyfill-function-prototype-bind/bind.js',
    '/normalize.css':
      './node_modules/normalize.css/normalize.css',
    '/angular.js':
      './node_modules/angular-ui-router/lib/angular-1.3.0/angular.js',
    '/angular-ui-router.js':
      './node_modules/angular-ui-router/release/angular-ui-router.js'
  },
  devLibraries: {
    '/less.js': './node_modules/less/dist/less.js'
  }
};
