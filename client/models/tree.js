'use strict';

angular.module('trees')
.factory('Tree', function($http, nodeUrl){
  function Tree(){
  }
  
  Tree.create = function(){
    return $http.post(nodeUrl + '/trees');
  }
  Tree.find = function(){
    return $http.get(nodeUrl + '/trees');
  }
  Tree.grow = function(id){
    return $http.put(nodeUrl + '/trees/' + id + '/grow');
  }
  Tree.kill = function(id){
    return $http.delete(nodeUrl + '/trees/' + id + '/kill');
  }
  return Tree;
});
