if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	return new Promise(function(resolve, reject) {
    		resolve(value);
    	});
    },

    manipulateRemoteData : function(url) {
    	var promise = new Promise(function(resolve, reject) {
            $.get(url).then(function(data) {
                var names = $.map(data.people, function(person) {
                    return person.name;
                });
                resolve(names.sort());
            });
        });
    	return promise;
    }
  };
});
