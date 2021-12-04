function solution(A, B) {
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);

  let minNum = [];

  for (let i = 0; i < A.length; i++) {
    minNum.push(A[i] * B[i]);
  }

  return minNum.reduce((a, b) => a + b, 0);
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
