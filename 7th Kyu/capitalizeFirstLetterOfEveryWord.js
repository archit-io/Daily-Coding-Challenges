// capitalize first letter of every word in a string

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function (s) {
    const str = this.toString(s)
    return str.split(' ').map((_,i) => _.charAt(0).toUpperCase() + _.slice(1)).join(' ')
  };