// if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    const counts = {};    
    strUpp = str.toUpperCase()
    strUpp.split('').forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    return (strUpp.includes('O') || strUpp.includes('X')) ? (counts['X'] === counts['O'] ? true : false) : true
}

