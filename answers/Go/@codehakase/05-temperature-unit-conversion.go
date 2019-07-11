package main

import (
	"errors"
	"fmt"
)

// ErrInvalidUnit is returned when the unit from Stdin
// is not one of the valid units.
var ErrInvalidUnit = errors.New("invalid unit selected")

// Unit represents a temperature unit
type Unit int

const (
	// CelsiusToFahrenheit represets a celsius to fahrenheit conversion unit
	CelsiusToFahrenheit Unit = 1
	// FahrenheitToCelsius represets a farenheit to celsius conversion unit
	FahrenheitToCelsius Unit = 2
	// CelsiusToKelvin represets a celsius to kelvin conversion unit
	CelsiusToKelvin Unit = 3
	// KelvinToCelsius represets a kelvin to celsius conversion unit
	KelvinToCelsius Unit = 4
	// FahrenheitToKelvin represets a farenheit to kelvin conversion unit
	FahrenheitToKelvin Unit = 5
	// KelvinToFahrenheit represets a kelvin to fahrenheit conversion unit
	KelvinToFahrenheit Unit = 6
)

func main() {
	var (
		optionUnit Unit
		input      float64
		conv       float64
	)

	for {
		fmt.Print(notice())
		fmt.Scanf("%d\n", &optionUnit)
		switch optionUnit {
		case CelsiusToFahrenheit:
			fmt.Print("Enter a celsius value: ")
			fmt.Scanf("%f\n", &input)
			conv = (input * (9.0 / 5.0)) + 32.0
			fmt.Printf("Fahrenheit value is %.3f ⁰F\n", conv)
		case FahrenheitToCelsius:
			fmt.Print("Enter a fahrenheit value: ")
			fmt.Scanf("%f\n", &input)
			conv = (input - 32) * (5.0 / 9.0)
			fmt.Printf("Celsius value is %.3f ⁰F\n", conv)
		case CelsiusToKelvin:
			fmt.Print("Enter a celsius value: ")
			fmt.Scanf("%f\n", &input)
			conv = (input + 273.15)
			fmt.Printf("Kelvin value is %.3fK\n", conv)
		case KelvinToCelsius:
			fmt.Print("Enter kelvin value: ")
			fmt.Scanf("%f\n", &input)
			conv = (input - 273.15)
			fmt.Printf("Celsius value is %.3f ⁰C\n", conv)
		case FahrenheitToKelvin:
			fmt.Print("Enter a fahrenheit value: ")
			fmt.Scanf("%f\n", &input)
			conv = (input-32)*(5.0/9.0) + 273.15
			fmt.Printf("Kelvin value is %.3fK\n", conv)
		case KelvinToFahrenheit:
			fmt.Print("Enter kelvin value: ")
			fmt.Scanf("%f\n", &input)
			conv = (input-273.15)*(9.0/5.0) + 32
			fmt.Printf("Fahrenheit value is %.3f ⁰F\n", conv)
		default:
			fmt.Println(ErrInvalidUnit)
		}
	}
}

func notice() string {
	return `
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
3. Celsius to Kelvin
4. Kelvin to Celsius
5. Fahrenheit to Kelvin
6. Kelvin to Fahrenheit

Enter an option: `
}
