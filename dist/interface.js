"use strict";
//interface
function showUser2(user) {
    console.log(user.firstname + ' ' + user.lastname);
}
function showUser(user) {
    console.log(user.firstname + ' ' + user.lastname);
}
showUser({ lastname: 'Lanzi', firstname: 'Daniele' });
showUser2({ lastname: 'Chubar', firstname: 'Iuliia' });
function showUser3(user) {
    console.log(user.firstname + ' ' + user.lastname + ' ' + user.address);
}
showUser3({ lastname: 'Lanzi', firstname: 'Lorenzo', address: 'Nato a Roma' });
function showUser4(user) {
    console.log(user.firstname + ' ' + user.lastname + ' ' + user.address + ' Età:' + user.age + ' ' + user.title);
}
showUser4({ lastname: 'Lanzi', firstname: 'Lorenzo', age: 3, title: 'Piccolo amore', address: 'Nato a Roma' });
