if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function(str2) {
            return str + ', ' + str2;
        }
    },

    makeClosures : function(arr, fn) {
        var functions = [];
        for (var i = 0; i < arr.length; i++) {
            var func = (function(j) {
                return function() {
                    return fn(arr[j]);
                }
            })(i);
            functions.push(func);
        }
        return functions;
    },

    partial : function(fn, str1, str2) {
        return function(arg) {
            return fn(str1, str2, arg);
        };
    },

    useArguments : function() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {
        return fn.apply(null, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
        var outerArgs = Array.prototype.slice.call(arguments, 1);

        return function() {
            var innerArgs = Array.prototype.slice.call(arguments);
            var args = outerArgs.concat(innerArgs);
            return fn.apply(null, args);
        }
    },

    curryIt : function(fn) {
        var currentFn = arguments.callee; // to be deprecated in ESC5 :(
        var expectedArgsLength = fn.length;
        var outerArgs = Array.prototype.slice.call(arguments, 1);

        if (outerArgs.length == expectedArgsLength) {
            return fn.apply(null, outerArgs);
        }

        return function(input) {
            var args = [fn].concat(outerArgs);
            args.push(input);
            return currentFn.apply(null, args);
        }
    }
  };
});
