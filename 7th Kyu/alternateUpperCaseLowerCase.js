// given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:
// •	make as few changes as possible.
// •	if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
    let countL = 0
            let countU = 0
            let arr = s.split('')
            for(let i=0 ; i < arr.length ; i++) {
                if(arr[i] === arr[i].toUpperCase()) countU+=1
                else countL+=1
            }
            console.log(countU)
            console.log(countL)
            return countU <= countL ? arr.map(_ => _.toLowerCase()).join('') : arr.map(_ => _.toUpperCase()).join('')
}
