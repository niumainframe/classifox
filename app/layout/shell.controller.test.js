describe( 'ShellCtrl', function() {

  'use strict';

  var $controller;

  beforeEach( module( 'app' ) );

  beforeEach( inject( function( _$controller_ ){
    $controller = _$controller_;
  } ) );

  it( 'is defined', function() {
    var
      $scope = {},
      controller = $controller(
        'ShellCtrl',
        { $scope: $scope }
      );

    expect( controller ).toBeDefined();
  } );

} );
