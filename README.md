# 🌹 ES6 함수형 자바스크립트

- 평가
  > 코드가 계산되어 값을 만드는 것

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

1. apply1
2. times

<br>

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

## 🌹 map, filter, reduce 알아보기

함수형 프로그래밍에서 map, filter, reduce 는 아주 실용적으로 자주 쓸 수 있는 것 들이다.

### map 함수

```
 👇 map이라는 함수 선언
  const map = (f, iter) => { // 함수를 받아서 어떤 값을 출력할 것인지.
    let res = [];
    for (const a of iter) {
      res.push(f(a)); // 어떤 값을 수집하다.
    }
    return res;
  };

  😊 반복문으로 출력하게 된다.
  log(map(p => p.name, products)); (상품)
  log(map(p => p.price, products)); (가격)

```

```
 map(p => p.price, products))));
```

숫자가 들어있는 배열로 코드를 작성하면된다. 이 자리에 숫자들이 들어있는 배열을 평가를 시키면된다.

<br>

```
map(p => p.price, [
   {name: '반팔티', price: 15000},
   {name: '긴팔티', price: 20000},
]))));
```

map함수에 들어있는 products는 사실 배열함수가 들어있다는 뜻

<br>

### filter 함수

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
  log(...filter(p => p.price < 20000, products));
```

긴 코드들을 es6 문법을 통해 이렇게 간결화 시킬 수 있다.

### reduce 함수

```
  const nums = [1, 2, 3, 4, 5];

  let total = 0;
  for (const n of nums) {
    total = total + n;
  }
  log(total); //결과값 15
```

위에 nums에 들어있는 모든 값을 다 더해서 하나의 값으로 뽑아내준다.

<br>

```
  const add = (a, b) => a + b;
  😊 a와 b를 더해주기

  log(reduce(add, 0, [1, 2, 3, 4, 5]));
  😊 0을 초기값으로 시작한다. 결과값 15

  log(add(add(add(add(add(0, 1), 2), 3), 4), 5));
  😊 0을 초기값으로 하나씩 누적해나가면서 계산한다. // 결과값 15

  log(reduce(add, [1, 2, 3, 4, 5]));
  // 15

  log(
    reduce(
      (total_price, product) => total_price + product.price,
      0,
      products));
  😊 리듀스를 하고 시작하는 값을 0으로 시작한다.
  더하는 값을 total_price로 지정하고, total_price에 product.price값도 더해준다.
  이렇게 하면 총 모든 상품의 가격을 평가 할 수 있다.
```

## 🌹 map, filter, reduce 함수들을 중첩해서 사용하기

1. 첫 번째 방법

```
 log(
    reduce(
      add,
      map(p => p.price,//가격들을 map함수를 통해 배열로 뽑아낸다.
        filter(p => p.price < 20000, products))));
```

> 모든 함수들이 중첩되어 있어서 복잡해 보이지만, 오른쪽부터 왼쪽으로 읽어나가면 된다. 상품을 2만원 미만으로 필터링을 하고 그 해당하는 값을맵을 통해 뽑아낸 다음, 해당하는 모든 값을 add로 축약해서 출력하면 된다. <결과값 : 30000>

<br>
<br>

2. 두 번째 방법

```
log(
    reduce(
      add,
      filter(n => n >= 20000, // 특정 가격들을 필터함수를 통해 뽑아낸다.
        map(p => p.price, products))));
```

> map함수로 먼저 가격을 뽑아낸 다음에, 2만원 이상인 값을 필터링을 해주고 그 값에대해 add로 한 번에 축약해서 log 시킨다.
