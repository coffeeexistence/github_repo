function github() {
  return {
    controller: function(githubApi) {
      var ctrl = this;

      ctrl.start = function() {
        githubApi.getNotifications().then(function(response){
          console.log(response);
        });
      };

      githubApi.authorize().then(function(response){
        ctrl.start();
      });

    },
    template: 'hello world'
  }
}

angular.module('app').directive('github', github);

console.log('I got this far');
