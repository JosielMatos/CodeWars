// Reverser

// Impliment the reverse function, which takes in input n and reverses it. For instance,
// reverse(123) should return 321. You should do this without converting the inputted number into a string.

// // Please do not use
// const forbidden = "
//                   '
//                   `
//                   string
//                   fixed
//                   precision
//                   .keys

function reverse(n) {
  let reversed = 0;
  let num = n;
  let lastDigit;
  while (num != 0) {
    lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return reversed;
}

//Other optimal solution
function reverse(n) {
  return +[...([] + n)].reverse().join([]);
}
