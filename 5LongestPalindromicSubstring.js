function longestPalindrome(s) {
  let longest = "";
  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const palindrome = s.substring(left, right + 1);
      if (palindrome.length > longest.length) {
        longest = palindrome;
      }
      left--;
      right++;
    }
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const palindrome = s.substring(left, right + 1);
      if (palindrome.length > longest.length) {
        longest = palindrome;
      }
      left--;
      right++;
    }
  }
  return longest;
}

const output = longestPalindrome("babad");
const output2 = longestPalindrome("cbbd");
const output3 = longestPalindrome("a");
const output4 = longestPalindrome("ac");
console.log(">>> output", output);
console.log(">>> output2", output2);
console.log(">>> output3", output3);
console.log(">>> output4", output4);
