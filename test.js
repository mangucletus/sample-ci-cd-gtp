// Simple addition function
function add(a, b) {
    return a + b;
  }
  
  // Example usage
  const result = add(5, 3);
  console.log("The sum is:", result);
  
const y = 10;
const z = 20;
const sum = y + z;
console.log("The sum of y and z is:", sum);


function subtract(a, b) {
    return a - b;
  }
// Example usage
const difference = subtract(10, 4);
console.log("The difference is:", difference);  

function multiply(a, b) {
    return a * b;
  }
// Example usage
const product = multiply(6, 7);
console.log("The product is:", product);

function divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a / b;
}
  // Example usage
const quotient = divide(20, 5);
console.log("The quotient is:", quotient);