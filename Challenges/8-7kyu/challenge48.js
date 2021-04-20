// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function find_average(array) {
    let total = 0
    for (let i=0; i<array.length; i++) {
      total += array[i]
    }
    return total / array.length || 0;
}