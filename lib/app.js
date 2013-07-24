function Factorial() {
  'use strict';

  var exports = {};

  var solvedCache = {};

  // ==============  DO WORK HERE  ==============
  exports.solve = function( number ) {
    var result = number;
    if (solvedCache[number.toString]) {
      return solvedCache[number.toString];
    } else {

      for (var i = number - 1; i >= 1; i--) {
        result *= i;
      };

      solvedCache[number.toString] = result;
      exports.processCount++;
    }

    return result;
  };

  exports.processCount = 0;

  return exports;
}