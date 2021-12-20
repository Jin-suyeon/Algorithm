function solution(participant, completion) {
  // 첫번째 인자 : 마라톤에 참여한 선수들 이름이 담긴 배열
  // 두번째 인자 : 완주한 선수들의 이름이 담긴 배열

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (completion[i] !== participant[i]) {
      return participant[i];
    }
  }
}
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
);
