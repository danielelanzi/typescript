"use strict";
//classes
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.getName = function () {
        return this.nome;
    };
    return Animal;
}());
