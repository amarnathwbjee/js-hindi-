const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsey value in js

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values in js

// true, {}, [], 1, -1, "0", "false", new Date(), -Infinity, Infinity, " ", function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 40



// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")

