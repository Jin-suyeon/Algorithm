function solution(s, n) {
  const smallAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const BigAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  s = s.split("");

  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (smallAlphabet.indexOf(s[i]) !== -1) {
      let idx = smallAlphabet.indexOf(s[i]);
      if (idx + n >= smallAlphabet.length) {
        let index = n - (smallAlphabet.length - idx);
        result = result + smallAlphabet[index];
      } else {
        result = result + smallAlphabet[idx + n];
      }
    }
    if (BigAlphabet.indexOf(s[i]) !== -1) {
      let idx = BigAlphabet.indexOf(s[i]);
      if (idx + n >= BigAlphabet.length) {
        let index = n - (BigAlphabet.length - idx);
        result = result + BigAlphabet[index];
      } else {
        result = result + BigAlphabet[idx + n];
      }
    }
    if (s[i] === " ") {
      result = result + s[i];
    }
  }

  return result;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
