function solution(nums) {
  let removeNums = [...new Set(nums)];
  let getNum = Math.ceil(nums.length / 2);

  if (removeNums.length < getNum) {
    return removeNums.length;
  }

  return getNum;
}

console.log(solution([3, 1, 2, 3])); // 2
