angular.module('hw.controllers', ['ngStorage'])

.controller('MainCtrl', function($localStorage, $scope, $ionicSideMenuDelegate) {

	$scope.toggleLeft = function(){
    $ionicSideMenuDelegate.toggleLeft();
  };

  // This concludes the init run
  $scope.firstRun = false;

})

.controller('DashCtrl', function($localStorage, $scope, $ionicSideMenuDelegate, $ionicSlideBoxDelegate, $ionicPopover) {

/*
	$scope.cores = Cores.all();
  $scope.events = Events.all();
  $scope.dateFormat = $localStorage.settings.dateFormat;

  var totalList = 0;
  $scope.listeners = Listeners.all();
  $scope.numLst = Object.size($scope.listeners);

  // used for individual popups
  $scope.activeCore = false;
  $scope.activeLsts = $scope.listeners;

  // Set up cores
  angular.forEach($scope.cores, function(core){
    core.listeners = Listeners.getByCore(core.id);
    core.numLst = core.listeners.length;
  });

  // Update lists
  $scope.$on('events-updated', function(e, args){
    $scope.events = Events.all();
    $ionicSlideBoxDelegate.update();
  });

  $scope.$on('listeners-updated', function(e, args){
    $scope.listeners = Listeners.all();
    $ionicSlideBoxDelegate.update();
  });

	$scope.nextSlide = function() {
		console.log('nextSlide');
    $ionicSlideBoxDelegate.next();
  };
  */

  $scope.enableAllEvents = function(){
    var lsts = $scope.activeLsts ? $scope.activeLsts : Listeners.all();
    Listeners.start(lsts);
  };

})

.controller('AboutCtrl', function($scope) {
  // ho hum
})




; // angular.module starter.controllers