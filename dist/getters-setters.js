"use strict";
//getters-setters
var User = /** @class */ (function () {
    function User(_name) {
        this._name = _name;
        this._name = _name;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name.toUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User('');
user.name = 'daniele';
console.log(user.name);
