function solution(name) {
  name = name.split("");

  let al = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  let names = name.map((el) => al.indexOf(el)); // [9,0,1]  [9,4,9,12,4,13]
  let ACnt = name.filter((el) => el === "A");

  for (let i = 0; i < names.length; i++) {
    if (names[i] > al.length / 2) {
      names[i] = al.length - names[i];
    }
  }

  let result = 0;
  let cnt = 0;

  if (ACnt.length < Math.floor(names.length / 2)) {
    return names.reduce((a, b) => a + b, 0) + names.length - 1;
  }

  // debugger;
  let left = 0;
  let right = name.length - 1;

  while (left < right) {
    if (name[left] === "A") {
      left++;
      result += 1;
    } else {
      result += names[left];
      left++;
    }
    if (name[right] === "A") {
      right--;
      result += 1;
    } else {
      result += names[right];
      right--;
      cnt++;
    }
  }

  return result + cnt;
}
