function solution(new_id) {
  // 1단계
  new_id = new_id.toLowerCase().split("");
  let spcRemove = []; // ...bat..y.abcdefghijklm
  let dotRemove = []; // ".bat.y.abcdefghijklm"
  let engNum = /[a-z0-9]/;
  let spc = /[-_.]/;

  // 2단계 : 특수문자 제거
  for (let i = 0; i < new_id.length; i++) {
    if (engNum.test(new_id[i]) || spc.test(new_id[i])) {
      spcRemove.push(new_id[i]);
    }
  }

  // 3단계 : 연속된 점 하나로 변경
  for (let i = 0; i < spcRemove.length; i++) {
    if (spcRemove[i] === "." && dotRemove[dotRemove.length - 1] === ".") {
      continue;
    } else {
      dotRemove.push(spcRemove[i]);
    }
  }

  // 4단계 : 시작, 끝부분에 있는 점 제거
  while (dotRemove[0] === "." || dotRemove[dotRemove.length - 1] === ".") {
    if (dotRemove[0] === ".") {
      dotRemove.splice(0, 1);
    }
    if (dotRemove[dotRemove.length - 1] === ".") {
      dotRemove.splice(dotRemove.length - 1, 1);
    }
  }

  // 5단계 : 빈 문자열이면 new_id 모든 문자 길이에 맞춰 a 대입
  if (dotRemove.length === 0) {
    dotRemove = ["a"];
  }

  // 6단계 : 길이가 16자 이상이면, 15자로 맞추고 끝에 점이 붙으면 점을 없애준다
  if (dotRemove.length >= 16) {
    let fifLength = dotRemove.slice(0, 15);

    if (fifLength[fifLength.length - 1] === ".") {
      fifLength = dotRemove.slice(0, 14);
    }

    dotRemove = fifLength;
  }

  // 7단계 : 길이가 2자 이하면 마지막 문자를 길이가 3이 될때까지 반복해서 붙임
  if (dotRemove.length <= 2) {
    while (dotRemove.length < 3) {
      dotRemove.push(dotRemove[dotRemove.length - 1]);
    }
  }

  return dotRemove.join("");
}

console.log(solution("...!@BaT#*..y.abcdefghijklm")); //"bat.y.abcdefghi"
console.log(solution("z-+.^.")); //"z--"
console.log(solution("=.=")); //"aaa"
console.log(solution("123_.def")); //"123_.def"
console.log(solution("abcdefghijklmn.p")); //"abcdefghijklmn"
console.log(solution("...........")); //"aaa"
