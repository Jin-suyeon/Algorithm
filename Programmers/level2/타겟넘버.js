function solution(numbers, target) {
  // dfs를 활용하여
  let result = 0;

  getResult(0, 0);

  function getResult(x, value) {
    if (x < numbers.length) {
      getResult(x + 1, value + numbers[x]);
      getResult(x + 1, value - numbers[x]);
    } else {
      if (value === target) {
        result++;
      }
    }
  }
  return result;
}

console.log([1, 1, 1, 1, 1], 3);
