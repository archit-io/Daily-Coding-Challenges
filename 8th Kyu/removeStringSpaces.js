// remove the spaces from the string, then return the resultant string.

// Answer

function noSpace(x){
    return x.split('').filter(i => i != " ").join('')
  }