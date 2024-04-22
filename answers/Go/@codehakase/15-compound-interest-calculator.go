package main

import "fmt"

func main() {
	var principal, rate float64
	var timeInYears int

	fmt.Println("Enter the principal: ")
	fmt.Scanf("%f\n", &principal)

	fmt.Println("Enter the rate %: ")
	fmt.Scanf("%f\n", &rate)

	fmt.Println("Enter the time in years: ")
	fmt.Scanf("%d\n", &timeInYears)
	fmt.Println()

	for year := 1; year <= timeInYears; year++ {
		interest := (principal * rate / 100)
		fmt.Printf("Year %d\n", year)
		fmt.Printf("Compound Interest: %.2f\n", interest)
		principal += interest
		fmt.Printf("New principal: %.2f\n", principal)
	}
}
