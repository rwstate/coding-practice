// print a right-aligned half pyramid of # with height and width n
function staircase(n) {
  for (let i=1; i <= n; i++) {
      const blanks = " ".repeat(n - i)
      const blocks = "#".repeat(i)

      console.log(blanks + blocks)
  }
}