// Nums 라는 Integer로 되어 있는 정렬된 Array가 있습니다. 중복된 값을 없앴을 때 Array 길이를 반환하는 함수를 작성하세요.

/*
Input : [1,2,2,3,4,4,5,6] 
Output: 6  

Input: [0,0,0,4]
 Output: 2

*/

var nums = [1, 2, 2, 3, 4, 4, 5, 6];

nums.pop(2);
nums.pop(4);

console.log(nums.length);
