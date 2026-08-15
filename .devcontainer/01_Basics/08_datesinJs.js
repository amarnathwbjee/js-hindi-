// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 7, 15 )
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2026, 7, 15, 11, 46 )
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate = new Date("2026-08-15")
let myCreatedDate = new Date("08/15/2026")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})