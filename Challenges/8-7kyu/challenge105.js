// All Star Code Challenge #20

// Create a function called addArrays() that combines two arrays of equal length,
// summing each element of the first with the corresponding element in the second,
// returning the "combined" summed array.
// Raise an error if input arguments are not of equal length.

// addArrays([1,2],[4,5]); // => [5,7]
// addArrays([1,2,3],[4,5]); // => Error
// Note:
// Expect array input to either contain numbers or strings only
// The function should also allow for concatenating string

// addArrays(["a"],["b"]) // => ["ab"]

function addArrays(a1, a2) {
  if (a1.length !== a2.length) throw new Error();
  return a1.map((a, i) => a1[i] + a2[i]);
}
