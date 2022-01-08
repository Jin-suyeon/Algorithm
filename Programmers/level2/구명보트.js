function solution(people, limit) {
  people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;
  let cnt = 0;

  while (left < right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
      cnt++;
    } else {
      right--;
    }
  }

  return people.length - cnt;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
