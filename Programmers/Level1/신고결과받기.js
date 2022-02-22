function solution(id_list, report, k) {
  // k번만큼 신고당하면 정지, 해당유저를 신고한 모든 유저에게 메일발송
  // 한명의 유저가 한 유저를 여러번 신고하면 1번으로 처리
  // 유저들이 받은 메일을 배열에 담아 리턴

  // 먼저 유저가 신고한 사람들을 알아낸다
  // 유저들이 신고당한 횟수를 알아내고
  // 각 유저들에게 메일이 몇개 왔는지 배열에 담아 리턴한다

  report = report.map((el) => el.split(" "));
  let reportUsers = {};
  let reportUsersCnt = {};
  let stopUsers = [];

  for (let i = 0; i < report.length; i++) {
    let user = report[i][0];
    let reportUser = report[i][1];

    if (!reportUsers[user]) {
      reportUsers[user] = [reportUser];
    } else {
      reportUsers[user].push(reportUser);
    }
  }

  for (let user in reportUsers) {
    reportUsers[user] = [...new Set(reportUsers[user])];

    for (let u of reportUsers[user]) {
      if (!reportUsersCnt[u]) {
        reportUsersCnt[u] = 1;
      } else {
        reportUsersCnt[u]++;
      }
    }
  }

  for (let user in reportUsersCnt) {
    if (reportUsersCnt[user] >= k) {
      stopUsers.push(user);
    }
  }

  let cnt = 0;

  for (let user in reportUsers) {
    let arr = reportUsers[user];
    for (let i = 0; i < arr.length; i++) {
      if (stopUsers.indexOf(arr[i]) !== -1) {
        cnt++;
      }
    }
    reportUsers[user] = cnt;
    cnt = 0;
  }

  for (let i = 0; i < id_list.length; i++) {
    if (reportUsers[id_list[i]]) {
      id_list[i] = reportUsers[id_list[i]];
    } else {
      id_list[i] = 0;
    }
  }

  return id_list;
}
