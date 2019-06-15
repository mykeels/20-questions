function unitConversion() {
  alert(
    "1. Celsius to Fahrenheit 2. Fahrenheit to Celsius 3. Celsius to Kelvin 4. Kelvin to Celsius 5. Fahrenheit to Kelvin 6. Kelvin to Fahrenheit"
  );
  let userInput = prompt("Enter an Option: ");

  switch (userInput) {
    case "1":
      let input1 = prompt("Enter a Celsius Value: ");
      let fahrenheit = input1 * (9 / 5) + 32;
      return `Fahrenheit value is ${fahrenheit}⁰F`;
    case "2":
      let input2 = prompt("Enter a Fahrenheit Value: ");
      let celsius = input2 - 32 * (5 / 9);
      return `celsius value is ${celsius}⁰C`;
    case "3":
      let input3 = prompt("Enter a Celsius Value: ");
      let kelvin = input3 + 273.15;
      return `Kelvin value is ${kelvin}K`;
    default:
      return "invalid";
  }
}
