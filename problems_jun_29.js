// given an array of 5 unsigned integers, find the least and greatest possible sum of four unique elements from the array

function miniMaxSum(arr) {
  arr.sort()

  const minArr = arr.slice(0, 4)
  const maxArr = arr.slice(1)
  const sumArr = (t, el) => {
      return t + el
  }

  const min = minArr.reduce(sumArr, 0)
  const max = maxArr.reduce(sumArr, 0)

  console.log(min + " " + max)
}