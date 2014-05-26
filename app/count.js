if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
   /**
   * This function takes two arguments: a starting number,
   * and an ending number. The function should console.log each number from the start
   * number to the end number, one number per 1/10th of a second. The function should
   * return an object with a cancel method, which should cancel the counting.
   */
  return {
  	count : function (start, end) {
  		var timeoutID;

  		// note: if we do this with a loop and a closure for each index, 
  		// the numbers will not be logged every 0.1 second because setTimeout is asychonous!
  		var count = function() {
  			console.log(start++);
  			if (start <= end) {
  				timeoutID = setTimeout(count, 100);	
  			}
  		}

  		count();

  		return {
  			cancel: function() {
  				timeoutID && clearTimeout(timeoutID);
  			}
  		}
  	}
  };
});