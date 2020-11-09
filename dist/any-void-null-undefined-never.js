"use strict";
//any, void, null, undefined, never
//any
var myage = 45;
myage = '45';
myage = [];
var userData = [29, 'Daniele', 'Lanzi', { address: 'Roma' }];
userData = ['444', [], {}];
//void caso senza senso
var my_age = undefined;
//userData = undefined;
var my__age;
function printName() {
    console.log('error');
}
//never
function rerturnNever() {
    throw new Error("No values defined");
}
rerturnNever();
