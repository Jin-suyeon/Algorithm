function solution(citations) {
  citations = citations.sort((a, b) => b - a);

  // citations를 나열했을 때 첫번째 인덱스가 0이면 모든 논문이 0이므로 0을 리턴한다
  if (citations[0] === 0) {
    return citations[0];
  }

  // citations의 마지막 부터 시작하여 반복하며
  // citations가 i이상인 논문을 뽑아내고
  // 그 갯수가 i보다 크거나 같으면 리턴한다
  for (let i = citations.length; i >= 1; i--) {
    let overNum = citations.filter((el) => el >= i).length;

    if (overNum >= i) {
      return i;
    }
  }
}

console.log(solution([3, 0, 6, 1, 5])); // 3
