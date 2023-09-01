const containsDuplicate = (nums) => {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  //   console.log([...set]);
  return false;
};

// const nums = [1, 3, 2, 4, 5, 6, 7];
// const has = containsDuplicate(nums);
// console.log(has);
