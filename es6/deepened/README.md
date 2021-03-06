## 🌹 지연성 1

### 🤍 range와 느긋한 L.range

> range란 ? 숫자 하나를 받고 숫자 크기만한 배열을 리턴하는 함수이다.

```
👇🏻range 함수의 기본꼴
  const range = l => {
    let i = -1;
    let res = [];
    while (++i < l) {
      res.push(i);
    }
    return res;
  };

log(range(5));
// [0,1,2,3,4]

log(range(2));
// [0,1]
```

이렇게 된 배열을 리턴하는 함수이다.

<br>

### 이 둘의 차이점

- range : 배열들을 한 번에 합쳐주는 방식이다.
- L.range : 값이 필요할 때 하나씩 꺼내서 쓰는 방식이다.

<br>

### 🤍 take 함수

> take함수는 이터러블 프로토콜을 따르고 있다.

<br>

### take 함수의 기본꼴 입니다.

```
 const take = curry((l, iter) => {
    let res = [];
    for (const a of iter) {
      res.push(a);
      if (res.length == l) return res;
    }
    return res;
  });
```

<br>

중간에 take와 숫자를 넣는 이유는, 출력 될 값을 n개 까지 짤라내준다.

```
go(
    range(10000),
    take(5), // 5개만 짤라볼 수 있는 함수이다.
    reduce(add),
    log);
  console.timeEnd('');

  console.time('');
  go(
    L.range(10000),
    take(5),
    reduce(add),
    log);
  console.timeEnd('');
```

> ☀ range(10000) 는 range함수의 10000개까지 뽑아내는 것이 아니라 그중에서 take(5), 5개 까지만 짤라내준다. L.range도 마찬가지

L.range의 경우 L.range(Infinity)로 무한개를 출력한다 해도 5개만 짤라내주는데, 그냥 일반 range인 경우 무한개로 선정 시 브라우저가 뻗게되는 상황이 온다고 한다.
이런 지연성 함수들은 take를 만날 때야 연산을 시작한다고 보면 된다.

```
[1,2,3,4,5,6,7,8...]
위에 처럼 계속하여 연속적으로 나오는 연산자를
take를 만나면 2개만 뽑아져 나온다.

=> take(2)를 할 때

([1, 2]) // 위 배열 중에 2개만 출력됨.
```

<br>

## 🌹 제너레이터/이터레이터 프로토콜로 구현하는 지연평가

### 🤍 L.map

- 평가를 미루는 성질을 가지고, 평가 순서를 달리 조작할 수 있는 이터레이터를 반환하는 제너레이터 함수이다.

```
var it = L.map(a => a + 10, [1, 2, 3]);
  log(it.next());
  log(it.next());
  log(it.next());
```

여기서 it 함수에 있는 a => a+10은 L.map이 선언한 매게변수 중 f에 속한다.

L.map은 next를 통해서 내가 평가하는 만큼의 값만 받을 수 있다.

### 🤍 L.filter

- 이터레이터를 모두 순회하면서
  yield하는 값이 L.filter인 경우에는 f를 적용해 봤을 때
  true로 값이 떨어진다면 그때 a를 yield 해주는 식이다.

```
L.filter = function *(f, iter) {
    for (const a of iter) if (f(a)) yield a;
    // 원하는 상황에만 yield해준다. (필터링)
  };
  var it = L.filter(a => a % 2, [1, 2, 3, 4]);
  log(it.next()); // 1
  log(it.next()); // 3
  log(it.next()); // value : undefined
```

> map, filter는 특정한 방식으로 다르게 평가를 받고도 똑같은 결과를 받는다는 결합법칙을 가지고 있다. 가로로 평가하지 않고, 세로로 평가를 해준다.<br><br>
> 사용하는 데이터가 무엇이든지, 사용하는 보조 함수가 순수 함수라면 무엇이든지, 아래와 같이 결합한다면 둘 다 결과가 같다고 볼 수있다.

```
[[mapping, mapping], [filtering, filtering], [mapping, mapping]]
=
[[mapping, filtering, mapping], [mapping, filtering, mapping]]
```

## 🌼 지연평가의 장점 🌼

내가 원하는 시점에 값을 뽑아낼 수 있다는 장점이 있다.

> 맵이나 필터같은 것은 지연성을 가질 수 있다고 볼 수 있고, 리듀스는 연산을 시작하는 알림이라고 볼 수 있다. 리듀스같은 연산은 중간에 연산을 시작한다 라는 뜻이다.

### 🤍 join함수

>리듀스 계열의 함수이다. (리듀스로 만들 수 있는 함수) entries 통해서

```
L.map(([k, v]) => `${k}=${v}`),
```

이렇게 만들 수 있는 함수는 map을 통해서 만들 수 있다.
join함수는 결국에는 리듀스로 결론을 내는 함수다.

### 🤍 find 함수

take를 통해서 take를 이용해서 결론을 낼 수 있는 함수이다.

### 🤍 L.flatten 함수
>결과적으로 값을 다 펼쳐서 하나의 배열로 만드는 함수이다. flatten는 값들을 즉시 평가를 해준다.

```
  const flatten = pipe(L.flatten, takeAll);
  log(flatten([[1, 2], 3, 4, [5, 6], [7, 8, 9]]));
```

### 🤍 yield *

```
L.flatten = function* (iter) {
    for (const a of iter) {
      if (isIterable(a)) for (const b of a) yield b
      else yield a;
    }
  };
```

> yield * 을 활용하면 위 코드를 아래와 같이 변경할 수 있다. 

```
yield *iterable은 for (const val of iterable) yield val;
```
과 같다.

### 🤍 L.deepFlat

> 만일 깊은 iterable을 모두 펼치고 싶다면 아래와 같이 L.deepFlat을 구현하여 사용할 수 있다.

```
L.deepFlat = function* f(iter) {
    for (const a of iter) {
      if (isIterable(a)) yield* f(a);
      else yield a;
    }
  };
  log([...L.deepFlat([1, [2, [3, 4], [[5]]]])]);
  // [1, 2, 3, 4, 5];
```

### 🤍 L.flatMap
이 함수는 map과 flatten를 동시에 하는 함수라고 보면 된다.
<b>값을 배열식으로 반복해서 뽑아내 줌 !</b>