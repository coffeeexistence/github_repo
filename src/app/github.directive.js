function github() {
  return {
    controller: ['$scope', 'githubApi', function($scope, githubApi) {
      var ctrl = this;

      ctrl.start = function() {
        githubApi.getNotifications().then(function(response){
          console.log(response);
        });
      };  
      $scope.notifications = [
            {"title": "Notification 1"},
            {"title": "Notification 2"}
          ]

      githubApi.authorize().then(function(response){
        ctrl.start();
      });

    }],
    templateUrl: '../app/notifications.html'
  }
}

angular.module('app').directive('githubNotifications', github);

console.log('I got this far');
