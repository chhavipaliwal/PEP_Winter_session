//computed properties in object literals
//Computed properties are property names that are computed dynamically when the object is created.
//computed properties allow you to create object properties with dynamically using an expression in square bracjets([]).
{
  let propname = "c";
  const rank = {
    a: 1,
    b: 2,
    [propname]: 3,
  };
  console.log(rank.c);
}
//computed properties in object literals
{
  const createObject = (key, Value) => {
    return {
      [key]: Value,
    };
  };
  console.log(createObject("name", "Sneha"));
  console.log(createObject("age", 21));
}
//computed properties in object literals
{
  let last_name = "lastname";
  const person = {
    first_name: "Sneha",
    [last_name]: "Kumari",
  };
  console.log("My full name is " + person.first_name + " " + person.lastname);
}
//computed properties in object literals
//Computed properties are property names that are computed dynamically when the object is created.
//computed properties allow you to create object properties with dynamically using an expression in square bracjets([]).
let propname = "c";
const rank = {
  a: 1,
  b: 2,
  [propname]: 3,
};
console.log(rank.c);
//computed properties in object literals
const createObject = (key, Value) => {
  return {
    [key]: Value,
  };
};
console.log(createObject("name", "Sneha"));
console.log(createObject("age", 21));
//computed properties in object literals
let last_name = "lastname";
const person = {
  first_name: "Sneha",
  [last_name]: "Kumari",
};
console.log("My full name is " + person.first_name + " " + person.lastname);
