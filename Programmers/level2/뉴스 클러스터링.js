function solution(str1, str2) {
  str1 = str1.toLocaleLowerCase();
  str2 = str2.toLocaleLowerCase();

  let str1List = [];
  let str2List = [];
  let interSectionList = [];

  // 각각 2개의 문자열을 붙인 것들 만 push하고
  // 알파벳이 아닌 것들은 무시
  let alphabet = /^[a-zA-Z]*$/;

  for (let i = 0; i < str1.length - 1; i++) {
    let text = str1.slice(i, i + 2);

    if (alphabet.test(text)) {
      str1List.push(text);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    let text = str2.slice(i, i + 2);

    if (alphabet.test(text)) {
      str2List.push(text);
    }
  }

  // 합집합, 교집합을 구함
  str1List.forEach((item) => {
    let idx = str2List.indexOf(item);

    if (idx !== -1) {
      interSectionList.push(item);
      str2List.splice(idx, 1);
    }
  });

  if (str1List.length == 0 && str2List.length == 0) return 65536;

  return Math.floor(
    (interSectionList.length / (str1List.length + str2List.length)) * 65536
  );
}
