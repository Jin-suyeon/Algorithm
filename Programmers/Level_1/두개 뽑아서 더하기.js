// 정수 배열 numbers가 주어집니다. numbers에서
// 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서
// 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 입출력 예시
// numbers = [2,1,3,4,1]
// result = [2,3,4,5,6,7]

function solution(numbers) {
  let result = [];

  let permutation = (arr, n, bucket) => {
    if (n === 0) {
      result.push(bucket);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      let choice = arr[i];
      let copyArr = arr.slice();
      copyArr.splice(i, 1);
      permutation(copyArr, n - 1, bucket.concat(choice));
    }
  };
  permutation(numbers, 2, []);

  let sumResult = [];

  for (let i = 0; i < result.length; i++) {
    let reduce = result[i].reduce((a, b) => a + b);
    sumResult.push(reduce);
  }

  let realResult = [];
  for (let i = 0; i < sumResult.length; i++) {
    if (realResult.indexOf(sumResult[i]) === -1) {
      realResult.push(sumResult[i]);
    }
  }

  return realResult.sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
