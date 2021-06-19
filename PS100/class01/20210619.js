const num = ["2", "6"];

console.log(Math.pow(num[0], num[1]));
//----------------------------
const num = prompt().split(" ");

console.log(Math.pow(parseInt(num[0], 10), parseInt(num[1], 10)));
//pow라는 함수형은 문자열로 된 숫자도 처리를 해주지만,
//좀 더 정확하게 숫자처리를 해주려면 parseInt라는 함수를 사용한다.
