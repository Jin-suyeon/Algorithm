function solution(s) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (!result.length || result[result.length - 1] !== s[i]) {
      result.push(s[i]);
    } else {
      result.pop();
    }
  }

  if (result.length) {
    return 0;
  }
  return 1;
}

console.log(solution("baabaa")); //1
console.log(solution("cdcd")); //0
