function solution(price, money, count) {
  // price : 원래 놀이기구 가격
  // money : 내가 가진 돈
  // count : 놀이기구 탄 횟수

  // 놀이기구를 탈때마다 놀이기구 가격이 2배씩 오른다

  // 금액이 부족하지 않으면 0을 리턴하고 부족하면 부족한 만큼의 돈을 구한다

  // 내가 가진돈이 20이고 놀이기구를 4번타면 총 30
  // 10이 부족하므로 10 리턴
  // 3 + 6 + 9 + 12 = 30

  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum = sum + price * i;
  }

  if (sum < money) {
    return 0;
  }
  return sum - money;
}
console.log(solution(3, 20, 4));
