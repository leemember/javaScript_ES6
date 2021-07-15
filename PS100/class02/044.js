let num = "1234";
let sum = 0;

while (num) {
  sum = num % 10;
  num = Math.floor(num / 10);
  //소수가 나오면 안되기 때문에 Math.floor 이 메서드들을 사용했다.
}

console.log(sum);
