function solution(n, lost, reserve) {
  // n : 전체 학생수
  // lost : 도난당한 학생들의 번호가 담긴 배열
  // revers : 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
  // 체육수업을 들을 수 있는 학생의 최댓값을 리턴
  let count = 0;
  let member = n;

  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  let lostReal = [];

  for (let i = 0; i < lost.length; i++) {
    if (reserve.indexOf(lost[i]) !== -1) {
      let idx = reserve.indexOf(lost[i]);
      reserve.splice(idx, 1);
    } else {
      lostReal.push(lost[i]);
    }
  }

  for (let i = 0; i < lostReal.length; i++) {
    if (reserve.indexOf(lostReal[i] - 1) !== -1) {
      let rm = reserve.indexOf(lostReal[i] - 1);
      reserve.splice(rm, 1);
      count++;
    } else if (reserve.indexOf(lostReal[i] + 1) !== -1) {
      let rm = reserve.indexOf(lostReal[i] + 1);
      reserve.splice(rm, 1);
      count++;
    }
  }

  return member - (lostReal.length - count);
}

console.log(solution(5, [2, 4], [1, 3, 5]));
