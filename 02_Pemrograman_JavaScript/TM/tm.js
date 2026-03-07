
function fizzBuzz(arr) {

  if (!Array.isArray(arr)) {
    return "Input tidak valid";
  }

  let result = "";

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let value = "";

    if (num % 14 === 0) {
      value = "FizzBuzz";
    } else if (num % 2 === 0) {
      value = "Fizz";
    } else if (num % 7 === 0) {
      value = "Buzz";
    } else {
      value = num;
    }

    if (i === 0) {
      result += value;
    } else {
      result += " " + value;
    }
  }

  return result;
}

module.exports = fizzBuzz;