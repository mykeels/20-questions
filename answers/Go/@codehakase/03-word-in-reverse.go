package main

import "fmt"

func main() {
	var word string
	for {
		fmt.Print("Enter a word: ")
		fmt.Scanf("%s\n", &word)

		for i := len(word) - 1; i >= 0; i-- {
			fmt.Printf("%c", word[i])
		}
		fmt.Println()
	}
}
