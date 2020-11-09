"use strict";
console.log(1);
function isWorkingDay(day) {
    if (day === 7 /* SUN */ || day === 6 /* SAT */) {
        return true;
    }
    return false;
}
