// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('ionic.utils', []);
angular.module('ionicHelloWomen', ['ionic', 'hw.controllers', 'hw.services'])

.run(function($ionicPlatform, $localStorage) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  }); // .run

})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('main', {
      url: "/main",
      abstract: true,
      templateUrl: "templates/menu.html"
    })

    .state('main.tabs', {
      url: '/tab',
      abstract: true,
      views: {
        'menu-content': {
          templateUrl: "templates/tabs.html"
        }
      }
    })

    // Each tab has its own nav history stack:

    .state('main.tabs.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tabs/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('main.tabs.about', {
      url: '/about',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tabs/tab-about.html',
          controller: 'AboutCtrl'
        }
      }
    })

    ; // $stateProvider

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main/tab/dash');

});


