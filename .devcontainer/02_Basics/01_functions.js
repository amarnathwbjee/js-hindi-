function sayMyName() {
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("R");
    console.log("N");
    console.log("A");
    console.log("T");
    console.log("H");
}

// sayMyName() => it is Execution of function
// sayMyName => it is only Referance of Function

// function addTwoNumbers(number1, number2) { // when we define function then we take input it is known as parameters
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2) { // when we define function then we take input it is known as parameters
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// addTwoNumbers(8, 68) // when we call a function they pass the value it is known as Arguments

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);

function loginUserMessage(username = "sam") {
    if(!username) {
        console.log("PLease enter a username");
        return

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Amarnath"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())
console.log(loginUserMessage("Amarnath"))