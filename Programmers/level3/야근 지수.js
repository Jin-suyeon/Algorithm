function solution(n, works) {
  let sum = works.reduce((a, b) => a + b, 0);

  if (sum <= n) {
    return 0;
  }

  while (n > 0) {
    let maxNum = Math.max(...works);

    for (let i = 0; i < works.length; i++) {
      if (n === 0) break;
      if (works[i] === maxNum) {
        works[i] -= 1;
        n -= 1;
      }
    }
  }

  return works.reduce((a, b) => a + Math.pow(b, 2), 0);
}

console.log(solution(4, [4, 3, 3])); // 12
