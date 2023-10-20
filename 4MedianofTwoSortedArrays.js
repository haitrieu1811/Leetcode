function findMedianSortedArrays(nums1, nums2) {
  const mergedArr = [...nums1, ...nums2].sort((a, b) => a - b);
  if (mergedArr.length === 1) {
    return mergedArr[0];
  }
  const isEvenLength = mergedArr.length % 2 === 0;
  if (isEvenLength) {
    const secondIndex = mergedArr.length / 2;
    const firstIndex = secondIndex - 1;
    return (mergedArr[firstIndex] + mergedArr[secondIndex]) / 2;
  } else {
    const index = Math.floor(mergedArr.length / 2);
    return mergedArr[index];
  }
}

const output = findMedianSortedArrays([1, 3], [2]);
const output2 = findMedianSortedArrays([1, 2], [3, 4]);
const output3 = findMedianSortedArrays([0, 0], [0, 0]);
const output4 = findMedianSortedArrays([], [1]);
const output5 = findMedianSortedArrays([2], []);
console.log(">>> output", output);
console.log(">>> output2", output2);
console.log(">>> output3", output3);
console.log(">>> output4", output4);
console.log(">>> output5", output5);
