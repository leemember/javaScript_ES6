console.log(!1234);
// 이 값은 true이기 떄문에 falsy를 반환한다.

// 대표적인 Falsy 값들 입니다. (콘솔찍으면 TURE가 나옴)
console.log(!0);
console.log(!'');
console.log(!NaN); //Not A Number (숫자가 아니다)
console.log(!false);
console.log(!null);
console.log(!undefined);

//숫자가 아니다 라는 것을 반환받으려면
//🤍isNan이라는 메서드를 사용하여
//값이 숫자인지 아닌지 확인할 수도 있다.

console.log(isNaN(1));
//이게 숫자가 아닌것이 맞니 ?
//이 값이 숫자가 아닌게 맞지?!
//아니야 이 안에 있는 것은 숫자가 맞아. 그래서 false 반환

console.log(isNaN('abcd'));
//이 안에 있는 값이 문자열이면
//TRUE를 반환한다.
//그래 이 안에 있는 것은 숫자가 아니야~😁 그러니까 true
