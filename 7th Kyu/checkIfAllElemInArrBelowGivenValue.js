// DESCRIPTION:
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.

function smallEnough(l, n){
  for(let i = 0; i < l.length ; i++) {
        if(l[i] > n ) return false
    }
    return true
}

// function smallEnough(a, limit){
//   return Math.max(...a) <= limit
// }

// smallEnough = (a, l) => a.every(e => e <= l)
