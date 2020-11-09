//class type
class MyLogger {
    // constructor(parameters) {
        
    // }
    log(msg : string) : void{
        console.log(msg);
        
    }

    generateId() : number {
        return Math.round(Math.random()*1000000)
    }
}

interface MyLog extends MyLogger {
    email: string
}

class MyMailLogger implements MyLog{
    email : string
    log(){

    }

    generateId() : number{
        return 1;
    }
}

let mailLog : MyMailLogger;

function logData(logger:MyMailLogger) {
    return logger.generateId()
}

mailLog = new MyMailLogger();

console.log(logData(mailLog));

