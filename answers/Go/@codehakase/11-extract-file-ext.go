package main

import (
	"fmt"
	"strings"
)

func main() {
	paths := []string{
		"/Users/mykeels/Documents/file.txt",
		"/Users/mykeels/Documents/file.csv",
		"/Users/mykeels/Music/a-whole-new-world.mp3",
		"/Users/mykeels/Movies/a-day-to-remember.mp4",
	}
	for _, path := range paths {
		parts := strings.Split(path, ".")
		fmt.Println(parts[len(parts)-1])
	}
}
