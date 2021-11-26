function solution(progresses, speeds) {
  // progresses의 배열안에 숫자들을 100에서 모두 빼고 speeds로 나눠서 올림을 한다

  // [7, 3, 9] ][5, 10, 1, 1, 20, 1][9, 4, 5]

  let result = [];
  let nums = [];

  for (let i = 0; i < progresses.length; i++) {
    let period = Math.ceil((100 - progresses[i]) / speeds[i]);
    let maxday = Math.max(...nums);

    if (maxday >= period) {
      result[result.length - 1]++;
      nums.push(period);
    }

    if (maxday < period) {
      result.push(1);
      nums = [period];
    }
  }

  return result;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
console.log(solution([55, 60, 65], [5, 10, 7])); // [3]
