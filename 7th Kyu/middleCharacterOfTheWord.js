// return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s)
{
  const len = s.length
  return len%2 === 0 ? s.substring(len/2-1, len/2+1) : s.charAt(Math.ceil(len/2-1))
}
