//scores라는 변수 생성하고 배열로 객체를 담는다.
const scores = ["97", "86", "75", "66", "55", "97", "85", "97", "97", "95"];

//오름차순으로 정렬하기 위해 sort라는 함수를 사용하여 정렬한다.
//안에 function이라는 함수를 사용한다.
//a,b라는 매개변수 인자를 써서 오름차순을 나타낸다.
scores.sort(function (a, b) {
  //만약  b-a를 하면 내림차순이 정렬된다.
  return a - b;
});

//오름차순 정렬을 콘솔로 찍어보면 잘 나타난다.
console.log(scores);

//🎅top3 점수 학생을 만드는 로직을 만들어보자.
let top3 = [];
let count = 0;

//top3는 1등부터 3등까지만 들어갈거라서
while (top3.length < 4) {
  //💕pop은 ? scores의 배열에 가장 끝에있는 원소를 밖으로 빼낸다.
  let value = scores.pop();
  if (!top3.includes(value)) {
    //💕includes라는 함수는 ? 이 배열 안에 있는 원소 중에 value값이
    //있다면 true 없다면 false를 반환해주는 편리한 함수이다.
    //top3안에 value값이 없다면? 그때 넣어라.
    top3.push(value); //pop으로 뺸 원소들을 value 변수에 넣고
    //value 변수는 다시 top3 배열에 push 함수를 이용하여 집어 넣어주도록 한다.
  }
  count++;
}
//top3가 길이가 3이 되는 순간 while문은 종료가 된다.

console.log(top3);
console.log(count - 1);
