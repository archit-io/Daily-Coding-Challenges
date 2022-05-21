// I want to get the sum of two arrays...actually the sum of all their elements. 

// P.S. Each array includes only integer numbers. Output is a number too.

// Answer

function arrayPlusArray(arr1, arr2) {
    initialVal=0
    arr = arr1.concat(arr2)
    return arr.reduce((accumulator, current) => accumulator + current, initialVal)
  }