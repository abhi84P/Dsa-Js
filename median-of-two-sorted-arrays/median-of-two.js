/*
Given two sorted arrays nums1 and nums2 of size m and n respectively,
return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)). 
*/

const Median = (nums1, nums2) => {
  const n = nums1.length;
  const m = nums2.length;

  if (n > m) return Median(nums2, nums1); //for Algorithmic Simplicity

  let start = 0;
  let end = n; //Binary Search Range Initialization
  const midInFinalArray = Math.floor((n + m + 1) / 2); //to handle both even and odd-length merged arrays correctly.

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const left_nums1_size = mid;
    const left_nums2_size = midInFinalArray - mid;

    //values at the boundaries of the left portions
    const left_nums1 =
      left_nums1_size > 0 ? nums1[left_nums1_size - 1] : Number.MIN_VALUE;
    const left_nums2 =
      left_nums2_size > 0 ? nums2[left_nums2_size - 1] : Number.MIN_VALUE;

    //values at the boundaries of the right portions
    const right_nums1 =
      left_nums1_size < n ? nums1[left_nums1_size] : Number.MAX_VALUE;
    const right_nums2 =
      left_nums2_size < m ? nums2[left_nums2_size] : Number.MAX_VALUE;

    if (left_nums1 <= right_nums2 && left_nums2 <= right_nums1) {
      if ((m + n) % 2 === 0)
        return Math.floor(
          (Math.max(left_nums1, left_nums2) +
            Math.min(right_nums1, right_nums2)) /
            2.0
        );
      return Math.max(left_nums1, left_nums2);
    } else if (left_nums1 > right_nums2) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 0.0;
};
// const nums1 = [1, 2, 3];
// const nums2 = [4, 5, 6, 9];
// console.log("Median of the two arrays is", Median(nums1, nums2));
