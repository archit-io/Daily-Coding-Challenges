// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).
// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.
// function add(num) {
//   return num + 1;
// }

// function mult(num) {
//   return num * 30;
// }

// chain(2, [add, mult]);
// // returns 90;

function chain(input, fs) {
  let result = 0

            for(let i = 0 ; i < fs.length ; i++)
            {
                if(i === 0) {
                    result = fs[0](input)
                }

                else result = fs[i](result)  
            }

            return result
}

// function chain(v, fns) {
//   return fns.reduce(function(v, fn) { return fn(v) }, v);
// }

// function chain(x, functions) {
//   functions = functions || [];
//   functions.forEach(function(fn) {
//     x = fn(x);
//   });
//   return x;
// }
