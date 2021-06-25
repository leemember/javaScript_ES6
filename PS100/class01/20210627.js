const keys = prompt().split(" ");
const values = prompt().split(" ");
let obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = values[i];
}

console.log(obj);
