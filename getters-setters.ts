//getters-setters
class User {

    constructor(private _name : string) {
        this._name = _name
    }

    set name(name: string){
        this._name = name.toUpperCase();
    }
    get name(){
        return this._name;
    }
}

let user = new User('');
user.name = 'daniele';
console.log(user.name);
