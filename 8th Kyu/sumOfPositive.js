// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// Answer

function positiveSum(arr) {
    counter = 0
    for(let i = 0; i < arr.length ; i++ ) {
        if (arr[i] > 0) counter += arr[i]
    }
    return counter
  }

// Other solutions

// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//  }


//  function positiveSum (arr) {
//     return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
//   }


// const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

// function positiveSum( obj ) {
//     return obj.map(el => el < 0 ? 0 : el).reduce((acc, i)=> acc + i, 0)
//   }