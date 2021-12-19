function solution(n, a, b) {
  let team = []; // ["1","2","3","A","5","6","B","8"]
  let result = [];
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    team.push(String(i));
  }

  team[a - 1] = "A";
  team[b - 1] = "B";

  // 한번씩 묶어 줄 때 마다 cnt++
  // 묶어준 문자열 중에 "A", "B"가 포함되어 있으면 cnt 리턴
  while (team.length > 1) {
    cnt++;

    for (let i = 0; i < team.length; i += 2) {
      result.push(team[i] + team[i + 1]);
    }

    team = result;

    for (let i = 0; i < result.length; i++) {
      if (result[i].indexOf("A") !== -1 && result[i].indexOf("B") !== -1) {
        return cnt;
      }
    }

    result = [];
  }
}
