angular
  .module('app', ['satellizer'] )
  .config(function($authProvider){
    $authProvider.github({
      clientId: '0b3f9d81cd061c6f5f97'
    });
  });
