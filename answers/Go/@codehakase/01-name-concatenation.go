package main

import "fmt"

func main() {
	var (
		firstname string
		lastname  string
		age       int
	)
	fmt.Print("Enter first name: ")
	fmt.Scanf("%s", &firstname)

	fmt.Print("Enter last name: ")
	fmt.Scanf("%s", &lastname)

	fmt.Print("Enter your age: ")
	fmt.Scanf("%d", &age)
	fmt.Print("\n")

	fmt.Printf("Welcome, %s %s (%d)\n", firstname, lastname, age)
}
