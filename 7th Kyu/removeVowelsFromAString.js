// write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    return str.split('').filter(_ => !vowels.includes(_)).join('')
  }
