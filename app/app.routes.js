( function() {

  'use strict';

  angular
    .module( 'app' )
    .config( function( $stateProvider, $urlRouterProvider ) {
      $stateProvider
        .state( 'root', {
          abstract:true,
          views: {
            '': {
              templateUrl: 'layout/shell.html'
            }
          },
          controller: 'ShellCtrl as shellCtrl'
        } )
        .state( 'root.landing', {
          url:'',
          templateUrl:'landing/landing.html'
        } )
      ;

      $urlRouterProvider
        // Default to landing page
        .otherwise ( '' );

    } );
} )();
