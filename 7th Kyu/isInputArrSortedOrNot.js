// DESCRIPTION:
// Complete the method which accepts an array of integers, and returns one of the following:
// •	"yes, ascending" - if the numbers in the array are sorted in an ascending order
// •	"yes, descending" - if the numbers in the array are sorted in a descending order
// •	"no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(arr) {
  return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
         arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
}

// function isSortedAndHow(array) {
// let asc = true;
// let des = true;
//   for(let i = 1; i < array.length; i++) {
//     if(array[i] > array[i-1]) des = false;
//     if(array[i] < array[i-1]) asc = false;
//   }
//   return asc ? 'yes, ascending' : des ? 'yes, descending' : 'no'
// }
