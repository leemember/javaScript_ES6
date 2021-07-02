function one(n) {
  function two(x) {
    return Math.pow(x, n);
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

/*
one 매개변수에 들어있는 숫자로 인해 2제곱인지 3제곱인지 결정하면 된다.

  function one(n) {
    function two(x) {
        Math.pow(x, n);
    }
}

  Math.pow: 제곱의 결과를 반환해주는 메서드
  어떤 값에 제곱이라고 하면 (x,n)이라고 하면된다.
  여기서 n은 one함수에서 매개변수로 받는 n이고,
  x는 two 함수가 실행될 때 받는 매개변수이다.
  
  two에서 매개변수를 받으면 그 값에 몇 제곱이 된다.
  이렇게 된다. 제곱한 결과물을 리턴해주면 된다.
*/
