let dec = prompt("숫자를 입력하세요");
let arrBinary = [];

while (dec) {
  arrBinary.push(dec % 2);
  dec = Math.floor(dec / 2);
}

console.log(arrBinary.reverse().join(""));
