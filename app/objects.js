if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
    	var properties = [];
    	for (var prop in obj) {
    		if (obj.hasOwnProperty(prop)) {
    			properties.push(prop + ': ' + obj[prop]);
    		}
    	};
    	return properties;
    }
  };
});
