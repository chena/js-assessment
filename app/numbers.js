if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var bin = '';
        if (num == 0) {
            return 0;
        }
        while (num > 0) {
            bin += num % 2;
            num = parseInt(num / 2);
        }
        return parseInt(bin.charAt(bit - 1));

        // fast way = 
    },

    base10: function(str) {
        var decimal = 0,
            power = 0;
        str.split('').reverse().forEach(function(digit) {
            decimal += Math.pow(2, power++) * parseInt(digit);
        });
        return decimal;

        // fast way = parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var bin = '';
        if (num == 0) {
            return 0;
        }
        while (num > 0) {
            bin += num % 2;
            num = parseInt(num / 2);
        }
        var binArr = bin.split('');
        while (binArr.length < 8) {
            binArr.push(0);
        }
        return binArr.reverse().join('');
    },

    multiply: function(a, b) {
        var getDecimalPlaces = function(num) {
            var rhs = num.toString().split('.');
            return rhs.length == 2 ? rhs[1].length : 0;
        }
        var multA = Math.pow(10, getDecimalPlaces(a)), 
            multB = Math.pow(10, getDecimalPlaces(b));
        var div = multA * multB;
        return (a * multA) * (b * multB) / div;
    }
  };
});

