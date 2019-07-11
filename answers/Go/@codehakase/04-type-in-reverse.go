package main

import (
	"fmt"
	"math/rand"
	"reflect"
	"time"
)

func main() {
	rand.Seed(time.Now().UnixNano())
	words := []string{"Discombobulated", "Paradise", "California", "Machinery"}
	for {
		var userInput string
		randWord := words[rand.Intn(len(words))]
		fmt.Printf("Type the word '%s' in reverse: ", randWord)
		fmt.Scanf("%s\n", &userInput)
		if reflect.DeepEqual(userInput, reverseStr(randWord)) {
			fmt.Println("\u2705")
		} else {
			fmt.Println("\u274C")
		}
	}
}

func reverseStr(s string) string {
	r := []rune(s)
	for i, j := 0, len(r)-1; i < len(r)/2; i, j = i+1, j-1 {
		r[i], r[j] = r[j], r[i]
	}
	return string(r)
}
