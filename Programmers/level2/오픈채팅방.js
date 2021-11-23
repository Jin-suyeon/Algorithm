function solution(record) {
  // 먼저 for문을 돌리고
  // 인자를 splite으로 나눈후
  // Enter이면 [id, "님이 들어왔습니다"]를 만들고 result에 push
  // Leave이면 [id, "님이 나갔습니다"]를 만들고 result에 push
  // Leave는 nickname을 변경 시키지 않기 때문에 뒤의 키값을 변경하지 않는다
  // 나머지는 키로 id를 값으로 nickname을 담는다
  // map으로 key값과 같은 id를 찾고 뒤의 값을 더한다

  let result = [];
  let idAndNickname = {};

  for (let i = 0; i < record.length; i++) {
    let [state, id, nickname] = record[i].split(" ");

    if (state === "Enter") {
      result.push([id, "님이 들어왔습니다."]);
      idAndNickname[id] = nickname;
    }

    if (state === "Leave") {
      result.push([id, "님이 나갔습니다."]);
    }

    if (state === "Change") {
      idAndNickname[id] = nickname;
    }
  }

  return result.map((el) => idAndNickname[el[0]] + el[1]);
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
); // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
