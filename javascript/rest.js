//-----the rest variable(denoted by three dots) is used to collect all the remaining arguments into an array.
//---the first two arguments are assigned to a and b, and the rest are collected into an array called c.
//---the rest parameter must be the last parameter in the function declaration.
{
  function sum(...theargs) {
    let total = 0;
    for (const a of theargs) {
      total += a;
    }
    return total;
  }
  console.log(sum(1, 2, 3, 4, 5)); // 15

  function myfunc(a, b, ...c) {
    console.log(a, b, c);
  }
  myfunc(1, 2, 3, 4, 5); // 1 2 [3, 4, 5]
}
