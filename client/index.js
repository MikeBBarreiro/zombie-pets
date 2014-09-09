(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', '$interval', function($scope, $interval){
    var occupations = ['Distruction', 'Fluffyness', 'Danger', 'Chaos', 'Fluff', 'More Fluff', 'Lazers', 'Transformers', 'Madness'];

    $scope.title = 'zombie-pets';

    $scope.weapon = {};
    $scope.weapons = [];
    $scope.pet = {};
    $scope.pet = {health:100};
    $scope.pets = [];

    $scope.addPet = function(){
      var index = $scope.pet.weapon * 1;
      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet = {health:100};
    };

    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('#name').focus();
    };

    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };

    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };

    $scope.occupation = occupations[0];
//$intervals is like a loop
    $interval(function(){
      var rnd = Math.floor(Math.random() * occupations.length);
      $scope.occupation = occupations[rnd];
    }, 500);
  }]);
})();

