function solution(n, arr1, arr2) {
  let matrix = new Array(n).fill(" ").map((num) => new Array(n).fill(" "));
  let copyArr1 = [];
  let copyArr2 = [];

  let result = [];

  // arr1 2진법으로
  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    if (num.toString(2).length < n) {
      let zero = new Array(n).fill(0).join("");
      zero = zero.slice(num.toString(2).length);
      num = zero + String(num.toString(2));
      copyArr1.push(num);
    } else {
      num = String(num.toString(2));
      copyArr1.push(num);
    }
  }

  // arr2 2진법으로
  for (let i = 0; i < arr2.length; i++) {
    let num = arr2[i];
    if (num.toString(2).length < n) {
      let zero = new Array(n).fill(0).join("");
      zero = zero.slice(num.toString(2).length);
      num = zero + String(num.toString(2));
      copyArr2.push(num);
    } else {
      num = String(num.toString(2));
      copyArr2.push(num);
    }
  }

  // "1"을 "#"으로 변경
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (copyArr1[i][j] === "1" || copyArr2[i][j] === "1") {
        matrix[i][j] = "#";
      }
    }
  }

  // matrix에 있는 배열들 합침
  for (let i = 0; i < matrix.length; i++) {
    result.push(matrix[i].join(""));
  }

  return result;
}

console.log(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
// ["#####","# # #", "### #", "# ##", "#####"]
