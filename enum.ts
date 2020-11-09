//ENUM TYPE
//MON, TUE, WED, THU, FRI, SAT, SUN
const enum DAYS{
    MON = 1, 
    TUE, 
    WED, 
    THU, 
    FRI, 
    SAT, 
    SUN
}
console.log(1);

function isWorkingDay(day:DAYS){
    if(day === DAYS.SUN || day === DAYS.SAT){
        return true;
    }
    return false; 

}
