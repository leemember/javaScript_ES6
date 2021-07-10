//41번 문제 풀이

const prime = 10;

function primeFunc(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("NO");
      return false;
    }
  }
  if (prime === 1) {
    console.log("no");
    return false;
  }
  console.log("YES");
} //11이랑 같아지는 순간 종료된다.

primeFunc(10);
