if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /[0-9]/.test(str);
    },

    containsRepeatingLetter : function(str) {
        return /([a-z])\1+/i.test(str); // \1 back references to the matched character
    },

    endsWithVowel : function(str) {
        return /[aeiou]$/i.test(str);

    },

    captureThreeNumbers : function(str) {
        var match = str.match(/[0-9]{3}/);
        return match ? match[0] : false;
    },

    matchesPattern : function(str) {
        return /^\d{3}-\d{3}-\d{4}$/.test(str);
    },

    isUSD : function(str) {
        return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str)

    }
  };
});
