package main

import "fmt"

func main() {
	for i := 1; i <= 12; i++ {
		for j := 2; j <= 12; j++ {
			fmt.Print(fmt.Sprintf("%v\t", i*j))
		}
		fmt.Println()
	}
}
