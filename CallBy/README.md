# 💛 Call by Value vs Call By Reference

> 출처 : https://velog.io/@jimmyjoo/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%8F%89%EA%B0%80%EC%A0%84%EB%9E%B5-Call-By-Value-vs-Call-By-Reference-vs-Call-By-Sharing

## 평가 전략 (Evaluation Strategy)

- 프로그래밍 공부하다보면 Call-By- 또는 Pass-By- 로 시작하는 용어들을 접하는데 그런 용어들이 의미하는 것이 바로 <b>평가전략</b>이다.

### 평가전략이란 ?

> 프로그래밍 언어에서 함수 호출의 아규먼트의 순서를 언제 결정하고 함수에 어떤 종류의 값을 통과시킬지 결정하는 것이다.

### Call-By- 와 Pass-By-

- 이 둘은 동의어처럼 쓰인다.
- 차이점 : Call 호출할 때만, Pass : 인자를 전달 한다는 의미

## 💫 Call By Value

- argument 아규먼트로 값이 넘어온다.
- 값이 넘어올 때 복사된 값이 넘어온다.
- caller(호출하는 아이)가 인자를 복사해 넘겨줬으므로 callee(호출당한 아이)에서 해당 인자를 어떻게 하든 caller(호출하는 아이)는 영향을 받지 않는다.

<br>

[예제]

```
let a = 1;

function addOne(b) { //callee
  b = b + 1;
}

addOne(a); //caller

console.log(a); // 1
```

> a라는 변수를 인수로 넘겨주었는데 이때 1이라는 값은 복사되어 인자 B에게 할당된다. a와 b의 값은 같지만 둘 다 다른 메모리 공간을 차지하게 되어 별개의 존재이기 때문에 함수 내부에서 b를 어떻게 하든 아무런 영향이 없다는 것이다.

## 💫 Call By Reference

1.  arguments로 reference(값에 대한 참조 주소, 메모리 주소를 담고 있는 변수)를 넘겨준다.
2. reference를 넘기다 보니 해당 reference가 가리키는 값을 복사하지 않는다.
3. caller(호출하는 애)가 인자를 복사해 넘기지 않았으므로 callee(호출당한 애)에서 해당 인자를 지지고 볶으면 caller(호출하는 애)는 영향을 받는다.

<br>
[예시]

```
const me = {
  name: 'Jimmy'
};

function changeName(person) { //callee 호출 당하는 애
  person.name = 'Joo';
}

console.log(me); // { name: 'Jimmy' }

changeName(me); //caller // 호출 하는 애

console.log(me); // { name: 'Joo' }
```

매개변수 <code>person</code>에 인수로 넘겨진 me의 참조값이 전달되었다. 따라서 me와 person는 같은 참조값을 가지고 있다. 따라서 changeName 함수 안에서 person.name을 바꿔주면 me.name도 변하는 것을 확인할 수 있다.