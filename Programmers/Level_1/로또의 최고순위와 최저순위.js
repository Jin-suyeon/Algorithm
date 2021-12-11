function solution(lottos, win_nums) {
  let win = [6, 6, 5, 4, 3, 2, 1];
  let min = 0;
  let max = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.indexOf(lottos[i]) !== -1) {
      min++;
      max++;
    }
  }

  let zeroCnt = lottos.filter((el) => el === 0);

  max = max + zeroCnt.length;

  return [win[max], win[min]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
