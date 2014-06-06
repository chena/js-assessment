if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        /* slow way =
        var bin = '';
        if (num == 0) {
            return 0;
        }
        while (num > 0) {
            bin += num % 2;
            num = parseInt(num / 2);
        }
        return parseInt(bin.charAt(bit - 1));
        */

        // fast way (num turned to binay with shift op)
        return 1 & num >> (bit - 1)
    },

    base10: function(str) {
        /*
        var decimal = 0,
            power = 0;
        str.split('').reverse().forEach(function(digit) {
            decimal += Math.pow(2, power++) * parseInt(digit);
        });
        return decimal;*/

        // fast way
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        /*
        var bin = '';
        if (num == 0) {
            return 0;
        }
        while (num > 0) {
            bin += num % 2;
            num = parseInt(num / 2);
        }
        var binArr = bin.split('');
        // pad with 0
        while (binArr.length < 8) {
            binArr.push(0);
        }
        return binArr.reverse().join('');
        */

        // using shift
        var bin = '';
        for (var i = 7; i >= 0; i--) {
            bin += 1 & num >> i;
        }
        return bin;
    },

    multiply: function(a, b) {
        var getDecimalPlaces = function(num) {
            var rhs = num.toString().split('.');
            return rhs.length == 2 ? rhs[1].length : 0;
        }
        // multiply to remove fractional part, then divide the value 
        var multA = Math.pow(10, getDecimalPlaces(a)), 
            multB = Math.pow(10, getDecimalPlaces(b));
        var div = multA * multB;
        return (a * multA) * (b * multB) / div;
    }
  };
});

