const theDate = new Date();
console.log(Math.floor(theDate.getTime() / (60 * 60 * 24 * 365 * 1000)) + 1970);
//60 * 60 한시간이 가지고 있는 초. 3600초
//60 * 60 * 24 하루는 24시간이니까 하루는 86400초
// 60 * 60 * 24 * 365 --> 1년을 이루고 있는 초단위 31536000
// 60 * 60 * 24 * 365 * 1000 --> ms는 1000분의 1초니까 또 1000을 곱해준다. 31536000000 일년이 가지고 있는 ms

//theDate.getTime() == 현재의 ms
//console.log(theDate.getTime() / (60 * 60 * 24 * 365));
//지금까지 흘러온 ms에 1년의 ms를 나눠보자.

// ms를 년단위로 환산할 수 있으면 문제를 해결할 수 있을 것이다.
//1년에 몇 ms 인지 알아보자.
// 1년 짜리 ms를 나누면 그 몫이 바로 우리가 원하는 년도이다.
//소수점을 없애기 위해 Math.floor 사용하기