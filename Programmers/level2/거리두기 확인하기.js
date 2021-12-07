function solution(places) {
  // P 사람 O 빈자리 X 파티션
  let answer = [];
  for (const place of places) {
    answer.push(check(place));
  }
  return answer;
}

function check(place) {
  place = place.map((el) => el.split(""));

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (place[i][j] === "P") {
        // P P
        if (j < 4 && place[i][j + 1] === "P") {
          return 0;
        }

        // P
        // P
        if (i < 4 && place[i + 1][j] === "P") {
          return 0;
        }

        // P O P
        if (j < 3 && place[i][j + 2] === "P" && place[i][j + 1] === "O") {
          return 0;
        }

        // P
        // O
        // P
        if (i < 3 && place[i + 2][j] === "P" && place[i + 1][j] === "O") {
          return 0;
        }

        // P O
        // O P
        if (i < 4 && j < 4 && place[i + 1][j + 1] === "P") {
          if (place[i + 1][j] === "O" || place[i][j + 1] === "O") {
            return 0;
          }
        }

        // O P
        // P O
        if (i < 4 && place[i + 1][j - 1] === "P") {
          if (place[i + 1][j] === "O" || place[i][j - 1] === "O") {
            return 0;
          }
        }
      }
    }
  }

  return 1;
}

console.log(
  solution([
    ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
    ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
    ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
    ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
    ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
  ])
); // [1, 0, 1, 1, 1]
