// create a function that takes an array of integers and returns the sum

function aVeryBigSum(ar) {
  let total = 0
  for (let i=0; i < ar.length; i++) {
      total += ar[i]
  }
  return total
}