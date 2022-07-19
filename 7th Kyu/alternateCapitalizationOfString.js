// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.
// Good luck!

function capitalize(s){
              let arrS = s.split('')
            let arr1 = []
            let arr2 = []
            let arr=[]
            for(let i=0 ; i < arrS.length ; i++) {
                i % 2 === 1 ? arr1.push(arrS[i].toUpperCase()) : arr1.push(arrS[i])
                i % 2 === 0 ? arr2.push(arrS[i].toUpperCase()) : arr2.push(arrS[i])
            }
            return [arr2.join(''), arr1.join('')]
};
