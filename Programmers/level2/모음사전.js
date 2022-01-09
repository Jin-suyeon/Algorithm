function solution(word) {
  let alphabet = "AEIOU".split("");
  let words = [];

  const permutation = (arr, bucket, n) => {
    if (n === 0) {
      let sameWord = bucket.join("");
      words.push(sameWord);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let choice = arr[i];
      let copyArr = arr.slice();

      permutation(copyArr, bucket.concat(choice), n - 1);
    }
  };

  for (let i = 1; i <= alphabet.length; i++) {
    permutation(alphabet, [], i);
  }

  return words.sort().indexOf(word) + 1;
}

console.log(solution("AAAAE")); // 6
