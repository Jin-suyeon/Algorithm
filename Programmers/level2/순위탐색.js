function countPlus(info, query) {
  let result = new Array(query.slice().length).fill(0);

  // 만약 query가 - 이면 동일하다
  for (let i = 0; i < query.length; i++) {
    for (let j = 0; j < info.length; j++) {
      let removeNumInfo = info[j].slice(0, info[j].length - 1);
      let filter = removeNumInfo.filter((el, idx) => {
        if (query[i][idx] === el || query[i][idx] === "-") {
          return true;
        }
      });
      let moreThanScore =
        Number(query[i][query[i].length - 1]) <=
        Number(info[j][info[j].length - 1]);

      if (filter.length === removeNumInfo.length && moreThanScore) {
        result[i]++;
      }
    }
  }

  return result;
}

function solution(info, query) {
  info = info.map((el) => el.split(" "));
  query = query.map((el) => el.split(" ").filter((el) => el !== "and"));

  return countPlus(info, query);
}

//!-----------------------------------------------------------------------------

function countPlus(info, query) {
  let removeNumInfo = info.slice(0, info.length - 1);
  let filter = removeNumInfo.filter((el, idx) => {
    if (query[idx] === el || query[idx] === "-") {
      return true;
    }
  });

  let moreThanScore =
    Number(query[query.length - 1]) <= Number(info[info.length - 1]);

  if (filter.length === removeNumInfo.length && moreThanScore) {
    return true;
  }

  return false;
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
