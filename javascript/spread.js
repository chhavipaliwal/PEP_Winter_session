//--spread parameter is used to spread an array into individual elements.
//---it is used to pass an array to a function that normally requires a list of many arguments.
//---it is used to copy an array.also denoted by three dots.
//---it is used to concatenate arrays.
{
  function myfunc(a, b, c) {
    console.log(a, b, c);
  }
  let arr = [1, 2, 3];
  myfunc(...arr); // 1 2 3
  const a = [1, "hello", 3];
  const b = [4, 5, 6];
  const c = [...a, ...b];
  console.log(c); //[1, "hello", 3, 4, 5, 6]
  const d = [...a, b];
  console.log(d); //[1, "hello", 3, [4, 5, 6]]
}
