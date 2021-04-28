// Evens times last

// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// Indexes in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
    let result = 0
    const even = numbers.filter((el, index) => index % 2 === 0)
    even.forEach(el => result += el * numbers[numbers.length - 1])
    return result
}