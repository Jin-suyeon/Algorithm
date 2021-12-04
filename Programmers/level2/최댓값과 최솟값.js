function solution(s) {
  let nums = s.split(" ").sort((a, b) => a - b);

  return nums[0] + " " + nums[nums.length - 1];
}

console.log("1 2 3 4"); // "1 4"
console.log("-1 -2 -3 -4"); // "-4 -1"
console.log("-1 -1"); // "-1 -1"
