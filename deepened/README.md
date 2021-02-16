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
