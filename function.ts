//typed function - Tipificare/Tipicizzare le funzioni

function myfunction() {
    
}

let myFunc = function () {

}

myFunc();


//Arrow Function
let myArrowFunc = (e: any ) => {
    console.log(e);
    
}

myArrowFunc('Daniele');

let myArrowFunc2 = (e: number): number  => e*2

console.log(myArrowFunc2(2));


// Funzione dichiarativa specificando parametri e tipi. con : si ritorna il tipo void
function func(x:string, y:number) : void {
    console.log('Mi chiamo Daniele Lanzi');
    
}

//Varibile che tipicizza la funzione. utilizzando => nella variabile indichi il return
let myFunc2 : (x:string, y:number) => void;

myFunc2 = func;

myFunc2('test', 4);

//Importante è avere il tipo uguale il parametro non è obbligatorio uguale
myFunc2 = function (name:string, age:number):void {
    console.log(name + ' ha '+ age + ' anni.');
    
}

myFunc2('Daniele', 29);
