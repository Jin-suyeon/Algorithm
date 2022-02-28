function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }

  let minNum = Math.min(...arr);
  let index = arr.indexOf(minNum);

  arr.splice(index, 1);

  return arr;
}
