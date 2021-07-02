# ✨ 2부 (32번 ~ 62번)

### 📃 문제 32번 : 문자열 만들기

- 취업 준비생인 혜림이는 자소서를 쓰고 있습니다. 열심히 자소서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁굼하게 됩니다. 혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.

```
입출력

입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
출력 : 5
```

<br>

### 👉 문제 결과

```
const words = "안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.";
console.log(words.split(" ").length);
```

`split`은 단어를 쪼개주는 메서드이고, `length`는 길이를 뜻한다. 그러니 words안에 있는 문자열들을 split() 메서드로 `" "` 공백 기준으로 쪼개고 `length`를 사용하여 단어의 갯수를 나타낸다.

[32번 문제 코드 바로보기](./032.js)

<br>

---

<br>

### 📃 문제 33번 : 거꾸로 출력하기

- 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

```
입출력

입력 : 1 2 3 4 5
출력 : 5 4 3 2 1

입력 : 2 4 6 7 8
출력 : 8 7 6 4 2
```

<br>

### 👉 문제 결과

```
const arr = prompt().split(" ").reverse();
let reverseVal = "";

for (let i = 0; i < arr.length; i++) {
  reverseVal = reverseVal + (arr[i] + " ");
}

console.log(reverseVal);
```

arr 는 `prompt` 메서드를 사용하여 입력되도록 했고 입력된 숫자들을 `split` 메서드로 문자열을 쪼개고 거꾸로 출력하기 위해 `reverse` 메서드를 사용했다.

그리고 for문을 이용하여 입력한 문자열의 `arr.length` 길이만큼 출력되도록 했다.

출력 될 때는 문자들이 구분이 잘 가게 빈칸을 넣어줬다. ` reverseVal = reverseVal + (arr[i] + " ")`

[33번 문제 코드 바로보기](./033.js)

<br>

---

<br>

### 📃 문제 34번 : sort 구현하기

- 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 민주를 위해 **키가 주어지면 순서대로 제대로 썻는지 확인하는 프로그램**을 작성해보자.
  (키는 공백으로 구분하여 입력됩니다.)

```
입출력

입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES
```

문제 34번에서 새롭게 배우는 메서드는 `sort`라는 함수이다. 이 함수는 문자열을 정렬 시켜주는 역할을 한다.

<br>

### 👉 문제 결과

```
const unsorted = prompt();
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function (a, b) {
    return a - b;
  })
  .join(" ");

if (unsorted === sorted) {
  console.log("YES");
} else {
  console.log("NO");
}
```

여기서 sort 매개변수 안에 function 함수를 넣었다. function 매개변수에 a,b를 넣으면 값들이 서로 비교를 한다. 짝수 숫자 앞에 홀수 숫자 이런 규칙으로 비교를 해준다. `return a - b;` 이렇게 반환한 이유는 a보다 b가 값이 더 큰 것이다. 즉, 음수의 값이 리턴이 되어 sort 함수는 작은 숫자를 앞으로 뺴준다. `-` 값이 리턴이 된다면 오름차순이다. 만일 내림차순으로 출력하고 싶다면 `return b - a;` 이렇게 반환해주면 된다.

최종적으로 내림차순 또는 오름차순 된 값들을 join해준다. `join`이란? 메서드는 배열에 있는 원소들을 하나로 묶어서 문자열로 반환해주는 것이다. 이때, 원소와 원소 사이에 `join(" ")` 이렇게 공백을 넣으면 공백 문자열로 반환을 해준다.

이제 비교만 해주면 되는데, 비교할 때는 if문을 사용하면 된다. prompt 메서드를 이용하여 내용물을 입력한 것과 sorted가 같다면 YES를 아니면 NO를 나타냈다.

[34번 문제 코드 바로보기](./034.js)

<br>

---

<br>

### 📃 문제 35번 : Factory 함수 사용하기

- 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.

`pass`에 코드를 작성하여 two함수를 완성하세요.

<br>

```
function one(n) {
  function two() {
    🎈//pass
  }
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
```

<br>

### 👉 문제 결과

```
function one(n) {
  function two(x) {
    return Math.pow(x, n);
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
```

one 매개변수에 들어있는 숫자로 인해 2제곱인지 3제곱인지 결정하면 된다.

```
function one(n) {
  function two(x) {
    return Math.pow(x, n);
  }
  return two;
}
```

### `Math.pow` : **제곱의 결과를 반환해주는 메서드**

<br>

어떤 값에 제곱이라고 하면 (x , n) 이라고 하면된다. 여기서 n은 one함수에서 매개변수로 받는 n이고 x는 two 함수가 실행될 때 받는 매개변수이다. two에서 매개변수를 받으면 그 값에 몇 제곱이 된다.
