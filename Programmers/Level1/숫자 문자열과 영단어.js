// 네오와 프로도가 숫자놀이를 하고 있습니다.
// 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 입출력 예시
// s = "one4seveneight"
// result = 1478

function solution(s) {
  s = s.split("");
  const stringNum = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  let result = "";
  let str = "";

  for (let i = 0; i < s.length; i++) {
    let num = /[0-9]/;

    num.test(s[i]) ? (result += s[i]) : (str += s[i]);

    if (stringNum[str]) {
      result += stringNum[str];
      str = "";
    }
  }

  return Number(result);
}

console.log(solution("one4seveneight"));
