function solution(orders, course) {
  orders = orders.map((el) => el.split(""));
  const orderList = [];
  const numList = {};
  let result = [];

  const combination = (arr, bucket, n) => {
    if (arr.length < n) {
      return;
    }
    if (n === 0) {
      let order = bucket.sort().join("");
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
  };

  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < course.length; j++) {
      combination(orders[i], [], course[j]);
    }
  }

  let numsArr = orderList.map((el) => [el, numList[el]]);

  for (let i = 0; i < course.length; i++) {
    let filter = numsArr.filter((el) => el[0].length === course[i]);
    let maxNum = Math.max(...filter.map((el) => el[1]));
    for (let j = 0; j < filter.length; j++) {
      if (filter[j][1] === maxNum && maxNum >= 2) {
        result.push(filter[j][0]);
      }
    }
  }

  return result.sort();
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
); //["AC", "ACDE", "BCFG", "CDE"]

console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
); //["ACD", "AD", "ADE", "CD", "XYZ"]

console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])); //["WX", "XY"]
