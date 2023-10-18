function generateParenthesis(n) {
  const result = [];
  generate("", 0, 0);
  return result;
  function generate(s, left, right) {
    if (left === n && right === n) {
      result.push(s);
      return;
    }
    if (left < n) {
      generate(s + "(", left + 1, right);
    }
    if (right < left) {
      generate(s + ")", left, right + 1);
    }
  }
}

const output = generateParenthesis(5);
console.log(">>> output", output);
