if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	var fileList = [];
    	var dirs = [] // keeps track of traversed dir 

    	var traverse = function(data) {
    		dirs.push(data.dir);

    		data.files.forEach(function(file) {
    			if (typeof file === 'string') {
    				if (!dirName || dirs.indexOf(dirName) > -1) {
    					fileList.push(file);
    				}
    			} else {
    				traverse(file);
    			}
    		});

    		dirs.pop();
    	}

    	traverse(data);
    	return fileList;
    },

    permute: function(arr) {
    	Array.prototype.remove = function(item) {
    		return this.filter((function(i) {
    			return item !== i;
    		}));
    	};

    	var getPerms = function(array) {
    		if (array.length == 2) {
    			return [array, array.slice().reverse()]
    		} 

    		var combo = [];
    		for (var i = 0; i < array.length; i++) {
    			var item = array[i];
    			var subarray = array.remove(item);
    			subcombo = getPerms(subarray); 
    			for (var j = 0; j < subcombo.length; j++) {
    				combo.push([item].concat(subcombo[j]));
    			}
    		}
    		return combo;
    	}

    	return getPerms(arr);
    }
  };
});
