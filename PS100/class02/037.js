const array = ["원범", "원범", "혜원", "혜원", "혜원", "혜원", "유진", "유진"];
let result = {};
let winner = ""; //누가 몇표다라고 나타내는 이름을 저장할 변수

// 우리가 이 데이터를 사람마다 몇표인지 가공을 하는 것이 좋을 것 같다.
// 가장 알맞는 데이터 형식은 객체형식이 알맞을 듯 하여 객체식으로 나타냈다.
// 배열상태로는 알기 어려우니 빈 객체의 변수를 만들어준다. let result = {};

for (let index in array) {
  //이 array는 저 위에 array가 맞다.
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

//console.log(Object.keys(result));
console.log(result);
winner = Object.keys(result).reduce(function (a, b) {
  console.log(a, b);
  return result[a] > result[b] ? a : b;
  //원범이의 값이 혜원이보다 크냐 ?
  //맞으면 a를 틀리면 b를
  //그렇게 결과값이 또 a에 들어가서 중첩이된다.
  //그리고 이제 혜원이와 유진이가 비교대상이 된다.
  //혜원이의 표가 또 크니 a 매개변수로 중첩된다.
  //그리고 winner라는 변수에 이 함수가 담겨있으니
  //콘솔로 결과물을 찍어내주기만 하면 된다.
});

console.log(winner);
console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
// reduce : 배열의 함수이다. 우리가 키값으로 만든 배열의 원소를 하나하나 순회하면서 function안에 있는 매개변수를
//a,b에 계속 대입을 한다. 그리고 안에 있는 함수를 실행하게한다.
//그래서 계속하여 중첩해준다.

//객체가 지원하는 메서드중에 keys라는 메서드가있다.
//이것은 객체의 키값만 배열로 반환해준다.

//index가 0일 때 array의 0은 원범이다.
//원범이가 그럼 val 에 들어가게 된다.
//우리가 만들어논 객체에 result에 원범이가 들어가 원범이라는 key가 생성됐다.
//그 값은 아무것도 없으니까 undefined인 상태이다.
//그렇게 되면 {원범:1}이 된다.
// 그리고 또 원범이 index가 array 만큼 돌아서 이번에는 false이니
// 뒤에있는 값인 result[val] + 1 이게 계산된다.
// 그래서 원범이 키 값은 2가 된다. 그렇게 혜원이도 똑같이 4, 유진이도 2가 되어
// 사람마다 몇표를 득했는지 알 수가 있다.
