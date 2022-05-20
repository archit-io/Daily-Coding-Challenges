// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//we first convert the number into a string
//then we convert the string into an array
//the we reverse the order of the elements of the array
//them we convert each element into a number again

function digitize(n) {
    return String(n).split('').reverse().map((v,k) => Number(v))
  }


