function solution(s) {
  s = s
    .slice(2, s.length - 2)
    .split("},{") // ["1,2,3","2,1","1,2,4,3","2"]
    .map((el) => el.split(",")) // [["2"],["2","1"],["2","1","3"],["2","1","3","4"]]
    .sort((a, b) => a.length - b.length); // [["2"],["2","1"],["2","1","3"],["2","1","3","4"]]

  let result = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      let idx = result.indexOf(s[i][j]);

      if (idx === -1) {
        result[i] = s[i][j];
      }
    }
  }

  return result.map((el) => Number(el));
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); // [2, 1, 3, 4]
