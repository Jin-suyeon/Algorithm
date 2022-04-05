function solution(files) {
  // for문을 돌며 head, number, tail로 구분하고
  // head가 모두 같은 경우에는 number로 구별하고
  // 그게 아닌 경우에는 head의 순서에 맞춰 정렬한다
  let heads = new Array(files.length).fill("");
  let numbers = new Array(files.length).fill("");
  let tails = new Array(files.length).fill("");
  let filesCopy = [];

  for (let i = 0; i < files.length; i++) {
    let file = files[i].split("");
    let num = /[0-9]/;

    for (let j = 0; j < file.length; j++) {
      if (num.test(file[j]) && !num.test(file[j + 1])) {
        numbers[i] += file[j];
        tails[i] = files[i].slice(j + 1);
        break;
      }
      if (num.test(file[j]) && num.test(file[j + 1])) {
        numbers[i] += file[j];
      } else {
        heads[i] += file[j];
      }
    }
  }

  for (let i = 0; i < heads.length; i++) {
    filesCopy.push([heads[i], numbers[i], tails[i]]);
  }

  // 첫번째 head를 정렬하고, head에서 같은 것들이 있으면 number로 정렬한다
  // head와 number가 모두 동일하다면 그 자리를 유지한다
  filesCopy.sort((a, b) => {
    if (a[0].toUpperCase() < b[0].toUpperCase()) return -1;
    if (a[0].toUpperCase() > b[0].toUpperCase()) return 1;
    if (a[0].toUpperCase() === b[0].toUpperCase()) return 0;
  });
  filesCopy.sort((a, b) => {
    if (a[0].toUpperCase() === b[0].toUpperCase()) {
      if (a[0] + Number(a[1]) !== b[0] + Number(b[1])) {
        return Number(a[1]) - Number(b[1]);
      }
    }
  });

  for (let i = 0; i < filesCopy.length; i++) {
    filesCopy[i] = filesCopy[i].join("");
  }

  return filesCopy;
}
