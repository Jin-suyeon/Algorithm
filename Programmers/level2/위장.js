function solution(clothes) {
  let cnt = 1;
  let obj = {}; // { headgear: 3, eyewear: 2 }, {face: 4}

  for (let i = 0; i < clothes.length; i++) {
    if (obj[clothes[i][1]]) {
      obj[clothes[i][1]]++;
    } else {
      obj[clothes[i][1]] = 2;
    }
  }

  for (let key in obj) {
    cnt *= obj[key];
  }

  // 옷을 입지 않은 경우 제외
  return cnt - 1;
}

console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); // 5
