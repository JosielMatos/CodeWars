// Heron's Formula

// Write function heron which calculates the area of a triangle with sides a, b, and c.

// Heron's formula: sqrt (s * (s - a) * (s - b) * (s - c)), where s = (a + b + c) / 2.
// Output should have 2 digits precision.

function heron(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
