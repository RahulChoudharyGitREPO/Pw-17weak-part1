{
  var myVar;
  console.log(myVar); // Output: undefined

  let myLet;
  console.log(myLet); // Output: undefined

  const myConst = undefined;
  console.log(myConst); // Output: undefined

  myVar = "Variable hoisting with var";
  console.log(myVar); // Output: Variable hoisting with var

  myLet = "Variable declared with let";
  console.log(myLet); // Output: Variable declared with let

  // You can't reassign a value to a constant variable
  // Remove the following line or comment it out to prevent an error
  // myConst = "Variable declared with const";
  // console.log(myConst);
}

// These will result in ReferenceErrors because myVar, myLet, and myConst are not defined outside the block
// console.log(myVar);
// console.log(myLet);
// console.log(myConst);
