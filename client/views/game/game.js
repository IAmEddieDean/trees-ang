'use strict';

angular.module('trees')
.controller('GameCtrl', function(Life, $scope, Tree, $rootScope){
  Life.find()
  .then(function(response){
    $rootScope.lives = response.data.lives;
    
    Tree.find()
    .then(function(response){
      $rootScope.trees = response.data.trees;
    });
  });
  
  
  $scope.plantTree = function(){
    Tree.create()
    .then(function(response){
      $scope.trees.push(response.data);
    });
  }
});
