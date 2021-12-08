function solution(expression) {
  let arrangement = []; // ["100","-","200","*","300","-","500","+","20"]
  let num = "";
  let numOfCase = []; // ["-*+","-+*","*-+","*+-","+-*","+*-"]
  let operator = []; // ["-","*","+"]
  let result = [];

  // expression을 연산자와 넘버를 구분하여 arrangement에 넣는다
  // expression안의 연산자들을 중복되지 않게 뽑아낸다
  for (let i = 0; i < expression.length; i++) {
    let opTest = /[-+*]/;

    if (i === expression.length - 1) {
      num = num + expression[i];
      arrangement.push(num);
    }

    if (opTest.test(expression[i])) {
      arrangement.push(num);
      num = "";
      arrangement.push(expression[i]);
      operator.push(expression[i]);
    } else {
      num = num + expression[i];
    }
  }

  operator = [...new Set(operator)];

  // 연산자의 우선순위를 재귀를 돌려 구한다
  const permutaion = (arr, bucket, n) => {
    if (arr.length === 0) {
      numOfCase.push(bucket);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let choice = arr[i];
      let copyArr = arr.slice();
      copyArr.splice(i, 1);

      permutaion(copyArr, bucket + choice, n - 1);
    }
  };

  permutaion(operator, "", operator.length);

  // 우선순위의 연산자를 찾고
  // 앞뒤로 계산하고 그 연산자를 계산한 숫자로 변경
  // 연산자 앞 뒤의 숫자를 없앤다
  // 계산해서 나온 결과값을 절대값으로 바꾸어 result에 push
  // result에서 가장 큰 수를 구한다.

  const calculation = (str) => {
    let calculating = arrangement.slice();

    while (str.length > 0) {
      let idx = calculating.indexOf(str[0]);

      if (idx === -1) {
        str.shift();
      } else {
        if (str[0] === "-") {
          calculating[idx] =
            Number(calculating[idx - 1]) - Number(calculating[idx + 1]);
        }
        if (str[0] === "+") {
          calculating[idx] =
            Number(calculating[idx - 1]) + Number(calculating[idx + 1]);
        }
        if (str[0] === "*") {
          calculating[idx] =
            Number(calculating[idx - 1]) * Number(calculating[idx + 1]);
        }
        calculating.splice(idx - 1, 1);
        calculating.splice(idx, 1);
      }
    }
    return Math.abs(calculating[0]);
  };

  for (let i = 0; i < numOfCase.length; i++) {
    result.push(calculation(numOfCase[i].split("")));
  }

  return Math.max(...result);
}

console.log(solution("100-200*300-500+20")); // 60420
