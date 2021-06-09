let s = 0;

for (var i = 1; i <= 100; i++) {
  //1+2+3+4+5 ... + 100
  s = s + i;
  console.log(s);
  //s값이 어떻게 커지는지 확인해보기 위한 console 입력
}

// s는 0이니까 for문이 돌아가면서 i와 더해지는 것을 볼 수 있다.

console.log(s);
