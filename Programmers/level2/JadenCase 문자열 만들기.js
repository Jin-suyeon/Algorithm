function solution(s) {
  s = s.toLowerCase().split(" ");
  let jadanCase = [];
  let result = "";

  // 빈배열이면 빈 스트링 push
  // 아니면 배열 제일 앞의 인덱스를 대문자로 변경 후 push
  for (let i = 0; i < s.length; i++) {
    let arr = s[i].split("");

    if (arr.length === 0) {
      jadanCase.push("");
    } else {
      arr[0] = arr[0].toUpperCase();
      jadanCase.push(arr.join(""));
    }
  }

  // 각 문자 사이에 띄어쓰기를 넣어주고
  // 마지막 문자는 넣지 않는다
  for (let i = 0; i < jadanCase.length; i++) {
    result = result + jadanCase[i];

    if (i !== jadanCase.length - 1) {
      result = result + " ";
    }
  }

  return result;
}

console.log(solution("3people unFollowed me")); //"3people Unfollowed Me"
