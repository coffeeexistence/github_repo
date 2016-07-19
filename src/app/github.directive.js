function github() {
  return {
    controller: function() {
      console.log('hello world');
    },
    template: 'hello world'
  }
}

angular.module('app').directive('github', github);

console.log('I got this far');
