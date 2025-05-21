// Challenge 1: Sum of two numbers

function addition(num1,num2) {
    let sum = num1 + num2
    console.log(`The sum of ${num1} and ${num2} is ${sum}`)
}
addition(12, 4)

//Challenge 2: Convert Minutes into Seconds

function convert(min){
    let secs = min * 60
    console.log(`${min} minutes into seconds is ${secs} seconds`)
}
convert(2)


//Challenge 3: Perimeter of a Rectangle

function perimeter(width, length){
    let perimeter = (width + length) * 2
    console.log(`The perimeter of rectangle is ${perimeter}`)
}
perimeter(7 , 5)


//Challenge 4: Check Negative
function isNegative(num){
    if (num < 0){
        return true
    }else {
        return false
    }
}
console.log(isNegative(2))


//Challenge 5;  Can I Drive

function canDrive(name, age){
    if (age >= 18){
        console.log(`${name} is old enough to drive.`)
    }else {
        console.log(`${name} is not old enough to drive yet.`)
    }
}
canDrive("charles", 45)

//challenge 6:  Largest Number

function findLargest(a, b, c){
    let largest = Math.max(a, b, c)
    console.log(`The largest number is ${largest}`)
}
findLargest(2, 5, 17)

function findLargest2(a, b, c){
    if (a > b && a > c){
        return a
    }else if (b > a && b > c){
        return b
    }else {
        return c
    }
}
let largest = findLargest2(2, 5, 17)
console.log(`The largest number is ${largest}`)

//Challenge 7: BMI Calculator

function calculateBMI(weight, height) {
    let BMI = weight / (height * height)
    
    if (BMI >= 30){
        console.log(`Your BMI is ${BMI} - Obese`)
    }else if (BMI >= 25 && BMI <= 29.9) {
        console.log(`Your BMI is ${BMI} - Overweight`)
    }else if (BMI >= 18.5 && BMI <= 24.9) {
        console.log(`Your BMI is ${BMI} - Normal weight`)
    }else if (BMI < 18.5) {
        console.log(`Your BMI is ${BMI} - Underweight`)
    }else {
        console.log("Please Supply valid data.")
    }
}
calculateBMI(62, 1.5)


//Challenge 8: Greeting Based On Time

function greetUser(name, hour) {
    if (hour >= 5 && hour <= 11){
        console.log(`Good morning, ${name}!`)
    }else if (hour >= 12 && hour <= 17){
        console.log(`Good afternoon, ${name}!`)
    }else if (hour >= 18 && hour <= 21){
        console.log(`Good evening, ${name}!`)
    }else if (hour >= 22 && hour <= 23 || hour >= 0 && hour <= 4){
        console.log(`Good night, ${name}!`)
    }else{
        console.log("Not an hour of a day")
    }
}
greetUser("Alice", 2)


//Challenge 9:FizzBuzz

function fizzBuzzCheck(number) {
    let divBy5 = number % 5
    let divBy3 = number % 3
    if (divBy5 == 0 && divBy3 == 0) {
        return "FizzBuzz"
    }else if (divBy5 == 0){
        return "Buzz"
    }else if (divBy3 == 0){
        return "Fizz"
    }else {
        return number
    }
}

let res = fizzBuzzCheck(12)
console.log(res)

//challenge 10: Perimeter 2

function perimeter(letter, num){
    const sides = 4
    const pie2 = 6.28
    if (letter == "s"){
        return num * sides
    }else if (letter == "c"){
        return num * pie2
    }else {
        return "Please enter s for square or c for circle"
    }
}
let result = perimeter("r", 2)
console.log(result)


//Chaallenge 11: Sum of Even Numbers

function sumEvenNumbers(n){
    let sum = 0
    for (let i=1; i <= n; i++){
        if ((i % 2) == 0){
            sum += i
        }else {
            //pass
        }
    }
    return sum
}

let sum = sumEvenNumbers(12)
console.log(sum)

// Challenge 12: Multiply by Itself

function powerUp(num, times) {
    let result = 1

    for (let i = 1; i <= times; i++){
        result *= num
    }
    return result
}

console.log(powerUp(2, 3))

//challenge 13: Factorial Calculator
function factorial(n){
    let result = 1
    for (let i = 1; i <= n; i++){
        result *= i
    }
    return result
}

console.log(factorial(6))

//Challenge 14: Multiple Sum

function sumMultiples(n, divisor){
    let result = 0
    for (let i = 0; i <= n; i++)
        if ((i % divisor) == 0){
            result += i
        }
    return result
}
console.log(sumMultiples(10, 5))


//Challenge 15: Sum of Digits

function sumDigits(num){
    let sum = 0
    while (num > 0){
        let lastNumber = num % 10
        num = Math.floor(num/10)
        sum += lastNumber
    }
    return sum
}
let results = sumDigits(123)
console.log(results)
