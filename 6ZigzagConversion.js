function convert(s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false;
  for (const c of s) {
    rows[currentRow] += c;
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }
    currentRow += goingDown ? 1 : -1;
  }
  return rows.join("");
}

const output = convert("PAYPALISHIRING", 3);
const output2 = convert("PAYPALISHIRING", 4);
const output3 = convert("A", 1);
console.log(">>> output", output);
console.log(">>> output2", output2);
console.log(">>> output3", output3);
