package main

import "fmt"

func main() {
	var salary int
	for {
		fmt.Print("Enter salary amount: ")
		fmt.Scanf("%d\n", &salary)
		if salary < 1 {
			fmt.Println("Invalid salary amount")
		}
		if salary < 50000 {
			fmt.Println("Basic Earner")
		} else if salary <= 200000 {
			fmt.Println("Mid Earner")
		}
		if salary > 200000 {
			fmt.Println("High Earner")
		}
	}
}
