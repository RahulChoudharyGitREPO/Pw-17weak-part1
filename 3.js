function addNumbers(num1, num2) {
  var sum;
  sum = 2;

  console.log("Value of 'sum' before assignment:", sum);
  sum = num1 + num2;
  return sum;
}
const result = addNumbers(5, 7);
console.log(result);
