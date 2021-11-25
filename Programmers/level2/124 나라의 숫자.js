function solution(n) {
  let result = "";
  let world = [4, 1, 2];

  while (n > 0) {
    result = world[n % 3] + result;

    if (n % 3 === 0) {
      n = n / 3 - 1;
    } else {
      n = Math.floor(n / 3);
    }
  }

  return result;
}

console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(3)); // 4
console.log(solution(4)); // 11
