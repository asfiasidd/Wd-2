 //1. Reverse a string without using the built-in reverse() method.

// function reverseString(str) {
//     let reverseString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseString += str[i];
//     }

//    return reverseString;
// }
// console.log(reverseString("Hello World"));


//2. Count the number of vowe1 in a given string.

// function countVowels(string){
//     const Vowels = ['a','e','i','o','u'];
//     let count = 0;
//     for(let letter of string.toLowerCase()) {
//         if(Vowels.includes(letter)) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels('Hello World'));


//3. Convert the first letter of each word in a sentence to uppercase.

// function capitalizeSentence(sentence){
//     let words = sentence.split(" ");
//     for (let i = 0; i <words.length; i++){
//         words[i] = words[i][0].toUpperCase() + words[i].substring(1);
//     }
//      return words.join(" ");
// }
// console.log(capitalizeSentence("hello world this is a test"));


//4. Check if a string is a palindrome.

// function isPalindrome(str){
//     const reversedStr = str.split('').reverse().join('');
//     return str === reversedStr;

// }
// console.log(isPalindrome("madam"));


//5. Find the sum of all positive numbers in an array.

// function sumOfPositiveNumber(arr) {
//     let sum = 0;
//     for(let num of arr){
//       if (num > 0){
//         sum += num;
//       }
//     }
//     return sum;
// }
// const numbers = [1,-2,3,-4,5];
// console.log(sumOfPositiveNumber(numbers));


//6. Find the index of the first occurrence of a specific element in an array.

// function findIndexOfElement(arr, element){
//     return arr.indexOf(element);
// }
// console.log(findIndexOfElement([1,2,3,4,5], 3))



//7. Remove all duplicates from an array without built-in methods.

// function removeDuplicates(arr) {
//     let uniqueArr = [];
//     for (let i = 0; i < arr.length; i++){
//         if (uniqueArr.indexOf(arr[i]) === -1){
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }
// const myArray = [1,2,3,2,4,1,5];
// console.log(removeDuplicates(myArray));



//8.Sort the array in ascending and descending without built-in methods.

// function bubbleSortDesending(arr) {
//     for (let i = 0; i < n-1; i++){
//         for (let j = 0; j < n-i-1; j++){
//             if (arr[j] < arr [j+1]){
//                 let temp = arr [j];
//                 arr[j] = arr [j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let arr = [64, 34, 25, 12, 22, 11, 90];
// let sorted_arr = bubbleSortDesending(arr);
// console.log("Sorted array in desending order:", sorted_arr);




//9. Print all even numbers between 1 and 20 using a while loop.

// let number = 1;
// while (number <= 20) {
//     if (number % 2 == 0) {
//         console.log(number);
//     }
//     number ++;
// }



// 10. Calculate the factorial of a number using a do-while loop.

// function calculateFactorial(number){
//     let fact = 1;
//     let i = 1;
//     do {
//         fact *= i;
//         i++;
//      } while (i <= number);
      
//     return fact;
// }
// console.log(calculateFactorial(5));



//11. Iterate through the peoperties of an object using a for-in loop.

// const person = {
//     firstname: "sana",
//     age: 25,
//     city: "karachi"
// };
//   for (let property in person) {
//     console.log(property + ":" + person[property]);
// }



//12. Loop through an array using a for-of loop and double each element.

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = [];

// for (let num of numbers) {
//     doubledNumbers.push(num*2);
// }
// console.log(doubledNumbers);



//13. Check if a number is even or odd and return a corresponding message.

// function checkEvenOrOdd(number){
//     if (number % 2 === 0) {
//         return "This number is even!";
//     } else {
//         return "This number is odd!";
//     }
// }
// console.log(checkEvenOrOdd(6));
// console.log(checkEvenOrOdd(7));



//14. Find the maximum of three numbers using nested ternary operators.

// function findMaximum(a, b, c) {
//     let max = a > b ? a : b;
//     max = max > c ? max : c;
//     return max;
// }
// console.log(findMaximum(5, 8, 9));



// 15. Determine if a year is a leap year or not.

function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return "Yes," + year + " is a leap year!";
        } else {
          return "No," + year + " is not a leap year.";
        }
      } else {
        return "Yes," + year + " is a leap year!";
      }
    } else {
      return "No," + year + " is not a leap year.";
    }
  }
  
  console.log(isLeapYear(2020)); 
  console.log(isLeapYear(2023)); 

