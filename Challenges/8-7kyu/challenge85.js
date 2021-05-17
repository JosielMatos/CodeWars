// Largest pair sum in array

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum(arr){
  const sortedArr = arr.sort((a,b)=>a-b)
  let number1 = sortedArr[sortedArr.length -1]
  let number2 = sortedArr[sortedArr.length -2]
  return number1 + number2
}

//Other solution
function largestPairSum(numbers){
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}
