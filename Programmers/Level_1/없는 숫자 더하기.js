function solution(numbers) {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (numbers.indexOf(nums[i]) === -1) {
      result = result + nums[i];
    }
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
