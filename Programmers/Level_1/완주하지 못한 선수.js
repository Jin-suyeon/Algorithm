function solution(participant, completion) {
  // 첫번째 인자 : 마라톤에 참여한 선수들 이름이 담긴 배열
  // 두번째 인자 : 완주한 선수들의 이름이 담긴 배열

  // completion을 순회하며 participant에 이름이 포함(indexOf 사용)되어 있으면 splice를 이용하여 participant의 인덱스 부분을 삭제
  // return participant[0]

  for (let i = 0; i < completion.length; i++) {
    if (participant.includes(completion[i])) {
      let idx = participant.indexOf(completion[i]);
      participant.splice(idx, 1);
    }
  }

  return participant[0];
}
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
