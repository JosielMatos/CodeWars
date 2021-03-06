// Bit Counting

// Write a function that takes an integer as input, and returns the number of
// bits that are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function
// should return 5 in this case

const countBits = function (n) {
  let result = 0;
  n.toString(2)
    .split("")
    .map((e) => (e.match(/1/gi) ? (result += 1) : null));
  return result;
};

//more clever way of doing it
let countBits = (n) => n.toString(2).split("0").join("").length;
