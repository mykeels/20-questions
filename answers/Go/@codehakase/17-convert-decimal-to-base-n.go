package main

import (
	"fmt"
)

func main() {
	var n, value int
	fmt.Println("Enter the decimal value you wish to convert: ")
	fmt.Scanf("%d\n", &value)

	fmt.Println("Enter the value of base n: ")
	fmt.Scanf("%d\n", &n)

	fmt.Printf("%d base 10 = %d base %d\n\n", value, toBaseN(value, n), n)
}

func toBaseN(number, base int) int {
	var result int
	res := []int{}
	remainder := 0
	done := false
	for !done {
		if number == 0 {
			done = true
		} else {
			number = number / base
			remainder = number % base
			res = append(res, remainder)
		}
		remainder = 0
	}
	for i := len(res) - 1; i >= 0; i-- {
		result += res[i]
	}
	return result
}
