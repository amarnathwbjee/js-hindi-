//  Primitive
// 7 types : String, Number, Boolean, Null, undefined, symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34567625545634678n


// reference (Non Premitive)

// Array, objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];
let myobj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");

    
}

console.log(typeof myFunction);



// +++++++++++

// stack(primitive), Heap(Non-primitive)


let myYoutubename = "JEEMathsWithAmarnathYadav"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybi" 
}


let userTwo = userOne

userTwo.email = "Amarnath@google.com"

console.log(userOne.email);
console.log(userTwo.email);
