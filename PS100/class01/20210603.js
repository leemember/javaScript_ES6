// <자바스크립트 변수의 타입>

/*
  1. 원시타입 : number, string, boolean, undefined, null 👈 이거 외엔 전부 참조타입(object)
  2. 참조타입 : object
*/

var myValue;
console.log(typeof myValue);
// 🎈 아무런 값도 넣지 않았을 때 undefined

var myValue = null;
console.log(typeof myValue);
// 이때 typeof에 myValue의 값은 null인데 왜 object로 찍히냐면 자바스크립트 만드는 사람이 잘못 만들었다고 한다. 근데 왜 고치지 않느냐하면 이미 너무나 많은 사람들이 자바스크립트로 개발을 해서 그렇다고 한다.

//🎈문제🎈
var arr = [100, 200, 300];
console.log(typeof arr);
// arr 변수는 배열이기 때문에 참조타입(object)이다.
