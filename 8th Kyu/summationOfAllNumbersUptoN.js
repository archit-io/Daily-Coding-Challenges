// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// Answer

var summation = function (num) {
    let tot = 0
    for(let i = 1 ; i <= num ; i++) {
      tot = tot + i 
    }
    return tot
  }

//   Other solutions

//   const summation = num => (
//     Array(num).fill(true)
//       .reduce((sum, item, index) => sum + index + 1, 0)
//   );