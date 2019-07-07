package main

import "fmt"

func main() {
	var salary float64
	for {
		fmt.Print("Enter salary amount: ")
		fmt.Scanf("%f", &salary)
		if salary < 1 {
			fmt.Println("Invalid salary amount")
		}
		if salary < 50000 {
			conv := salary * 5 / 100
			fmt.Printf("Tax: %.2f\n", conv)
		} else if salary <= 200000 {
			conv := salary * 10 / 100
			fmt.Printf("Tax: %.2f\n", conv)
		} else {
			conv := salary * 15 / 100
			fmt.Printf("Tax: %.2f\n", conv)
		}
	}
}
