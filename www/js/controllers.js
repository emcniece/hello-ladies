angular.module('hw.controllers', [])

.controller('MainCtrl', function($scope) {

	$scope.toggleLeft = function(){
    $ionicSideMenuDelegate.toggleLeft();
  };

  // This concludes the init run
  $scope.firstRun = false;

})

.controller('DashCtrl', function($scope) {

  $scope.action="Select options above...";
  $scope.location= {};
  $scope.length = {};
  $scope.type = {};
  $scope.button = {
    color: 'calm',
    clear: 'clear'
  };

  $scope.locations = [
    {id: 'formal', label: 'Formal (work, school)'},
    {id: 'rec_clean', label: 'Recreational Space (no drinking)'},
    {id: 'rec_fun', label: 'Recreational Space (drinking)'}
  ];

  $scope.lengths = [
    {id: 'intro', label: 'Introduction'},
    {id: 'newTerm', label: '2-5 Meetings (>3 months)'},
    {id: 'shortTerm', label: '6+ Meetings (<3 months)'},
    {id: 'longTerm', label: 'Long Term (<2 years)'}
  ];

  $scope.types = [
    {id: 'acq', label: 'Acquaintance'},
    {id: 'platonic', label: 'Platonic Friend'},
    {id: 'romantic', label: 'Romantic Interest/Partner'},
    {id: 'coworker', label: 'Coworker/Classmate'}
  ];


  $scope.updateAction = function(){

    if( (typeof($scope.location.data) === 'undefined') ||
        (typeof($scope.length.data) === 'undefined') ||
        (typeof($scope.type.data) === 'undefined')
    ){
      $scope.action = "Select options above...";
      $scope.button = {color: 'calm',clear: 'clear'};

    } else{
      $scope.action = logicTable[$scope.location.data.id][$scope.length.data.id][$scope.type.data.id];

      switch($scope.action){
        case 'None/Verbal':
          $scope.button = {color: 'dark', clear: ''};
          break;
        case 'Handshake':
          $scope.button = {color: 'calm', clear: ''};
          break;
        case 'Hug':
          $scope.button = {color: 'balanced', clear: ''};
          break;
        case 'Kiss':
          $scope.button = {color: 'assertive', clear: ''};
          break;
      }
    }
  };


  var act = {
    n: 'None/Verbal',
    a: 'Handshake',
    o: 'Hug',
    x: 'Kiss'
  };

  var logicTable = {
    formal:{
      intro: {
        acq: act.n,
        platonic: act.a,
        romantic: act.a,
        coworker: act.n
      },
      newTerm:{
        acq: act.n,
        platonic: act.n,
        romantic: act.n,
        coworker: act.n
      },
      shortTerm: {
        acq: act.n,
        platonic: act.n,
        romantic: act.n,
        coworker: act.n
      },
      longTerm:{
        acq: act.n,
        platonic: act.n,
        romantic: act.n,
        coworker: act.n
      }
    },
    rec_clean:{
      intro: {
        acq: act.a,
        platonic: act.a,
        romantic: act.a,
        coworker: act.a
      },
      newTerm:{
        acq: act.n,
        platonic: act.n,
        romantic: act.n,
        coworker: act.n
      },
      shortTerm: {
        acq: act.n,
        platonic: act.n,
        romantic: act.o,
        coworker: act.n
      },
      longTerm:{
        acq: act.n,
        platonic: act.n,
        romantic: act.x,
        coworker: act.n
      }
    },
    rec_fun: {
      intro: {
        acq: act.a,
        platonic: act.a,
        romantic: act.a,
        coworker: act.a
      },
      newTerm:{
        acq: act.n,
        platonic: act.n,
        romantic: act.o,
        coworker: act.o
      },
      shortTerm: {
        acq: act.n,
        platonic: act.n,
        romantic: act.o,
        coworker: act.o
      },
      longTerm:{
        acq: act.n,
        platonic: act.o,
        romantic: act.x,
        coworker: act.x
      }
    }

  };
/*
	$scope.cores = Cores.all();
  $scope.events = Events.all();
  $scope.dateFormat = ettings.dateFormat;

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