"use strict";
//typed function - Tipificare/Tipicizzare le funzioni
function myfunction() {
}
var myFunc = function () {
};
myFunc();
//Arrow Function
var myArrowFunc = function (e) {
    console.log(e);
};
myArrowFunc('Daniele');
var myArrowFunc2 = function (e) { return e * 2; };
console.log(myArrowFunc2(2));
// Funzione dichiarativa specificando parametri e tipi. con : si ritorna il tipo void
function func(x, y) {
    console.log('Mi chiamo Daniele Lanzi');
}
//Varibile che tipicizza la funzione. utilizzando => nella variabile indichi il return
var myFunc2;
myFunc2 = func;
myFunc2('test', 4);
//Importante è avere il tipo uguale il parametro non è obbligatorio uguale
myFunc2 = function (name, age) {
    console.log(name + ' ha ' + age + ' anni.');
};
myFunc2('Daniele', 29);
