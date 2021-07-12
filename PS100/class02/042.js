const day = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const month = "5"; //월
const date = "5"; //일

function solution(a, b) {
  // 월,일 을 의미하는 매개변수다.
  const theDay = new Date(`2021-${a}-${b}`);
  console.log(day[theDay.getDay()]);
}

solution(month, date);
