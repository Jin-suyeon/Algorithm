function solution(id_list, report, k) {
  // k번만큼 신고당하면 정지, 해당유저를 신고한 모든 유저에게 메일발송
  // 한명의 유저가 한 유저를 여러번 신고하면 1번으로 처리
  // 유저들이 받은 메일을 배열에 담아 리턴

  let userNotify = {};
  let notifyCnt = {};
  let stopUser = [];
  let result = [];

  report = report.map((el) => el.split(" "));

  // report를 돌며 배열안의 첫번째 인자에 두번째 인자를 넣어준다
  for (let i = 0; i < report.length; i++) {
    let reportUser = report[i][0];
    let getReportUser = report[i][1];
    if (!userNotify[reportUser]) {
      userNotify[reportUser] = [getReportUser];
    } else {
      userNotify[reportUser].push(getReportUser);
    }
  }

  // 중복된 이름은 제거
  // 신고당한 유저 카운트를 세준다
  for (let user in userNotify) {
    let notify = userNotify[user];
    notify = [...new Set(notify)];

    for (let i = 0; i < notify.length; i++) {
      if (!notifyCnt[notify[i]]) {
        notifyCnt[notify[i]] = 1;
      } else {
        notifyCnt[notify[i]]++;
      }
    }
  }

  for (let user in notifyCnt) {
    if (notifyCnt[user] >= k) {
      stopUser.push(user);
    }
  }

  if (stopUser.length === 0) {
    return id_list.map((el) => (el = 0));
  }

  let cnt = 0;

  for (let user in userNotify) {
    let notify = userNotify[user];
    for (let i = 0; i < notify.length; i++) {
      if (stopUser.indexOf(notify[i]) !== -1) {
        cnt++;
      }
    }
    userNotify[user] = cnt;
    cnt = 0;
  }

  for (let i = 0; i < id_list.length; i++) {
    let user = userNotify[id_list[i]];

    if (!user) {
      result.push(0);
    } else {
      result.push(userNotify[id_list[i]]);
    }
  }

  return result;
}
