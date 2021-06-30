const arr = prompt().split(" ").reverse();
let reverseVal = "";

for (let i = 0; i < arr.length; i++) {
  reverseVal = reverseVal + (arr[i] + " ");
}

console.log(reverseVal);
