/*
    //                  question # 01
function reverseStr(a) {
    let reversed = '';
    for (let i = a.length - 1; i >= 0; i--) {
      reversed += a[i];
    }
    return reversed;
  }
  
  const originalStr = "FURQAN AYAZ";
  const reversedStr = reverseStr(originalStr);
  console.log(reversedStr);
  
   //                       question # 02
  function countVowels(a) {
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
  
    for (let i = 0; i < a.length; i++) {
      if (vowelSet.has(a[i])) {
        count++;
      }
    }
    return count;
  }
  const inputStr = "FURQAN AYAZ";
  const numberOfVowels = countVowels(inputStr);
  console.log(`Number of vowels: ${numberOfVowels}`);
  
  //                  question # 03
  function capitalizeWords(sentence) {
    const words = sentence.split(' ');
  
    const capitalizedWords = words.map(word => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1);
      }
      return '';
    });
  
    const capitalizedSentence = capitalizedWords.join(' ');
  
    return capitalizedSentence;
  }
  
  const inputSentence = "my name is furqan ayaz";
  const capitalizedResult = capitalizeWords(inputSentence);
  console.log(capitalizedResult);
  
     //           question # 04
  function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
  const inputStr1 = "Was it a car or a cat I saw";
  const isPalindromeResult = isPalindrome(inputStr1);
  if (isPalindromeResult) {
    console.log("The string is a palindrome.");
  } else {
    console.log("The string is not a palindrome.");
  }


    //                 question # 05                     
                     
    function sumOfPositiveNum(arr) {
    let sum = 0;
    for (let num of arr) {
      if (num > 0) {
        sum += num;
      }
    }
    return sum;
  }
  
  const num = [1.56, -6, 10, -44.5, 20.44];
  const positiveSum = sumOfPositiveNum(num);
  console.log(positiveSum);

    //            question # 06

const array = [1, 2, 3, 4, 5, 6];
const targetElement = 5;

const index = array.indexOf(targetElement);

if (index !== -1) {
  console.log(`The first occurrence of ${targetElement} is at index ${index}.`);
} else {
  console.log(`${targetElement} is not found in the array.`);
}

      //          question # 07

function removeDuplicates(arr) {
  const uniqueArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  
  return uniqueArray;
}

const originalArray = [10, 11, 12, 14, 14, 15, 15, 15, 20, 20];
const arrayWithoutDuplicates = removeDuplicates(originalArray);
console.log(arrayWithoutDuplicates);

        //      question # 08

function bubbleSortAscending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
function bubbleSortDescending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const originalArray = [100, 250, 140, 560];
const ascendingSortedArray = bubbleSortAscending(originalArray.slice());
console.log("Ascending order:", ascendingSortedArray); 
const descendingSortedArray = bubbleSortDescending(originalArray.slice());
console.log("Descending order:", descendingSortedArray);

          //    question # 09

let number = 2; 

while (number <= 20) {
  console.log(number);
  number += 2; 
}

       //     question # 10

function calculateFactorial(number) {
  let factorial = 1;
  let i = 1;

  do {
    factorial *= i;
    i++;
  } while (i <= number);

  return factorial;
}

const inputNumber = 6;
const factorialResult = calculateFactorial(inputNumber);
console.log(`Factorial of ${inputNumber} is ${factorialResult}`);

         //     question # 11

const person = {
  firstName: "Furqan",
  lastName: "Ayaz",
  age: 21,
  occupation: "Mern Stack Developer"
};

for (let property in person) {
  console.log(`${property}: ${person[property]}`);
}

           //   question # 12
              
const originalArray = [1,2,3,4];
const doubledArray = [];

for (let number of originalArray) {
  doubledArray.push(number * 2);
}
console.log(doubledArray);

             //   question # 13

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even.`;
  } else {
    return `${number} is odd.`;
  }
}

const inputNumber = 6;
const inputNumber1 = 5;
const resultMessage = checkEvenOrOdd(inputNumber);
const resultMessage1 = checkEvenOrOdd(inputNumber1);
console.log(resultMessage);
console.log(resultMessage1);

        //    question # 14

function findMaximum(a, b, c) {
  const max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
  return max;
}
const num1 = 10;
const num2 = 25;
const num3 = 15;
const maximum = findMaximum(num1, num2, num3);
console.log(`The maximum of ${num1}, ${num2}, and ${num3} is ${maximum}.`);

//              question # 15

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true; 
  } else {
    return false; 
  }
}

const inputYear = 2024;
if (isLeapYear(inputYear)) {
  console.log(`${inputYear} is a leap year.`);
} else {
  console.log(`${inputYear} is not a leap year.`);
}
*/