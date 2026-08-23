// object literals
// Object.create

const mySym = Symbol("key1")


const JsUser = {
    name: "Amarnath",
    "full name": "Amarnath Yadav",
    [mySym]: "mykey1",
    age: 21,
    location: "Jaipur",
    email: "amarnath@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)
// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])

JsUser.email = "amarnath@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "amarnath@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


