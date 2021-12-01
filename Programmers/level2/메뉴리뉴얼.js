function solution(orders, course) {
  // orders를 배열 형태로 만들어 줌
  orders = orders.map((el) => el.split("").sort());

  const orderList = [];
  const numList = {};
  let result = [];

  //for문으로 재귀 돌려주기
  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < course.length; j++) {
      combination(orders[i], [], course[j]);
    }
  }

  // 조합 재귀 사용
  function combination(arr, bucket, n) {
    if (n === 0) {
      let order = bucket.join("");
      let idx = orderList.indexOf(order);

      if (idx === -1) {
        orderList.push(order);
        numList[order] = 1;
      } else {
        numList[order]++;
      }
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const choice = arr[i];
      const sliceArr = arr.slice();

      combination(sliceArr.slice(i + 1), bucket.concat(choice), n - 1);
    }
  }

  // 숫자가 주문조합과 같이 들어갈 수 있게 만들어줌
  let numsArr = orderList.map((el) => [el, numList[el]]);

  // for문을 돌려서 course의 길이가 같은 것만 뽑아내어
  // 그 중 가장 큰 수를 구한다
  // 그 큰수와 조합이 같고 가장 큰 수가 2이상이면
  // result에 push
  for (let i = 0; i < course.length; i++) {
    let filter = numsArr.filter((el) => el[0].length === course[i]);
    let maxNum = Math.max(...filter.map((el) => el[1]));

    for (let j = 0; j < filter.length; j++) {
      if (filter[j][1] === maxNum && maxNum >= 2) {
        result.push(filter[j][0]);
      }
    }
  }

  // 오름차순으로 리턴
  return result.sort();
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
); //["AC", "ACDE", "BCFG", "CDE"]

console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
); //["ACD", "AD", "ADE", "CD", "XYZ"]

console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])); //["WX", "XY"]
