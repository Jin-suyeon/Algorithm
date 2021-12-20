function solution(n) {
  // 45를 계속 3으로 나눈다
  // 3으로 나눴을 때 나오는 나머지 값들이 3진법의 수이다
  // 순서대로 계산되면 0021이 나온다
  // 10진법을 구하려면 0 * 3의 3제곱, 0 * 3의 2제곱, 2 * 3의 1제곱, 1 * 1들을 모두 더해준다
  //     let three = "" // ["0", "0", "2", "1"]
  //     let divisionResult = 0

  //     const division = (num) => {

  //         if(divisionResult === 1 || divisionResult === 2){
  //             three = three + divisionResult
  //             return;
  //         }

  //         divisionResult = Math.floor(num / 3)
  //         three = three + (num - (3 * divisionResult))
  //         division(divisionResult)
  //     }
  //     division(n)

  //     three.split("") // ["0", "0", "2", "1"]

  //     let sum = 0
  //     let count = three.length - 1

  //     for(let i = 0; i < three.length; i++){
  //         if(count === 0){
  //             count = 1
  //             sum = sum + (Number(three[i]) * count)
  //         }else{
  //             sum = sum + (Number(three[i]) * (3 ** count))
  //             count--
  //         }
  //     }
  //     return sum
  let num = n.toString(3).split("").reverse().join("");

  return Number.parseInt(num, 3);
}
