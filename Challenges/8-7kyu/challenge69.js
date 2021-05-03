// Count of positives / sum of negatives

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


function countPositivesSumNegatives(arr) {
  if (arr == null || arr.length < 1)
      return [];
    
    let positive = 0;
    let negative = 0;

  arr.forEach(el => el > 0 ? positive += 1 : negative += el)
    
    return [positive, negative];
}
