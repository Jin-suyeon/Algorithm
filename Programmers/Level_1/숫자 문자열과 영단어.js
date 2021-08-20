// 네오와 프로도가 숫자놀이를 하고 있습니다.
// 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 입출력 예시
// s = "one4seveneight"
// result = 1478

function solution(s) {
  if (!isNaN(s)) {
    return Number(s);
  }

  let stringArr = s.split("");

  const stringNum = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  let result = "";
  let string = "";

  for (let i = 0; i < stringArr.length; i++) {
    if (num.indexOf(stringArr[i]) !== -1 && !isNaN(stringArr[i])) {
      result = result + stringArr[i];
    } else {
      string = string + stringArr[i];
      if (stringNum.indexOf(string) !== -1) {
        let index = stringNum.indexOf(string);
        result = result + num[index];
        string = "";
      } else {
        continue;
      }
    }
  }

  return Number(result);
}

console.log(solution("one4seveneight"));
