'use strict';

angular.module('coTreeModule', [])
.directive('coTree', function(){
  var o = {};

  o.restrict = 'A';
  o.templateUrl = '/directives/co-tree/co-tree.html';
  o.scope = {
    height: '=',
    health: '=',
    id: '='
  };
  o.link = function($scope, element, attrs){};
  o.controller = function($scope, $rootScope, $window, Tree){
    $scope.state = $window._.find($rootScope.lives, function(life){
      return (life.min <= $scope.height) && (life.max >= $scope.height);
    });
    $scope.grow = function(){
      Tree.grow($scope.id)
      .then(function(response){
        console.log(response.data);
      });
    }
  };

  return o;
});
