"use strict";
//classes-extends
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AnimalBase = /** @class */ (function () {
    function AnimalBase(nome) {
        this.nome = nome;
    }
    AnimalBase.prototype.move = function (distance) {
        console.log('Io sto percorrendo ' + distance + ' metri');
    };
    AnimalBase.prototype.getName = function () {
        return 'il mio nome è ' + this.nome;
    };
    return AnimalBase;
}());
var Birds = /** @class */ (function (_super) {
    __extends(Birds, _super);
    function Birds(nome, place) {
        if (place === void 0) { place = 'Mare'; }
        var _this = _super.call(this, nome) || this;
        _this.place = place;
        return _this;
    }
    Birds.prototype.getPlace = function () {
        return this.place;
    };
    Birds.prototype.setPlace = function (place) {
        this.place = place;
    };
    Birds.prototype.move = function (distance) {
        //override
        console.log('Io sto volando a ' + distance + ' metri');
        // super.move(distance)
    };
    return Birds;
}(AnimalBase));
var dove = new Birds('Dove', 'Oceano');
// dove.setPlace('Mare')
dove.move(50);
console.log(dove.getName());
console.log(dove.getPlace());
