function solution(priorities, location) {
  let count = 0;

  while (priorities.length > 0) {
    const el = priorities.shift();
    location--;
    if (el < Math.max(...priorities)) {
      priorities.push(el);
      if (location < 0) {
        location = priorities.length - 1;
      }
    } else {
      count++;
      if (location < 0) return count;
    }
  }
}
