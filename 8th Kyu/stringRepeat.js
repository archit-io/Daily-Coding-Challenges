// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// Answer

function repeatStr (n, s) {
    let str=''
    for(let i=1; i <= n ; i++) {
      str+=s
    }
    return str
  }

//   Other solutions

//   function repeatStr (n, s) {
//     return s.repeat(n);
//   }