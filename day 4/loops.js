//loops are used to repeat a block of code multiple times
//for loop
//while loop
//do while loop
//for in loop
//for of loop
//1. for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
//2. while loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}
//3. do while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);
//4. for in loop
let person = { fname: "John", lname: "Doe", age: 25 };
let text = " ";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text);
//5. for of loop
let cars = ["maruti", "honda", "hyundai"];
let text1 = " ";
for (let x of cars) {
  text1 += x + " ";
}
console.log(text1);
