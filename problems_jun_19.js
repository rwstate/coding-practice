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

// given an array of integers, print the ratio of positive, negative, and nil values on separate lines, fixed to 6 decimal places

function plusMinus(arr) {
  let len = arr.length
  let pos = 0
  let neg = 0
  let nil = 0

  for (let i=0; i<len; i++) {
      if (arr[i] > 0) {
          pos +=1
      } else if (arr[i] < 0) {
          neg += 1
      } else {
          nil += 1
      }
  }
  console.log(pos/len.toFixed(6))
  console.log(neg/len.toFixed(6))
  console.log(nil/len.toFixed(6))
}