// --------------------------------
// Math.floor 는 실수형을 제거하고 정수형만 반환되게끔

const num = ["7", "2"];

let val1 = Math.floor(num[0] / num[1]);
console.log(val1);

// --------------------------------
// 문자열의 숫자도 숫자로 취급해주지만 확실하게 숫자형으로 만들어주기 위해서
// parseInt 함수를 사용한다. parseInt 함수에 첫번째 매개변수는 num 배열에 담긴 숫자를
// 그리고 뒤에 10이라는 수는 10진수를 의미한다.
// '/' 라는 기호는 나누기를 하여 나오는 몫을 의미하고 '%'는 계산 된 후  떨어지는 나머지를 의미한다

const num = ["7", "2"];

let val1 = Math.floor(parseInt(num[0], 10) / parseInt(num[1], 10));
console.log(val1);

let val2 = parseInt(num[0], 10) % parseInt(num[1], 10);
console.log(val1, val2);
