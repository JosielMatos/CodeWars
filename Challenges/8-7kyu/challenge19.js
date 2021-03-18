// Find the odd int

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.


function findOdd(A) {
    return A.reduce((a, b) => a ^ b);
}
  