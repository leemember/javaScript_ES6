# 🧡 비동기 동시성 프로그래밍

## 콜백함수의 형태

```
var a = add10(5, res => {
    add10(res, res => { 
      add10(res, res => {
        log(res);
      });
    });
  });
```
이게 끊임없이 함수가 계속된다면 콜백지옥 현상이 생긴다.
이를 보완해주는 함수가 바로 promise이다.

## promise

- 프로미스 형태

```
function add20(a) {
    return new Promise(resolve => setTimeout(() => resolve(a + 20), 100));
  } 

var b = add20(5)
        .then(add20)
        .then(add20)
```
> 여기서 Promise가 끝났다는 것을 resolve를 통해 알 수 있다.
그리고 then 메소드를 이용해 코드를 작성하기 때문에 가독성도 좋다.

## promise 활용법

```
const go1 = (a, f) => a instanceof Promise ? a.then(f) : f(a);
```
이런식으로 함수에 (인자) 들을 담아서 Promise가 맞으면 a.then(f)를 실행하고 아니면 f(a)를 출력한다. 그리고 (a, f)여기 담긴 인자들은 동기적으로 바뀌어야 될 함수여야만 한다.

## Composition
> 함수를 합성해준다.

```
  const g = a => a + 1;
  const f = a => a * a;
```
이렇게 일급 함수를 선언하고, 이것들을 합성해준다.

```
  log(f(g(1)))
```😄
이렇게 !

### Array로 합성하기

```
Array.of(1).map(g).map(f)
  [].map(g).map(f)
```
> 이렇게 연속적으로 합성하고 싶으면 map을 연달아 사용하면 된다.

### Promise로 합성하기

```
Promise.resolve(2).then(g).then(f)
  new Promise(resolve =>
    setTimeout(() => resolve(2), 100)
  ).then(g).then(f)
```
> Promise도 Array와 비슷하게, then이라는 메서드를 연달아 사용해서 함수를 합성한다.
근데 <b>🌟Promise는 Array보다 더 안전하게 합성🌟</b> 해준다.
이 경우 비동기가 일어나는 값을 가지고 g,f를 먼저 합성한 후에 하고 싶은 일을 합성한다. 그래서 array보다는 더 안전하게 합성하는 방법이라는 것이다.

## Kleisli Composition
> 오류가 있을 수 있는 상황에서의 함수를 합성 할 수 있는 규칙이다.

```
🌈 유저들의 상태를 변수에 담는다
var users = [
    {id: 1, name: 'aa'},
    {id: 2, name: 'bb'},
    {id: 3, name: 'cc'}
    // 이 배열들을 상태라고 칭한다.
  ];

🌈 유저들을 찾아주는 함수를 만든다. 없을 경우 reject로 없다고 결괏값을 뱉어준다.
  const getUserById = id =>
    find(u => u.id == id, users) || Promise.reject('없어요!');

🌈 f는 name이라는 인자로 name을 찾고 g는 유저를 찾아준다.
  const f = ({name}) => name;
  const g = getUserById;

🌈 합성함수! 합성하기 위해 then을 연달아 g랑 f를 합성하였다. 그리고 catch 함수가 합성 함수들을 정리해준다.
  const fg = id => Promise.resolve(id).then(g).then(f).catch(a => a);

🌈 그리고 fg를 2번 실행해 log 출력
  fg(2).then(log);

🌈 두 번의 pop이 일어나서, fg(2).then(log);얘를 10초 후에 또 출력시켜준다.
  setTimeout(function () {
    users.pop(); // 두번의 pop이 일어나서
    users.pop();
    fg(2).then(log);
  }, 10);
```