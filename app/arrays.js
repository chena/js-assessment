if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;
        arr.forEach(function(a) {
            sum += a;
        });
        return sum;
    },

    remove : function(arr, item) {
        return arr.filter(function(a) {
            return a !== item;
        });
    },

    removeWithoutCopy : function(arr, item) {
        var index = arr.indexOf(item); 
        while(index > -1) {
            arr.splice(index, 1);
            index = arr.indexOf(item);
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        // the long way
        // return arr.slice(0, index).concat(item, arr.slice(index));

        // the short way: delete zero item from the index then insert the item at the index
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        var index = arr.indexOf(item);

        while(index > -1) {
            arr.splice(index, 1);
            count ++;
            index = arr.indexOf(item);
        }
        return count;
    },

    duplicates : function(arr) {
        /*var count = {};
        arr.forEach(function(a) {
            if (count[a]) {
                count[a]++;
            } else {
                count[a] = 1;
            }
        });
        console.log(count);
        return Object.keys(count).filter(function(key) {
            return count[key] > 1;
        });*/
        var dupps = [];
        arr.forEach(function(a) {
            if (dupps.indexOf(a) == -1) { // skip if the item is already tracked as a dupp
                var index = arr.indexOf(a);
                // check if them items occurs more than once
                if (index > -1 && arr.indexOf(a, index + 1) > -1) {
                    dupps.push(a);
                }
            }
        });
        return dupps;
    },

    square : function(arr) {
        return arr.map(function(a) {
            return a * a;
        })
    },

    findAllOccurrences : function(arr, target) {
        var occ = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                occ.push(i);
            }
        }
        return occ;
    }
  };
});
