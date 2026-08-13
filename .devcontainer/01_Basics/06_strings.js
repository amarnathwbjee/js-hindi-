const name = "Amarnath Yadav"
const repoCount = 50

// console.log(name + repoCount + " Value ");

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);


const gameName = new String('hitesh-MC-com')



// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20yadav"
console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'));
console.log(url.includes('tannu'));
console.log(gameName.split('-'));




