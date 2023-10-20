function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      const test = strs[i].indexOf(prefix);
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") {
        return "";
      }
    }
  }
  return prefix;
}

const output = longestCommonPrefix(["flower", "flow", "flight"]);
console.log(">>> output", output);
