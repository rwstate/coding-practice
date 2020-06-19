// create a function that takes an array of integers and returns the sum

function aVeryBigSum(ar) {
  let total = 0
  for (let i=0; i < ar.length; i++) {
      total += ar[i]
  }
  return total
}

// given a square matrix, compute the difference between the two sums of the values of the diagonals

function diagonalDifference(arr) {
  let difference = 0
  for (let i=0; i < arr.length; i++) {
      let rowDiff = 0
      rowDiff += arr[i][i]
      rowDiff -= arr[i][arr.length - i - 1]
      difference += rowDiff
  }
  return Math.abs(difference)
}