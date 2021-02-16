const log = console.log;


// 이 파일은 함수형 프로그래밍의 많은 함수들의 기본꼴을 모아둔 파일이다.
// 앞으로 사용할 중복되는 함수들을 이 파일에 담아놈으로써
// 다른 파일에 작업을 할 때, 그냥 함수만 끌어다 쓰면 된다.
// curry, map, filter, reduce, go, pipe 등등

// curry 함수의 기본꼴
const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

// map 함수의 기본꼴
const map = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});


// filter 함수의 기본꼴
const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

// reduce 함수의 기본꼴
const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

// go 함수의 기본꼴
const go = (...args) => reduce((a, f) => f(a), args);

// pipe 함수의 기본꼴
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);