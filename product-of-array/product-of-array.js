// Given an integer array nums, return an array answer
// such that answer[i] is equal to the product of all
// the elements of nums except nums[i].

const productExceptSelf = (nums) => {
  const result = new Array(nums.length).fill(1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= postfix;
    postfix *= nums[i];
  }

  // At i = 3: result[3] is multiplied by postfix, which is 1 (no elements to the right). So, result remains [1, 1, 2, 6].
  // At i = 2: result[2] is multiplied by postfix, which is 1 * 4 (product of 4 to the right). So, result becomes [1, 1, 8, 6].
  // At i = 1: result[1] is multiplied by postfix, which is 1 * 4 * 3 (product of 4, 3, and 2 to the right). So, result becomes [1, 12, 8, 6].
  // At i = 0: result[0] is multiplied by postfix, which is 1 * 4 * 3 * 2 (product of all elements to the right). So, result becomes [24, 12, 8, 6].
  return result;
};

const nums = [1, 2, 3, 4];
const result1 = productExceptSelf(nums);
console.log(result1);
