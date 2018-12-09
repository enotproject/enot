angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('notKazan', {
    url: '/notkazani',
    templateUrl: 'templates/notKazan.html',
    controller: 'notKazanCtrl'
  })

  .state('notKazan2', {
    url: '/notkazani1',
    templateUrl: 'templates/notKazan2.html',
    controller: 'notKazan2Ctrl'
  })

  .state('notKazan3', {
    url: '/notkazani2',
    templateUrl: 'templates/notKazan3.html',
    controller: 'notKazan3Ctrl'
  })

$urlRouterProvider.otherwise('/notkazani')


});