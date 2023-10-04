// In this challenge, you have an array of strings, and each line is a fragment of the Zen of Python. Your task is to create a method that returns the total number of words in the array. To solve it, you will find a function called countWords with one input parameter: array: An array of phrases Within the body of the countWords function, you should write your solution.

const Input = [
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]
const phrase = "Beautiful is better than ugly"; 
const Output = 20
let totalWords = 0

// function countWords(array) {
//   for (let i = 0; i < array.length; i++) {
//     const words = array[i].split(' ');
//     totalWords += words.length;
//   }
//   return totalWords;
// }


const finalWordCount = countWords(Input);
console.log(finalWordCount);

