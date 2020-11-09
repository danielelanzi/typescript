// readonly-params-properties-params
class Car {

    readonly version : string = '1.1'

    constructor(version:string, 
        protected name_1 : string, 
        protected model:string, 
        protected year:string,
        public color:string) {
        this.version = version;
    }

    setVersion(version:string){
        // this.version = version;
    }

    getVersion(){
        return this.version;
    }
    getColor(){
         return this.color;
    }
}

let car = new Car('2.1', 'Fiat', '500', '2016', 'red')
// car.version = '111'
console.log(car.getVersion());
console.log(car.getColor());
