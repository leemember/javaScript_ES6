# 🌹 웹 게임을 만들며 배우는 JS

## 😁 들어가기 전 자바스크립트 기초부터 알아봅시다~

- 값 : 숫자, 문자("",'' 안에 문자열 작성), 불린(참/거짓)<br>
- 연산자 : 1 + 3 입력하면 / 4로 출력 (+ 덧셈, - 뺄셈, / 나눗셈, \* 곱셈, % 나머지)<br>
- 연산자 부등호 : <, >, <= 작거나 크다 , >= 크거나 같다, == 같다<br>
- 비교 연산자 : === 3번치면 더 **명확하게** 계산해준다. 그래서 비교할 때는 === 세번 사용하는 것이 좋다.

```
5 == '5' // true
5 === '5' // false
// !== 다르다
// 왠만하면 !=보다 !==를 ==보다 ===을 사용하는 것이 좋다
```

**연산자 우선순위 (수학생각하기)** (= 가 제일 마지막에 적용된다)
소괄호를 쓰면 연산자 우선순위를 바꿀 수 있다. (==,===는 비교고 =는 대입한다. 변수에 값을 넣는다는 뜻으로 보면 됩니다)

- 변수 : 값을 두고두고 사용하고 싶어서 컴퓨터한테 기억하게 하는 것.

```
var name = "홍길동"
```

- 숫자, 문자, 참거짓(불린/불리언) : undefined, null

- 조건문 (if,else)

```
var 조건 = 5*5 === 25;

if(조건) {
  '딩동댕'
} else {
  '땡'
}

// 이렇게 변수를 지정해서 if문에 사용하는 방법도 있고

if(5*5 === 25) {
  '딩동댕'
} else {
  '땡'
}

// if문 조건에 식을 넣어서 사용하는 방법도 있다.


if(3*8 === Number(prompt('답?'))) {
  '딩동댕'
} else {
  '땡'
}


```

이렇게 prompt를 사용하여 사용자한테 답을 유도할 수도 있다. 문자를 숫자로 바꾸어 사용하려면 number로 감싼다.

- 반복문 : 똑같은거 반복해서 사용할 때

```
//if문
if(조건) {

} else {

}

//while문
while(false) {
  console.log('안녕하세요)
}

while(true) {
  console.log('안녕하세요)
}
```

이렇게 해버리면 지나치게 '안녕하세요'를 무한반복하게 된다. 그러므로 ()안에 조건식을 사용하여 내가 원하는 만큼만 반복되게 설정할 수 있다.

```
var  값 = 0;

while(값<100) {
  console.log('ㅎㅇ')
  값 = 값 + 1
}
```

값이 1씩 더해줘서 출력하다가 결국 100이 되는 순간 반복문이 멈춘다.

![image](https://user-images.githubusercontent.com/71499150/118574758-0e82f780-b7c0-11eb-8012-b44a1181a1c6.png)

- 함수
  <br>
  <code>String(5)</code>
  제곱연산자 : \*\*

```
function 함수(x,z) {
  return x + z + 3 + 5;
}
```

이렇게 반복되는 것들은 숫자로 빼고 x,z값만 넣어주면 된다. function(함수)은 반복을 최소화 시키기 위하여 사용한다.

- 문자열

```
'함수야놀자'[2]
= "야"

'함수야놀자'[0]
= "함"

var  단어 = "함수야놀자"

단어.length
= 5
```

- else if

조건이 여러개 일 때 사용한다.

```
var 변수 = "오렌지";

if(변수 === "사과"); {
  "사과좋아"
} else if (변수 === "오렌지") {
  "오렌지 좋아"
} else {
  "과일 다 싫어"
}

//결과 : 오렌지 좋아
```

- ✨ for (반복문)

while문의 압축버전. while보다는 for문을 더 많이 사용한다.

```
var 조건 = 0;

while(조건 < 5>) {
  console.log("딸기 좋아")
  조건 = 조건 + 10;
}

처음

while(조건) {
  실행
  끝
}

for(처음; 조건; 끝) {
  실행
}
```