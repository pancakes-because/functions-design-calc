
/* 

    This is the add() function for later: 

*/ 

const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

let result = add()
console.log(result)

/* 

    You have been provided the add() function in the editor above. Your job is to write the following 
    functions to perform the other operations. Make sure each function has these exact names.

    subtract
    divide
    multiply
    square
    
    Subtract, divide, and multiply take two parameters, but the square function only takes one.

    Make sure that you invoke your functions, store the return value in a variable, and 
    then console.log() the result to verify that your functions work as expected.

*/ 

// This is my function for subtracting two numbers 

const subtractNumbers = (numberOne, numberTwo) => {
    const difference = numberOne - numberTwo 
    return difference 
}

let subResult = subtractNumbers(25, 10)
console.log(`When I subtract the two numbers, the result is ${subResult}.`) 

// This is my function for dividing two numbers

const divideNumbers = (numberOne, numberTwo) => {
    const quotient = numberOne / numberTwo
    return quotient 
}

let divResult = divideNumbers(100,4)
console.log(`When I divide the two numbers, my result is ${divResult}.`)

// This is my function for multiplying two numbers 

const multiplyNumbers = (numberOne, numberTwo) => {
    const product = numberOne * numberTwo
    return product
} 

let multiResult = multiplyNumbers(10,10)
console.log(`When I multiply the two numbers, my result is ${multiResult}.`)

// This is my function for squaring a number 

const squareNumber = (numberToSquare) => {
    const squared = numberToSquare * numberToSquare // so multiplying the number set as the parameter by itself 
    return squared 
}

const squaredResult = squareNumber(11)
console.log(`When I square the two numbers, my result is ${squaredResult}.`)

/* 

    Solve This
    See if you can solve this problem using your calculator.

    A quarter of the animals on a farm have four legs. The remaining three quarters of the animals have two legs. 
    If there are 60 legs overall, how many animals are there on the farm?

*/ 

/* 

    Hint: Formula to get started 

    1. Looking for number of animals, which can be represented by x.
    2. A quarter of the animals - x - have 4 legs. So 0.25x is a quarter of the animals. They have 4 legs so multiply by 4.
    3. Three quarters of the animals - x - have 2 legs. So 0.75x is 3/4 of the animals. They have 2 legs so multiply by 2.
    4. Both of those added together equals 60.

    This is the formalua the instruction hint gives you: 

    (0.25x * 4) + (0.75x * 2) = 60

    BUT this can also be rewritten and solved as: 

    a = 2-legged animals = 3/4 of c
    b = 4-legged animals = 1/4 of c
    c = total animals

    c(2*.75 + 4*.25) = 60
    c = 60/(2*.75 + 4*.25)
    c = 60/2.5
    c = 24 

*/ 

// Keep P.E.M.D.A.S in mind 

// Step 1: 60/(2*.75 + 4*.25) 
// Break up the operations, and multiply what's in the parenthesis (so multiply 2 * .75 separately, multiply 4 * .25 separately)
// Add the products of (2 * .75) and (4 * .75) 


let multiplyRoundOne = multiplyNumbers(2,0.75)
console.log(multiplyRoundOne) // produces 1.5 


let multiplyRoundTwo = multiplyNumbers(4,0.25)
console.log(multiplyRoundTwo) // produes 1 

// Step 2: 60 / 2.5 
// Divide the sum of 2.5 by 60 

let addRoundOne = add(1.5,1)
console.log(addRoundOne) // sum 2.5 

let divideRoundOne = divideNumbers(60,2.5)
console.log(divideRoundOne) // quotient is 24 
