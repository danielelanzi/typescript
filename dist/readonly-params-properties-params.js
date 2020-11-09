"use strict";
// readonly-params-properties-params
var Car = /** @class */ (function () {
    function Car(version, name_1, model, year, color) {
        this.name_1 = name_1;
        this.model = model;
        this.year = year;
        this.color = color;
        this.version = '1.1';
        this.version = version;
    }
    Car.prototype.setVersion = function (version) {
        // this.version = version;
    };
    Car.prototype.getVersion = function () {
        return this.version;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    return Car;
}());
var car = new Car('2.1', 'Fiat', '500', '2016', 'red');
// car.version = '111'
console.log(car.getVersion());
console.log(car.getColor());
