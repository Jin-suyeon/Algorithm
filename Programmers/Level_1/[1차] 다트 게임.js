function solution(dartResult) {
  // S: 1제곱, D: 2제곱, T: 3제곱
  // *: 바로 전에 얻은 점수를 2배로 만든다, #: 해당점수는 마이너스 된다
  // *이 중첩되면 2배가 더 오른다 -> 4배
  // *, #이 중첩되면 해당점수 -2배
  //
  let dartScore = [],
    result = [];
  let numCnt = 0;
  let score = "";
  let alp = /[A-Z]/,
    apc = /[*#]/,
    num = /[0-9]/;
  let square = {
    S: 1,
    D: 2,
    T: 3,
  };

  for (let i = 0; i < dartResult.length; i++) {
    if (alp.test(dartResult[i])) {
      score += dartResult[i];
      dartScore.push(score);
      score = "";
    } else if (apc.test(dartResult[i])) {
      dartScore[dartScore.length - 1] += dartResult[i];
    } else {
      score += dartResult[i];
    }
  }

  for (let i = 0; i < dartScore.length; i++) {
    for (let j = 0; j < dartScore[i].length; j++) {
      if (num.test(dartScore[i][j])) {
        if (result[i] && num.test(result[i].slice(result[i].length - 1))) {
          result[i] += dartScore[i][j];
        } else {
          result[i] = dartScore[i][j];
        }
      }
      if (alp.test(dartScore[i][j])) {
        result[i] = Math.pow(result[i], square[dartScore[i][j]]);
      }
      if (dartScore[i][j] === "*") {
        if (i > 0) {
          result[i - 1] = result[i - 1] * 2;
        }
        result[i] = result[i] * 2;
      }
      if (dartScore[i][j] === "#") {
        result[i] = result[i] * -1;
      }
    }
  }

  return result.reduce((a, b) => a + b, 0);
}

console.log(solution("1D2S#10S")); // 9
