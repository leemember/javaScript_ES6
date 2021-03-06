## 🌟 변수

변수란 **값을 담기 위해 이름을 붙인 상자**이다. 변수는 컴퓨터의 메모리에 일정한 크기의 영역으로 생선된다.

#### 종류

- var : var는 함수 스코프
- let : 블록 스코프
- const : 블록 스코프

그리고 **var와 let**은 재할당이 가능하다.
**const**는 선언과 초기화가 반드시 동시에 일어나야 하며 재할당이 불가능하다. 즉, 상수와 같은 고정값을 선언할 때 사용하는 키워드이다.

## 🌟 리터럴 함수

```
var square = function(x) { return x * x };
```

이 코드에서 function(x){...} 이 부분이 함수 리터럴이다. 함수 리터럴은 이름이 없는 함수이므로 **익명함수** 또는 **무명함수** 라고 부른다.

## 🌟 스코프

- 변수의 참조범위이다. 전역 스코프 지역 스코프가 있다. 먼저 전역 스코프는 어디서든 참조해서 부를 수 있고, 지역 스코프는 블록 내에서만 참조할 수 있다.

- **스코프 체인이란 ?** 스코프에 변수가 없으면 상위 스코프에 올라가 찾고 거기에도 없으면 상위 스코프 올라가 찾고 없으면 에러나 언디파인트 호출.

- **렉시컬 스코프** : 호출이 아니라 선언!!!!! 시 생성되는 범위

## 🌟 호이스팅

#### 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언하는 것

- `var`변수 선언과 함수 선언문에서만 호이스팅이 일어난다.
  var 변수/함수의 선언만 위로 끌어 올려지며, 할당은 끌어 올려지지 않는다.
- `let/const` 변수 선언과 함수 표현식에서는 호이스팅이 발생하지 않는다.

## 🌟 클로저

자바스크립트가 가진 강력한 기능으로 이를 활용하면 변수를 은닉하여 지속성을 보장하는 등의 다양한 기능을 구현할 수 있습니다.

함수가 속한 **렉시컬 스코프를 기억하여 함수가 렉시컬 스코프 밖에서 실행될 때도 그 스코프에 접근할 수 있게 하는 기능** 을 말한다.
