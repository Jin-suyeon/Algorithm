function solution(s) {
  let result = [];
  let words = [];

  s = s.split("");

  const nearWord = (str, word) => {
    return str.reverse().indexOf(word) + 1;
  };

  for (let i = 0; i < s.length; i++) {
    if (words.indexOf(s[i]) === -1) {
      result.push(-1);
      words.push(s[i]);
    } else {
      const sliceStr = s.slice(0, i);

      result.push(nearWord(sliceStr, s[i]));
    }
  }

  return result;
}

console.log(solution("banana")); // [-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
