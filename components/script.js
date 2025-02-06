let js = "amazing";
if (js === " amazing") alert("javascript is fun!");
10 + 10;
console.log(10 + 10);
console.log("Faith");
let firstName = "faith";
console.log(firstName);

let age = 20;
age = 21;
// const declare variable that cannot change
const yearofbirth = 1990;
var job = "Programmer";
job = "Chief producer";

const present = 2025;
const age1 = present - 1990;
const age2 = present - 2020;
console.log(age1, age2);

const marksmass = 78;
const marksheight = 1.69;

const johnmass = 92;
const johnheight = 1.95;

marksBMI = marksmass / (marksheight * marksheight);
console.log(marksBMI);
johnBMI = johnmass / (johnheight * johnheight);
console.log(johnBMI);
const markHigherBMI = marksBMI > johnBMI;
console.log(markHigherBMI);

age = 18;
if ((age = 18)) {
  console.log("you are an adult");
}
/*const best = prompt("What is your best number");
console.log(best);*/

const yeah = 20;
yeah >= 18
  ? console.log("You can drink")
  : console.log("i like something else");

//Fruit processor function
function fruitprocessor(apple, oranges) {
  console.log(apple, oranges);
  const juice = ` Juice with &{apple} apples and &{oranges} oranges`;
  return juice;
}
const applejuice = fruitprocessor(5, 0);
console.log(applejuice);
