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
  o.controller = function($scope, $rootScope, $window, Tree, $interval){
    getState();
    $scope.dead = false;
    $scope.grow = function(){
      Tree.grow($scope.id)
      .then(function(response){
        getState();
        if(response.data.health < 1){
          $scope.dead = true;
          Tree.kill($scope.id)
          .then(function(response){
            setTimeout(function(){
              Tree.find()
              .then(function(response){
                $rootScope.trees = response.data.trees;
              });
            }, 2000);
          })
        }
        $scope.height = response.data.height;
        $scope.health = response.data.health;
      });
    }
    function getState(){
      console.log('counting seconds');
      $scope.state = $window._.find($rootScope.lives, function(life){
        return (life.min <= $scope.height) && (life.max >= $scope.height);
      });
    }
  };

  return o;
});

// ng-class='{"class": {{dead}}}'
// && response.data.height <= 1000
