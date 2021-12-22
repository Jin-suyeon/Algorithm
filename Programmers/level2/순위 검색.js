function countPlus(info, query) {
  let num = /[0-9]/;

  for (let i = 0; i < query.length; i++) {
    if (num.test(query[i]) && Number(query[i]) <= Number(info[i])) {
      continue;
    } else if (query[i] === info[i] || query[i] === "-") {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

function solution(info, query) {
  let result = new Array(query.slice().length).fill(0);

  info = info.map((el) => el.split(" "));
  query = query.map((el) => el.split(" ").filter((el) => el !== "and"));

  for (let i = 0; i < query.length; i++) {
    for (let j = 0; j < info.length; j++) {
      if (countPlus(info[j], query[i])) {
        result[i]++;
      }
    }
  }

  return result;
}
