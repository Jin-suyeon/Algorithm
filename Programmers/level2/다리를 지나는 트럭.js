function solution(bridge_length, weight, truck_weights) {
  let bridge = new Array(bridge_length).fill(0);
  let cnt = 0;

  while (truck_weights.length > 0) {
    bridge.shift();

    let sum = bridge.reduce((a, b) => a + b, 0);

    if (sum + truck_weights[0] <= weight) {
      bridge.push(truck_weights.shift());
      cnt++;
    } else {
      bridge.push(0);
      cnt++;
    }
  }

  return cnt + bridge_length;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 	8
