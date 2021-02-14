# ES6 함수형 자바스크립트

- 평가
> 코드가 계산되어 값을 만드는 것

- 일급
1. 값으로 다룰 수 있다.
2. 변수에 담을 수 있다.
3. 함수의 인자로 사용될 수 있다.
4. 함수의 결과로 사용될 수 있다.

- 일급 함수
1. 함수를 값으로 다룰 수 있다.
2. 조합성과 추상화의 도구

- 고차 함수
1. 함수를 값으로 다루는 함수

- 함수를 인자로 받아서 실행하는 함수
1. apply1
2. times

```
[apply1 이라는 함수]

 const apply1 = f => f(1);
 const add2 = a => a+2;
 log(apply(add2));
```

apply1이라는 고차함수는 add2를 안에서 받아 실행해주는 함수다.

```
[times 이라는 함수]

const times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
}
```

(f, n) 여기서 n의 숫자만큼 함수를 실행해준다.

```
[함수를 만들어 리턴하는 함수] (클로저를 만들어 리턴하는 함수)
## addMaker

const addMaker = a => b => a + b;
const add10 = addMaker(10);
log(add10(5)); // 결과값 : 15
log(add10(10)); // 결과값 : 20
```

클로저는 a를 기억하는 함수이다.