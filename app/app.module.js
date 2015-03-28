( function() {

  'use strict';

  // app.module.js
  angular
    .module( 'app', [ 'ui.router' ] )
  ;

  angular
    .element( document )
    .ready( function() {
      angular.bootstrap( document, [ 'app' ] );
    } )
  ;
} )();
