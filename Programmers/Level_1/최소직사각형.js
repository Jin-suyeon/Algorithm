function solution(sizes) {
  let BigNum = [];
  let SmallNum = [];

  for (let i = 0; i < sizes.length; i++) {
    let max = Math.max(...sizes[i]);
    let min = Math.min(...sizes[i]);
    BigNum.push(max);
    SmallNum.push(min);
  }
  return Math.max(...BigNum) * Math.max(...SmallNum);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);