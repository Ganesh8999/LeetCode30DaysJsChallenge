/* 2626. Array Reduce Transformation
Easy 
Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
A reduced array is created by applying the following operation: val = fn (init, nums [0]), val = fn(val,
nums [1]), val = fn(val, nums (2]), •.. until every element in the array has been processed. The final value of val is returned.
If the length of the array is 0, it should return init.
Please solve it without using the built-in Array. reduce method.
Example 1:
Input:
nums = [1,2,3,4]
fn = function sum (accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums [0] = 1
(1) + nums [11 = 3
(3) + nums [2] = 6
(6) + nums [3] = 10
The final answer is 10. */

const reduce = function (arr, fn, init) {
  let accValue = init;
  arr.forEach((element) => (accValue = fn(accValue, element)));
  return accValue;
};

console.log(
  reduce(
    [1, 2, 3],k
    function sum(accum, curr) {
      return accum + curr;
    },
    0
  )
);
