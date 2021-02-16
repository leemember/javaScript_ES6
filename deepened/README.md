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
<br>

### 🤍이 둘의 차이점

- range : 배열들을 한 번에 합쳐주는 방식이다.
- L.range : 값이 필요할 때 하나씩 꺼내서 쓰는 방식이다.
