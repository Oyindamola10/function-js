// Create a function that takes a name as an argument and returns a greeting message with the name.
function greet(name) {
    return `Hello, ${name}!`;
  }
  const userName = 'Samiat';
  const greeting = greet(userName);
  console.log(greeting);  //Output: Hello Samiat!

 //Write a function that takes two numbers as arguments and returns their sum.
function add(a,b){
    return a+b;
}
console.log(add(4,6)) //Output:10


//Create a function that multiplies two numbers and returns the result.
function multiply(a,b){
    return a*b;
}
console.log(multiply(5,7)) //Output:35


//Write a function that takes a number as an argument and returns its square.
function squareNumber(number) {
    return number * number;
  }
  const num = 7;
  const result = squareNumber(num);
  console.log(`The square of ${num} is: ${result}`) //Output: 49

//Create a function that takes a number as an argument and returns its cube.
  function cubeNumber(number){
    return number * number * number;
  }
  const num2 = 9;
  const result2 = cubeNumber(num2) 
  console.log(`The cube of ${num2} is: ${result2}`) //Output: 729

//Write a function that takes two strings as arguments and concatenates them together.
  function concatenateStrings(string1, string2) {
    return string1 + string2;
  }
const str1 = 'Goodmorning, ';
const str2 = 'world!';
const result3 = concatenateStrings(str1, str2);
console.log(result3);  //Output: Goodmorning World! 

//Create a function that calculates and returns the length of a given string.
function calculateStringLength(inputString) {
    return inputString.length;
  }
  const text = 'Goodevening, samiat!';
  const length = calculateStringLength(text);
  console.log(`The length of the string is: ${length}`);  //Output :The length of the string is 20

//Write a function that checks if a given string is a palindrome (reads the same forwards and backward).
function isPalindrome(inputString) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Compare the original string with its reverse
    const reversedString = cleanString.split('').reverse().join('');
  
    return cleanString === reversedString;
  }
    const palindromeString = 'racecar';
    const nonPalindromeString = 'hello';

console.log(isPalindrome(palindromeString)); // Output: true
console.log(isPalindrome(nonPalindromeString)); //Output: false

//Create a function that takes an array of numbers and returns the minimum value.
function findMinimumValue(numbers){
    return numbers;
}
const numberArray = [8, 7, 4, 1, 3, 5];
const minimumValue = findMinimumValue(numberArray);
console.log(`The minimum value is: ${minimumValue}`);

//Create a function that takes an array of numbers and returns the maximum value
function findMaximumValue(numbers){
    return numbers;
}
const numberArray1 = [8, 7, 4, 1, 3, 5];
const maximumValue = findMaximumValue(numberArray);
console.log(`The maximum value is: ${maximumValue}`);