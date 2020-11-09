//classes: public, protected, private

class Lesson {

    //proprietà pubbliche
    public type:string
    public length:number
    public title:string

    //prorpietà protetta si visualizza solo nella classe estesa
    protected description?:string

    //privata si può vedere solo all'interno della classe stessa
    private instaces: number = 0

    //metodo privato
    private incInstaces() : void {
        this.instaces++;
    }

    constructor(
        type:string,
        length:number,
        title:string,
        description?:string
        ){
        this.type = type;
        this.length = length;
        this.title = title;
        this.description = description;
        this.instaces++;
        this.incInstaces();
    }
    //metodo per poter accedere all'instanze private
    getInstaces(){
        return this.instaces;
    }
}

class VideoLesson extends Lesson {
    setDescription(desc:string) {
        this.description = desc;
    }
}

let lesson = new Lesson('Video Corso', 4, 'Intro', '');
// lesson.description='Descrizione del mio corso'
// console.log(lesson.description);

console.log(lesson.getInstaces());

