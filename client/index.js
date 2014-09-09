(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', '$interval', function($scope, $interval){
    var occupations = ['Distruction', 'Fluffyness', 'Danger', 'Chaos', 'Fluff', 'More Fluff', 'Lazers', 'Transformers', 'Madness'];

    $scope.title = 'zombie-pets';
    $scope.occupation = occupations[0];
//$intervals is like a loop
    $interval(function(){
      var rnd = Math.floor(Math.random() * occupations.length);
      $scope.occupation = occupations[rnd];
    }, 500);
  }]);
})();

