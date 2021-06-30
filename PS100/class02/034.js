const unsorted = prompt();
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function (a, b) {
    return a - b;
  })
  .join(" ");

if (unsorted === sorted) {
  console.log("YES");
} else {
  console.log("NO");
}
