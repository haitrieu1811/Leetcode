function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charMap = {};
  for (let end = 0; end < s.length; end++) {
    const char = s[end];
    if (charMap[char] >= start) {
      start = charMap[char] + 1;
    }
    charMap[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

// const output = lengthOfLongestSubstring("abcabcbb");
// const output2 = lengthOfLongestSubstring("bbbbb");
const output3 = lengthOfLongestSubstring("pwwkew");
// console.log(">>> output", output);
// console.log(">>> output2", output2);
console.log(">>> output3", output3);
