const num = prompt();
let result = "";

for (let i = 0; i < 9; i++) {
  result = result + num * (i + 1) + " ";
}

console.log(result);