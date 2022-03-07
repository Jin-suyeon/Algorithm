function solution(numbers, hand) {
  let result = "";
  let leftHand = [3, 0];
  let rightHand = [3, 2];

  let phoneIdx = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
  };

  // 두 손가락의 거리가 같은지 같지않은지 판별하는 함수
  const leftRightSameLength = (num) => {
    let presentNum = phoneIdx[num];
    let left, right;
    let la, lb, ra, rb;

    leftHand[0] - presentNum[0] < 0
      ? (la = -(leftHand[0] - presentNum[0]))
      : (la = leftHand[0] - presentNum[0]);
    leftHand[1] - presentNum[1] < 0
      ? (lb = -(leftHand[1] - presentNum[1]))
      : (lb = leftHand[1] - presentNum[1]);
    rightHand[0] - presentNum[0] < 0
      ? (ra = -(rightHand[0] - presentNum[0]))
      : (ra = rightHand[0] - presentNum[0]);
    rightHand[1] - presentNum[1] < 0
      ? (rb = -(rightHand[1] - presentNum[1]))
      : (rb = rightHand[1] - presentNum[1]);

    left = la + lb;
    right = ra + rb;

    if (left < right) {
      return "left";
    } else if (left > right) {
      return "right";
    } else {
      return "same";
    }
  };

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      leftHand = phoneIdx[numbers[i]];
      result += "L";
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      rightHand = phoneIdx[numbers[i]];
      result += "R";
    } else {
      let length = leftRightSameLength(numbers[i]);

      if (length === "same") {
        let handName = hand.split("")[0].toUpperCase();
        handName === "R"
          ? (rightHand = phoneIdx[numbers[i]])
          : (leftHand = phoneIdx[numbers[i]]);
        result += handName;
      }
      if (length === "right") {
        rightHand = phoneIdx[numbers[i]];
        result += "R";
      }
      if (length === "left") {
        leftHand = phoneIdx[numbers[i]];
        result += "L";
      }
    }
  }

  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
// 	"LRLLLRLLRRL"
