// square every digit of a number and concatenate them
// example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num){
  return Number(num.toString().split('').map(_ => Math.pow(Number(_),2)).join(''));
}
