 //classes-extends

class AnimalBase {
    nome:string
    constructor(nome:string){
        this.nome = nome;
    }

    move(distance:number){
        console.log('Io sto percorrendo '+ distance +' metri');
        
    }

    getName(){
        return 'il mio nome è ' +this.nome ;
    }
}

class Birds extends AnimalBase {
    place : string

    constructor(nome:string, place:string = 'Mare') {
        super(nome)
        this.place = place;
    }
    getPlace() : string{
        return this.place;
    }
    setPlace(place : string) : void{
        this.place = place
    }
    move(distance:number){
        //override
        console.log('Io sto volando a ' + distance +' metri');
        
        // super.move(distance)
    }
}

let dove = new Birds('Dove', 'Oceano');
// dove.setPlace('Mare')
dove.move(50)
console.log(dove.getName());
console.log(dove.getPlace());
