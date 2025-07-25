function convertToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) / (9 / 5);
  return celsius;
}

function describeTemperature(fahrenheit) {
  let c = convertToCelsius(fahrenheit);
  if (c < 0) {
    return `The temperature is ${c} celsius, which is very cold`;
  } else if (c < 20) {
    return `The temperature is ${c} celsius, which is cold`;
  } else if (c < 30) {
    return `The temperature is ${c} celsius, which is warm`;
  } else if (c < 40) {
    return `The temperature is ${c} celsius, which is hot`;
  } else {
    return `The temperature is ${c} celsius, which is very hot`;
  }
}

let fahrenheit = prompt("Provide temperature in Fahrenheit");
let description = describeTemperature(fahrenheit);

alert(`${description}`);
// document.write(description);
