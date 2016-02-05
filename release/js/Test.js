define(["require", "exports"], function (require, exports) {
    var Greeter = (function () {
        function Greeter() {
        }
        Greeter.prototype.SayHello = function () {
            return "Hello World";
        };
        return Greeter;
    })();
    exports.Greeter = Greeter;
});

var X;
(function (X) {
    var i = 0;
    function Increment() {
        return i++;
    }
    X.Increment = Increment;
})(X || (X = {}));
