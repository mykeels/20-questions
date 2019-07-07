package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"strings"
)

func main() {
	firstFile, err := ioutil.ReadFile("./data/08-combine-two-files-1.txt")
	if err != nil {
		log.Fatalf("failed to open file1: %v", err)
	}
	secondFile, err := ioutil.ReadFile("./data/08-combine-two-files-2.txt")
	if err != nil {
		log.Fatalf("failed to open file2: %v", err)
	}
	file1Words := strings.Split(string(firstFile), "\n")
	file2Words := strings.Split(string(secondFile), "\n")
	words := []string{}
	for i := 0; i < len(file1Words); i++ {
		word := fmt.Sprintf("%s %s\n", file1Words[i], file2Words[i])
		words = append(words, word)
	}
	fmt.Println(strings.Join(words, ""))
}
