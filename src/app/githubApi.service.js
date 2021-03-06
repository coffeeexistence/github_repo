function githubApi($auth, $http) {
  var service = this;

  var clientId = '0b3f9d81cd061c6f5f97';
  var secret = '1831cdb002aecd1e78ee6e48ff59247c1e413a71';

  var baseUrl = "https://api.github.com/";

  service.authorize = function() {
    $auth.authenticate('github');
  };

  service.getNotifications = function() {
    return $http.get(baseUrl + "notifications", {client_id: clientId});
  };
}

angular.module('app').service('githubApi', githubApi);
