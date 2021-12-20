function solution(citations) {
  citations = citations.sort((a, b) => b - a);

  if (citations[0] === 0) {
    return citations[0];
  }

  for (let i = citations.length; i >= 1; i--) {
    let overNum = citations.filter((el) => el >= i).length;

    if (overNum >= i) {
      return i;
    }
  }
}

console.log(solution([3, 0, 6, 1, 5])); // 3
