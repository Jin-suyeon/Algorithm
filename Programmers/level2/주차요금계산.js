function solution(fees, records) {
  // 기본시간, 기본요금, 단위시간, 단위요금
  let [basicMin, basicPay, unitMin, unitPay] = fees;
  records = records.map((el) => el.split(" "));
  let timeCheck = {};
  let hash = {};
  let result = [];

  for (let i = 0; i < records.length; i++) {
    let [time, carNum, inOut] = records[i];

    if (!hash[carNum]) {
      hash[carNum] = [[inOut, time]];
    } else {
      hash[carNum].push([inOut, time]);
    }
  }

  const carTimeCalculation = (arr, name) => {
    if (arr.length % 2 !== 0) {
      arr.push(["OUT", "23:59"]);
    }

    for (let i = 0; i < arr.length; i += 2) {
      let [inTimeHour, inTimeMin] = arr[i][1].split(":");
      let [outTimeHour, outTimeMin] = arr[i + 1][1].split(":");

      let hour, min;

      min = Number(outTimeMin) - Number(inTimeMin);

      if (min < 0) {
        outTimeHour = Number(outTimeHour) - 1;

        min = Number(outTimeMin) + 60 - Number(inTimeMin);
      }
      hour = Number(outTimeHour) - Number(inTimeHour);

      if (!timeCheck[name]) {
        timeCheck[name] = hour * 60 + min;
      } else {
        timeCheck[name] += hour * 60 + min;
      }
    }
  };

  // 각각 차량 번호에 맞춰 넣은 것들이 끝났으면 각각의 차량번호들의 순서 대로 계산한다
  for (let carName in hash) {
    carTimeCalculation(hash[carName], carName);
  }

  // 요금계산
  for (let carName in timeCheck) {
    if (timeCheck[carName] <= basicMin) {
      result.push([carName, basicPay]);
    }
    if (timeCheck[carName] > basicMin) {
      let time = Math.ceil((timeCheck[carName] - basicMin) / unitMin);
      result.push([carName, basicPay + time * unitPay]);
    }
  }

  result = result.sort((a, b) => a[0] - b[0]).map((el) => (el = el[1]));

  return result;
}
console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);

// 	[14600, 34400, 5000]
