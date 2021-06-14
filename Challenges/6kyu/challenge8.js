// Sort the odd

// You will be given an array of numbers. You have to sort the odd numbers in
// ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(arr) {
  let sortedOdds = [];
  let oddsIndex = [];
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (value % 2 !== 0) {
      sortedOdds.push(value);
      oddsIndex.push(i);
    } else {
      newArr[i] = value;
    }
  }

  sortedOdds.sort((a, b) => a - b);
  for (let j = 0; j < sortedOdds.length; j++) {
    let value = sortedOdds[j];
    let index = oddsIndex[j];
    newArr[index] = value;
  }
  return newArr;
}

//Other optimal solution
function sortArray(arr) {
  const odd = arr.filter((n) => n % 2).sort((a, b) => a - b);
  return arr.map((n) => (n % 2 ? odd.shift() : n));
}
