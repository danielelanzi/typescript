"use strict";
//static
var MathCalc = /** @class */ (function () {
    function MathCalc() {
    }
    MathCalc.calcCirclePerimeter = function (r) {
        return 2 * MathCalc.PI * r;
    };
    MathCalc.prototype.calcEuroToDollar = function (euro) {
        return MathCalc.rate * euro;
    };
    MathCalc.PI = 3.1459;
    MathCalc.rate = 1.12;
    return MathCalc;
}());
var calc = new MathCalc();
console.log(MathCalc.calcCirclePerimeter(2));
console.log('120 euro sono ' + calc.calcEuroToDollar(120) + ' dollari');
