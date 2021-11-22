function solution(s) {
  let result = [];
  let end = Math.ceil(s.length / 2);
  let realResult = [];

  // [["aabb","accc"],["aab","bac","cc"],["aa","bb","ac","cc"],["a","a","b","b","a","c","c","c"]]
  // 1부터 s의 절반까지의 길이를 모두 배열에 넣는다
  const sameString = (arr, bucket, num) => {
    if (num === 0) {
      result.push(bucket);
      end = end - 1;
      if (end === 0) {
        return;
      } else {
        sameString(s, [], Math.ceil(s.length / end));
      }
    }

    let choice = arr.slice(0, end);
    let copyArr = arr.slice(end, arr.length);

    if (arr.length === 0) {
      return;
    } else {
      sameString(copyArr, bucket.concat([choice]), num - 1);
    }
  };

  sameString(s, [], Math.ceil(s.length / end));

  let realResult2 = [];

  // 바로 앞의 영어와 같은 글이 있으면 숫자로 표시한다
  // 구해진 값을 모두 합친 문자열로 만들고 그 길이를 push 해준다
  // 구해진 값의 길이에 제일 짧은 수를 리턴한다
  for (let i = 0; i < result.length; i++) {
    realResult.push([]);
    for (let j = 0; j < result[i].length; j++) {
      if (realResult[i][realResult[i].length - 1] === result[i][j]) {
        realResult[i][realResult[i].length - 2] = String(
          Number(realResult[i][realResult[i].length - 2]) + 1
        );
      } else {
        realResult[i].push("1", result[i][j]);
      }
    }
    let filter = realResult[i].filter((el) => el !== "1");
    realResult2.push(filter.join("").length);
  }

  return Math.min(...realResult2);
}

console.log(solution("aabbaccc")); // 7
console.log(solution("ababcdcdababcdcd")); // 9
console.log(solution("abcabcdede")); // 8
console.log(solution("abcabcabcabcdededededede")); // 14
console.log(solution("xababcdcdababcdcd")); // 17