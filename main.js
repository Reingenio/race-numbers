var myApp = angular.module('myApp', []);
myApp.filter('range', function() {
  return function(input, total) {
    var init = 100;
    for (var i=init; i<(init+parseInt(total)); i++) input.push(i);
    return input;
  };
});
