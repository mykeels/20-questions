package main

import (
	"fmt"
	"math"
)

func main() {
	var (
		n     int
		value string
	)
	fmt.Println("Enter the value of base n: ")
	fmt.Scanf("%d", &n)

	fmt.Printf("Enter the base %d value you wish to convert: ", n)
	fmt.Scanf("%s", &value)

	fmt.Printf("%s base %d = %d base 10", value, n, toBase10(value, n))
}

func toBase10(value string, base int) int {
	var sum, count int
	for i := len(value) - 1; i >= 0; i-- {
		pw := math.Pow(float64(base), float64(count))
		sum += int(value[i]-'0') * int(pw)
	}
	return sum
}
