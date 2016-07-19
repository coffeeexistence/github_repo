function githubApi($http) {
  var service = this;

  var baseUrl = "https://api.github.com/";

  service.getNotifications = function() {
    return $http.get(baseUrl + "notifications");
  };
}

angular.module('app').service('githubApi', githubApi);
