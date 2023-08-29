const twoSum = (nums, target) => {
  const indexMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const value = target - num;

    if (value in indexMap) {
      return [indexMap[value], i];
    }

    indexMap[num] = i;
  }
};

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const target = 12;

// console.log(twoSum(nums, target));
