var myApp = angular.module('myApp', []);
myApp.filter('range', function() {
  return function(input, total) {
    for (var i=0; i<parseInt(total); i++) input.push(i);
    return input;
  };
});
