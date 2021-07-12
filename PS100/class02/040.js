const weightLimit = prompt("무게제한을 입력해주세요."); // 예를들어 100키로까지라고 제한을 두고
const memberCount = prompt("몇명이 탈 계획인가요?"); //5명이 탈 계획이라 하여
let count = 0;
let totalWeight = 0;

for (let i = 0; i < memberCount; i++) {
  totalWeight = totalWeight + parseInt(prompt("몸무게를 입력해주세요"), 10); // 몸무게를 5번 입력해준다.
  //10진수로 반환받기

  if (totalWeight <= weightLimit) {
    count++; //그럼 count가 증가하며 몇명까지 탈 수 있는지 말해준다.
  }
}
console.log(count);
