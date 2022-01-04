function solution(k, dungeons) {
  let visited = new Array(dungeons.length).fill(false);
  let cnt = 0;

  const numberOfCase = (k, curCnt) => {
    cnt = Math.max(curCnt, cnt);

    for (let i = 0; i < dungeons.length; i++) {
      // 현재 피로도와 전 피로도 비교
      const [minConsume, consume] = dungeons[i];

      // 현재 피로도보다 크고 확인한 적 없으면
      if (k >= minConsume && !visited[i]) {
        visited[i] = true;
        numberOfCase(k - consume, curCnt + 1);
        visited[i] = false;
      }
    }
  };
  numberOfCase(k, cnt);

  return cnt;
}

console.log(
  solution(8, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // 3
