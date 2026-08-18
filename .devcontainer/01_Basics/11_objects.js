// singleton
// object.create

// object 

const mySym = Symbol("key1")
const JsUser = {
    name: "Amarnath",
    "full name": "Amarnath Kumar",
    [mySym]: "mykey1",
    age: 21,
    location: "Bihar",
    email: "amarnath@example.com",
    isLoggedIn: false,
    lastLOginDays: ["Monday", ["Saturday"]]
}


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser.mySym)

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



