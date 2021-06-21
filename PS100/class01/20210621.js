const list = [1, 2, 2, 3, 4, 5, 5, 5, 6];

// 중복되지 않는 데이터를 저장하는 데이터 구조입니다.

let setVal = new Set(list);

// setVal.add(10); 🐱‍🐉 값을 추가해준다
// setVal.delet(10); 🐱‍🐉 값을 삭제해준다
// setVal.has(10); 🐱‍🐉 값이 있는지 없는지 true, false로 나타내준다

console.log(setVal.has(10));
console.log(setVal);
