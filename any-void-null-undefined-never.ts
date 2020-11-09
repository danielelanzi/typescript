//any, void, null, undefined, never


//any
let myage: any = 45;
myage = '45';
myage = [];

let userData: any[] = [29, 'Daniele', 'Lanzi', {address: 'Roma'}];
userData = ['444', [], {}];

//void caso senza senso
let my_age: void = undefined;
//userData = undefined;

let my__age:number;

function printName() : void{
    console.log('error');
    
}

//never
function rerturnNever(): never{
    throw new Error("No values defined");
    
}

rerturnNever();