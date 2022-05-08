// method that finds the next integral perfect square after the one passed as a parameter. 
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
// Examples:(Input --> Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square


function findNextSquare(sq) {
    const squareRoot = Math.sqrt(sq) 
  
    return squareRoot % 1 === 0 ? Math.pow(squareRoot+1,2) : -1
  }
  