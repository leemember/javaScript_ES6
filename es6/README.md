# 🌹 ES6 함수형 자바스크립트

> 😊 함수형 자바스크립트의 가장 기본적인 개념 설명입니다. <br>
> 이 개념들을 바탕으로 응용해서 더 심화적으로 공부한 내용들은 [deepened] 폴더로 GO

<br>

## 목차 바로가기

- [이터러블/이터레이터 프로토콜](#-이터러블이터레이터-프로토콜)

- [map, filter, reduce 알아보기](#-mapfilterreduce-알아보기)

- [코드를 값으로 다루어 표현력 높이기](#-코드를-값으로-다루어-표현력-높이기)

  <br>

### 🔥 함수형 자바스크립트 라이브러리 https://github.com/marpple/fxjs

### 🔥 이 외에도 <b>functional javascript library</b>검색하면 함수형 자바스크립트에 관한 라이브러리들이 나온다.

<br>

---

<br>

- 평가

1. 코드가 계산되어 값을 만드는 것

<br>

- 일급

1. 값으로 다룰 수 있다.
2. 변수에 담을 수 있다.
3. 함수의 인자로 사용될 수 있다.
4. 함수의 결과로 사용될 수 있다.

<br>

- 일급 함수

1. 함수를 값으로 다룰 수 있다.
2. 조합성과 추상화의 도구

<br>

- 고차 함수

1. 함수를 값으로 다루는 함수

- 함수를 인자로 받아서 실행하는 함수

## <br>

<br>

### 🤍 apply1

<br>

```
[apply1 이라는 함수]

 const apply1 = f => f(1);
 const add2 = a => a+2;
 log(apply(add2));
```

> apply1라는 고차함수는 add2를 안에서 받아 실행해주는 함수다.

<br>

### 🤍 times

```
[times 이라는 함수]

const times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
}
```

> (f, n) 여기서 n의 숫자만큼 함수를 실행해준다.

<br>

```
[함수를 만들어 리턴하는 함수] (클로저를 만들어 리턴하는 함수)
## addMaker

const addMaker = a => b => a + b;
const add10 = addMaker(10);
log(add10(5)); // 결과값 : 15
log(add10(10)); // 결과값 : 20
```

클로저는 a를 기억하는 함수이다.

<br>

---

<br>

## 🌹 이터러블/이터레이터 프로토콜

- 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
- 이터레이터: { value, done } 객체를 리턴하는 next() 를 가진 값
- 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약

> 이미 많은 오픈소스 라이브러리들이나 자바스크립트에서 순회가 가능한 값은 대부분 이터러블, 이터레이터 값을 따르기 시작했다.
> 오픈소스만 이터러블 이터레이블 프로토콜을 따르는 것이 아니라, 자바스크립트가 사용되고 있는 환경인 브라우저에서 사용할 수 있는
> 웹 api에있는 구현된 많은 값들 (브라우저에 dom) 이 모두 이터러블, 이터레이터를 따르고 있다.

<br>

## 🌹 제너레이터/이터레이터

- 제너레이터: 이터레이터이자 이터러블을 생성하는 함수

```
  function* gen() {
    yield 1;
    if (false) yield 2;
    yield 3;
  }


  //🎈 yield를 사용해서 숫자를 뽑아낸다.
```

> 제너레이터는 일반 함수와 달리 function뒤에다가 \*을 붙혀서 사용한다. <br>
> 이 문법은 실제로 <b>리액트 리덕스사가</b>에서 쓰이는 문법이다.
> 자바스크립트는 굉장히 다형성이 높다. 이 제너레이터 문장을 통해 순회할 수 있는 값을 만들 수 있다는 이야기는
> 어떠한 값도 제너레이터 함수를 통해 조작할 수 있다. 제너레이터를 통해서 굉장히 다양한 값을 순회할 수 있는 이터러블을
> 프로그래머가 더 쉽게 로직을 만들어가며 순회를 시킬 수 있다.

<br>

## 🌹 map,filter,reduce 알아보기

> 함수형 프로그래밍에서 map, filter, reduce 는 아주 실용적으로 자주 쓸 수 있는 것 들이다.

<br>

### 🤍 map 함수

```
 👇 map이라는 함수 선언
  const map = (f, iter) => { // 함수를 받아서 어떤 값을 출력할 것인지.
    let res = [];
    for (const a of iter) {
      res.push(f(a)); // 어떤 값을 수집하다.
    }
    return res;
  };

  log(map(p => p.name, products)); // 반복문으로 출력하게 된다. (상품)
  log(map(p => p.price, products)); // 반복문으로 출력하게 된다. (가격)

```

<br>

### 🤍 filter 함수

> 특정 금액 이상, 이하의 상품만 뽑아내는 함수이다.

<br>

```
//필터함수 선언
const filter = (f, iter) => {
    let res = []; //배열함수
    for (const a of iter) {
      if (f(a)) res.push(a);
    }
    return res;
  };

  //출력시 이렇게 조건을 주어 출력 할 수 있다.
  //2만원 미만일 때
  log(...filter(p => p.price < 20000, products));
  //2만원 이상일 때
  log(...filter(p => p.price >= 20000, products));
```

긴 코드들을 es6 문법을 통해 이렇게 간결화 시킬 수 있다.

<br>

### 🤍 reduce 함수

> 값을 축약하는 함수이다.

<br>

## 🌹 코드를 값으로 다루어 표현력 높이기

<br>

### 🤍 go

> 함수들과 인자를 전달해서 즉시 어떤 값을 평가하는데에 사용한다.

```
const go = () => {};

go(
  0,
  a => a+1,
  a => a+2,
  a => a+100,
  log);
```

> G0 함수는 처음에 선언 된 0이라는 값이 바로 밑에 라인으로 가서 a+1을 해주고, a+1 해준 값이 그 다음 라인으로 가서
> a+2를 해주고, a+2 해준 값이 그 다음 라인으로 가서 a => a+100을 해준다.
> 쉽게 설명하자면 계단 내려가듯 누적하면서 계산을 해준다. 😀

<br>

```
const go = (...args) => reduce((a, f) => f(a), args);

go(
  0, // 😀 얘가 a로
  a => a+1, // 😄 얘가 f로
  a => a+2,
  a => a+100,
  log);
```

1.  여기서 reduce((a, f)는 첫 번째 값으로 a가 들어올 것이다.
2.  두번째 값으론 a => a + 10 이 함수가 f로 들어온다.
    그럼 f(a) 이 함수에 a를 적용해주면 해당하는 결과가 다음번째 값은 a, 그 다음번째는 f가 되어 누적되어 계산된다.

<br>

```
  -----------------------------------------
  (1)
  -----------------------------------------
  log(
    reduce(
      add,
      map(p => p.price,
        filter(p => p.price < 20000, products))));

```

1번 코드보다 2번 코드가 더 길지만 읽기가 좀 더 편해졌다 (go함수를 써서 가독성이 좋아짐)

```
  -----------------------------------------
  (2)
  -----------------------------------------
  go(
    products,
    products => filter(p => p.price < 20000, products),
    products => map(p => p.price, products),
    prices => reduce(add, prices),
    log);
```

1. products를 받아서 필터를 하겠다는 뜻 (2만원 미만의 값 뽑아내기)
2. 반복문으로 필터링 된 값들을 뽑아내준다. (map함수)
3. 그렇게 뽑아진 가격들을 받아서 리듀스로 축약해준다.

> 1번째 함수는 아래에서부터 읽어나가야 됐다면, go 함수를 사용하여 작성한 코드는 위에서부터 읽어나갈 수 있다.

<br>

### 🤍 pipe

> 함수들이 나열되어있는 합성된 함수를 만드는 함수이다. 그리고 중복된 코드들을 pipe로 묶어서 효율적으로 간략하게 코딩할 수 있다.

```
//-----------------------------------------
//(1) 조건만 다르고 중복된 코드가 있는 함수들
//-----------------------------------------

go(
  products,
  filter(p => p.price < 20000),
  map(p => p.price),
  reduce(add),
  log);

  go(
  products,
  filter(p => p.price >= 20000),
  map(p => p.price),
  reduce(add),
  log);
```

> 위 함수에서 중복된 코드들을 pipe로 묶어서 total_price 함수로 선언한다.

<br>

```
const total_price = pipe(
  // 👇 중복된 코드들
  map(p => p.price),
  reduce(add));
```

<br>

### 🤍 curry

> curry라는 함수는 함수를 값으로 다루면서 받아둔 함수를 내가 원하는 시점에 평가시킬 수 있는 함수이다. 커리라는 함수는 우선 함수를 받아서 함수를 리턴하고 인자를 받아서 원하는 개수만큼의 인자를 받아서 나중에 평가시키는 그런 함수이다.

<br>

👉🏻 이렇게 위에 쓰인 함수들을 쓰면서, 함수형 프로그래밍은 고차함수로 함수를 만들어가면서 잘게 나누어진 함수들을 계속해서 잘게 나누고 중복을 제거하는 식으로 또 더 많은 곳에 사용될 수 있게 하는 식으로 쓰인다.