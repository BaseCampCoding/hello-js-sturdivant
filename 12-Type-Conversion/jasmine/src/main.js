// Task 1: Calculate the SUm for the Slot Machine
let digit1 = [1, 7, 3];
let digit2 = [3, 7, 1];

let number1 = digit1.join('');
let number2 = digit2.join('');

let twoSum = Number(number1) + Number(number2);

// Task 2: Determine if a Number is a Palindrome
let luckyInput = 12321;
let luckyInputStr = luckyInput.toString().split('').reverse().join('');
let luckyNumber;
if (parseFloat(luckyInputStr) === luckyInput) {
    luckyNumber = true;
}
else {
    luckyNumber = false;
}

// Task 3: Generate an Error Message for Invalid User Input
let userInput;
let errorMessage;

if (userInput === null || userInput === undefined || userInput.length === 0) {
    errorMessage = 'Required Field';
}
else if (userInput === '0') {
    errorMessage = 'Must be a number besides 0';
}
else {
    errorMessage = '';
}