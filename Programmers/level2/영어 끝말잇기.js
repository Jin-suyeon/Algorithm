function solution(n, words) {
  let idx = 1;
  let speakWord = [words.shift()];

  // speakWord의 마지막 단어의 끝의 단어와 words[i]의 첫번째 단어가 같고
  // words[i]가 speakWord에 포함되어 있지 않으면 speakWord에 넣어주고
  // 그게 아니면 몇번째 사람이 틀린건지 찾고
  // speakWord에 단어를 넣어준 후 몇번째 턴인지 찾는다
  // 그 두수를 배열에 넣어 리턴
  // 틀린 것 없이 진행되었다면 [0, 0] 리턴
  for (let i = 0; i < words.length; i++) {
    let lastWord = speakWord[speakWord.length - 1];
    idx++;

    if (
      words[i][0] === lastWord[lastWord.length - 1] &&
      speakWord.indexOf(words[i]) === -1
    ) {
      speakWord.push(words[i]);
    } else {
      idx % n !== 0 ? (idx = idx % n) : (idx = n);

      speakWord.push(words[i]);
      return [idx, Math.ceil(speakWord.length / n)];
    }
  }

  return [0, 0];
}

console.log(
  solution([
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
); // [3, 3]
