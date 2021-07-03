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

[35번 문제 코드 바로보기](./035.js)

<br>

---

<br>

### 📃 문제 36번 : 구구단 출력하기.

- 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

```
입출력

입력 : 2
출력 : 2 4 6 8 10 12 14 16 18
```

<br>

### 👉 문제 결과

```
const num = prompt();
let result = "";

for (let i = 0; i < 9; i++) {
  result = result + num * (i + 1) + " ";
}

console.log(result);
```

변수 num은 구구단을 실행할 때 원하는 숫자를 입력받도록 `prompt` 메서드를 사용했다. 그리고 result 변수를 만들어 초기값은 빈칸으로 해주었고, 반복문 for문을 돌려 구구단이니 숫자 9까지만 계산되도록 했다.

그리고 i의 초기값은 0이니까 출력되는 값중 첫 값은 0이 찍혀 나올테니 이를 방지해주기 위해서 `(i + 1)` 이 값을 넣어주었다. 그리고 값이 출력 될 때 알아보기 좋게 공백도 넣어줬다.

[36번 문제 코드 바로보기](./036.js)

<br>

---

<br>

### 📃 문제 37번 : 반장 선거

- 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다. 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 했습니다.

```
입력 
원범 원범 혜원 혜원 혜원 혜원 유진 유진

출력
혜원(이)가 총 4표로 반장이 되었습니다.
```

<br>

### 👉 문제 결과

```
const array = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];
let result = {};
let winner = "";

for (let index in array) {
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
```

여기서 `array`는 배열에 객체식으로 반장선거에 나갈 사람을 담아놓았고 `let result = {};`는 결과물을 담아낼 초기 변수이다. 그리고 `let winner = ""; `는 누가 몇 표를 받았는지 승자를 걸러내어 이름을 저장할 변수이다. 

이렇게 변수를 선언해 준 뒤, for문을 이용하여 누가 몇표를 받았는지를 나타내는 함수를

```
for (let index in array) {
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}
```
이런식으로 나타내었는데, 여기서 index는 array 변수에 담긴 배열의 수를 의미한다. ` result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);`는 삼항연산자로   result[val] 가 `undefined`이면 1을 반환해주고, 그게 아니라면 `(result[val] = result[val] + 1)`를 계산해주는데, 처음에는 원범이가 들어가게 될 것이고 아무런 값이 없으니 undefined이 성립되어 true로서 1이라는 숫자가 반환될 것이다. 그러면 원범이라는 키값에 1이 들어가게 된다. `{"원범" : 1}` 이런식으로 말이다. 또 index만큼 for문이 돌아 두 번째 값에 있는 원범이는 이제 1이라는 숫자가 들어있으니  `undefined`이 아니다. 그럼 `result[val] = result[val] + 1` 이 값이 계산이 될텐데 그럼 숫자 2가 된다. 이렇게 반장선거에 나간 애들이 for문이 돌면서 값이 중첩되어 몇표를 받았는지 알 수 있게된다.

다음은 승자를 걸러내 주기 위한 함수를 만들 것이다.

```
winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
});
```
바로 winner라는 변수로 함수를 만들어 줄 것인데 Object라는 객체에는 keys라는 메서드를 제공해준다. 그래서 매개변수에 result로 반장선거에 나간 친구들의 결과물(몇표를 득했는지)을 담고 `reduce`라는 함수를 사용할 것인다. **💡이 함수의 역할은 !** 배열의 함수이다. 우리가 키 값으로 만든 배열의 원소를 하나하나 순회하면서 function안에 있는 매개변수를 a,b에 계속 대입을 한다. 그리고 안에 있는 함수를 실행하게 한다. 그래서 계속하여 a가 중첩되는데, 처음 a에는 원범이가 b에는 혜원이가 비교대상이 되어 누가 더 표를 많이 받았는지 삼항연산자로 결투를 한다. 그럼 표를 더 많이 득한 쪽이 a가 되어 또 다시 a가 매개변수로 중첩하며 `return result[a] > result[b] ? a : b;` 삼항연산자로 반환하게 되는데 이런 식으로 계속 표를 많이 득한 사람을 걸러내줄 수 있다.

마지막으로, 그 승부자를 콘솔에 찍히게끔 하기 위해

`console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);` 이렇게 백틱을 이용하여 나타냈다.
- 콘솔결과 : 혜원(이)가 총 4표로 반장이 되었습니다. 

😫 이 문제를 풀면서 넘 어려웠다. 내 것으로 만들기 위해 여러번 복습해 봐야겠다.

[37번 문제 코드 바로보기](./037.js)

<br>

---

<br>
