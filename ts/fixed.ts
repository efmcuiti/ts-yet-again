const button = document.querySelector("button");
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement; // Bang tells TS this will never be null

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  // a plus (+) converts into numbers
  console.log(add(+input1.value, +input2.value));
});
