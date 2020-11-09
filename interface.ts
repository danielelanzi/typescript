//interface

interface IUser {
    lastname:string, 
    firstname:string
}

function showUser2(user:IUser) {
    console.log(user.firstname + ' '+ user.lastname);
    
}

function showUser(user:{lastname:string, firstname:string}) {
    console.log(user.firstname + ' '+ user.lastname);
    
}

showUser({lastname:'Lanzi', firstname:'Daniele'});
showUser2({lastname:'Chubar', firstname:'Iuliia'});

interface IUser2 {
    lastname:string, 
    firstname:string,
    //utilizzando ? il dato è opzionale
    address?:string
}

function showUser3(user:IUser2) {
    console.log(user.firstname + ' '+ user.lastname + ' '+ user.address);
    
}

showUser3({lastname:'Lanzi', firstname:'Lorenzo', address:'Nato a Roma'});

interface IUser3 {
    lastname:string, 
    firstname:string,
    //utilizzando ? il dato è opzionale
    address?:string
    [propName:string] : any,
}

function showUser4(user:IUser3) {
    console.log(user.firstname + ' '+ user.lastname + ' '+ user.address + ' Età:'+ user.age + ' '+user.title);
    
}

showUser4({lastname:'Lanzi', firstname:'Lorenzo', age:3, title:'Piccolo amore', address:'Nato a Roma'});