// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// Answer

function getAverage(marks){
    let initialValue = 0
    let val = marks.reduce((accumulator, current) => accumulator + current, initialValue)
    return Math.round(val / marks.length)
  }